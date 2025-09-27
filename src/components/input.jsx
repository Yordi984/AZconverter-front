import "../index.css";
import axios from "axios";
import { useState } from "react";
import Header from "./header";

export default function App() {
  const [loading, setLoading] = useState(false);
  const [type, setType] = useState("video");

  async function Peticion() {
    const urlInput = document.getElementById("url");
    const url = urlInput?.value.trim();

    if (!url) {
      alert("Ingresa una URL válida de YouTube");
      return;
    }

    setLoading(true);
    try {
      const endpoint = type === "playlist" ? "/playlist" : "/download";

      const response = await axios.post(
        `http://217.154.100.207:3000${endpoint}`,
        { url },
        {
          headers: { "Content-Type": "application/json" },
          responseType: "blob",
        }
      );

      const disposition = response.headers["content-disposition"];
      let fileName = "audio.mp3";

      if (disposition) {
        const fileNameMatch = disposition.match(/filename="?([^"]+)"?/);
        if (fileNameMatch?.[1]) {
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
    }
  }

  return (
    <>
      {loading && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgba(0,0,0,0.85)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
            flexDirection: "column",
          }}
        >
          <span className="loading loading-ring w-24 h-24 text-white"></span>
          <p className="mt-4 text-white text-xl">Descargando...</p>
        </div>
      )}

      <div className="flex flex-col min-h-screen bg-black">
        {/* Header */}
        <Header />

        {/* Contenido central */}
        <main className="flex-1 flex flex-col items-center px-4 pt-12">
          <h1 className="text-3xl font-bold mb-6 text-white text-center pt-16">
            Convertidor YouTube a MP3
          </h1>
          <p className="text-white max-w-2xl text-center text-lg mb-8 leading-relaxed">
            Convierte videos y playlist de YouTube a MP3 de forma rápida,
            gratuita y sin necesidad de registrarte. Solo pega el enlace, elige
            el tipo de contenido, presiona <strong>“Convertir”</strong> y
            descarga el audio en alta calidad.
          </p>

          {/* Input y botón borrar */}
          <div className="flex gap-2 justify-center mb-6 w-full max-w-md">
            <input
              id="url"
              type="text"
              placeholder="Pega aquí tu enlace de YouTube"
              className="border bg-black text-white rounded-md px-4 py-2 w-full"
              style={{
                WebkitTextFillColor: "white",
                WebkitBackgroundClip: "text",
              }}
              disabled={loading}
            />
            <button
              className="border border-white text-white rounded-md hover:bg-white hover:text-black transition duration-200 px-3 py-2 "
              onClick={() => {
                const input = document.getElementById("url");
                if (input) input.value = "";
              }}
            >
              X
            </button>
          </div>

          {/* Select + Convertir */}
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-14">
            <select
              className="px-4 py-2 bg-black text-white border rounded-md"
              value={type}
              onChange={(e) => setType(e.target.value)}
              disabled={loading}
            >
              <option value="video">Canción</option>
              <option value="playlist">Playlist</option>
            </select>

            <button
              onClick={Peticion}
              className="px-6 py-2 border border-white text-white rounded-md  hover:text-black transition duration-200 input-neon  hover:bg-white"
              disabled={loading}
            >
              {loading ? "Procesando..." : "Convertir"}
            </button>
          </div>
        </main>

        {/* Footer siempre abajo */}
        <footer className="flex justify-center text-white  bg-black mt-auto w-full p-14">
          ©Yordi Madrigal
        </footer>
      </div>
    </>
  );
}
