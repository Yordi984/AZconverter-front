import "../index.css";
import axios from "axios";
import { useState, useEffect } from "react";
import Header from "./header";
import { io } from "socket.io-client";

export default function App() {
  const [loading, setLoading] = useState(false);
  const [type, setType] = useState("video");
  const [progress, setProgress] = useState(0);
  const [socket, setSocket] = useState(null);
  const [socketReady, setSocketReady] = useState(false);

  useEffect(() => {
    const s = io("http://localhost:3000");

    s.on("connect", () => {
      console.log("✅ Socket conectado con id:", s.id);
      setSocket(s);
      setSocketReady(true);
    });

    s.on("progress", (data) => {
      console.log("📡 progress desde socket:", data);
      if (data && typeof data.progress === "number") {
        setProgress(Math.round(data.progress));
      }
    });

    s.on("disconnect", () => {
      console.log("❌ Socket desconectado");
      setSocketReady(false);
    });

    return () => {
      s.disconnect();
    };
  }, []);

  async function Peticion() {
    const urlInput = document.getElementById("url");
    const url = urlInput?.value.trim();

    if (!url) {
      alert("Ingresa una URL válida de YouTube");
      return;
    }

    if (!socket || !socketReady || !socket.id) {
      alert("No hay conexión con el servidor");
      return;
    }

    setLoading(true);
    setProgress(0);

    try {
      const endpoint = type === "playlist" ? "/playlist" : "/download";

      const response = await axios.post(
        `http://localhost:3000${endpoint}`,
        { url, socketId: socket.id },
        {
          headers: { "Content-Type": "application/json" },
          responseType: "blob",
        }
      );

      const disposition = response.headers["content-disposition"];
      let fileName = "audio.mp3";

      if (disposition) {
        const fileNameMatch = disposition.match(/filename="?([^"]+)"?/);
        if (fileNameMatch && fileNameMatch[1]) {
          fileName = decodeURIComponent(fileNameMatch[1]);
        }
      }

      const blob = new Blob([response.data], {
        type: type === "playlist" ? "application/zip" : "audio/mpeg",
      });
      const downloadUrl = window.URL.createObjectURL(blob);

      const a = document.createElement("a");
      a.href = downloadUrl;
      a.download = fileName;
      document.body.appendChild(a);
      a.click();
      a.remove();

      window.URL.revokeObjectURL(downloadUrl);
      if (urlInput) urlInput.value = "";
    } catch (error) {
      console.error(
        "❌ Error al descargar:",
        error.response?.data || error.message
      );
      alert("Ocurrió un error. Verifica la URL.");
    } finally {
      setLoading(false);
      setProgress(0);
    }
  }

  return (
    <>
      {loading && (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/85">
          <span className="loading loading-ring w-24 h-24 text-white"></span>
          <p className="mt-4 text-white text-xl sm:text-2xl">Descargando...</p>
          <p className="mt-2 text-white text-lg sm:text-xl">{progress}%</p>
        </div>
      )}

      {/* Contenedor principal: ocupa toda la pantalla */}
      <div className="flex min-h-screen flex-col bg-black text-white">
        {/* Header */}
        <Header />

        {/* Contenido central responsivo */}
        <main className="flex-1 flex items-center justify-center px-4 py-8">
          <div className="w-full max-w-xl sm:max-w-2xl flex flex-col items-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-center">
              Convertidor YouTube a MP3
            </h1>

            <p className="text-sm sm:text-base md:text-lg text-center mb-8 sm:mb-10 leading-relaxed max-w-2xl">
              Convierte videos y playlist de YouTube a MP3 de forma rápida,
              gratuita y sin necesidad de registrarte. Solo pega el enlace,
              elige el tipo de contenido, presiona <strong>“Convertir”</strong>{" "}
              y descarga el audio en alta calidad.
            </p>

            {/* Input y botón borrar */}
            <div className="flex w-full max-w-xl gap-2 mb-6 flex-col xs:flex-row sm:flex-row">
              <div className="flex-1 flex">
                <input
                  id="url"
                  type="text"
                  placeholder="Pega aquí tu enlace de YouTube"
                  className="border border-white/40 bg-black text-white rounded-md px-4 py-2 w-full text-sm sm:text-base"
                  style={{
                    WebkitTextFillColor: "white",
                    WebkitBackgroundClip: "text",
                  }}
                  disabled={loading}
                />
              </div>
              <button
                className="border border-white text-white rounded-md hover:bg-white hover:text-black transition duration-200 px-3 py-2 text-sm sm:text-base"
                onClick={() => {
                  const input = document.getElementById("url");
                  input.value = "";
                }}
                disabled={loading}
              >
                X
              </button>
            </div>

            {/* Select + Convertir */}
            <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6">
              <select
                className="px-4 py-2 bg-black text-white border border-white/40 rounded-md text-sm sm:text-base w-full sm:w-auto"
                value={type}
                onChange={(e) => setType(e.target.value)}
                disabled={loading}
              >
                <option value="video">Canción</option>
                <option value="playlist">Playlist</option>
              </select>

              <button
                onClick={Peticion}
                className="px-6 py-2 border border-white text-white rounded-md hover:text-black transition duration-200 input-neon hover:bg-white w-full sm:w-auto text-sm sm:text-base"
                disabled={loading}
              >
                {loading ? "Procesando..." : "Convertir"}
              </button>
            </div>
          </div>
        </main>

        {/* Footer siempre abajo, responsivo */}
        <footer className="mt-auto w-full bg-black flex justify-center">
          <div className="w-full max-w-4xl px-4 py-4 sm:py-8 text-center text-xs sm:text-sm">
            ©Yordi Madrigal
          </div>
        </footer>
      </div>
    </>
  );
}

