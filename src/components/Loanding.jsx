// import express, { Request, Response } from "express";
// import cors from "cors";
// import fs from "fs";
// import path from "path";
// import { globSync } from "glob";
// import ytdlp from "yt-dlp-exec";
// import archiver from "archiver";

// const app = express();
// const PORT = 3000;

// app.use(express.json());
// app.use(
//   cors({
//     exposedHeaders: ["Content-Disposition"],
//   })
// );

// const downloadDir = path.join(__dirname, "downloads");
// const zipPath = path.join(__dirname, "downloads.zip");

// if (!fs.existsSync(downloadDir)) fs.mkdirSync(downloadDir);

// app.post("/playlist", async (req: Request, res: Response) => {
//   const { url: youtubeURL } = req.body;

//   if (
//     !youtubeURL ||
//     !/^(https?:\/\/)?(www\.)?(youtube\.com\/playlist\?list=)/.test(youtubeURL)
//   ) {
//     return res.status(400).send("❌ URL de Playlist no válida");
//   }

//   try {
//     await ytdlp(youtubeURL, {
//       extractAudio: true,
//       audioFormat: "mp3",
//       output: path.join(downloadDir, "%(title)s.%(ext)s"),
//       yesPlaylist: true,
//       noWarnings: true,
//     });

//     const files = globSync(`${downloadDir}/*.mp3`);
//     if (files.length === 0) {
//       return res.status(404).send("No se encontraron archivos MP3");
//     }

//     // Crear zip
//     const output = fs.createWriteStream(zipPath);
//     const archive = archiver("zip", { zlib: { level: 9 } });

//     output.on("close", () => {
//       // Enviar zip
//       res.download(zipPath, "playlist.zip", (err) => {
//         if (err) console.error("❌ Error al enviar el zip:", err);

//         // Borrar archivos .mp3 y el zip
//         files.forEach((file) => fs.unlinkSync(file));
//         if (fs.existsSync(zipPath)) fs.unlinkSync(zipPath);
//       });
//     });

//     archive.on("error", (err) => {
//       throw err;
//     });

//     archive.pipe(output);

//     files.forEach((file) => {
//       archive.file(file, { name: path.basename(file) });
//     });

//     await archive.finalize();
//   } catch (error) {
//     console.error("❌ Error:", error);
//     res.status(500).send("Error al descargar la playlist");
//   }
// });

// app.listen(PORT, () => {
//   console.log(`🚀 Servidor activo en http://localhost:${PORT}`);
// });
