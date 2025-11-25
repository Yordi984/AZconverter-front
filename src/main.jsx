import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";

import App from "./App.jsx";
import Redes from "./pages/redes.jsx";
import Nosotros from "./pages/nosotros.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/redes" element={<Redes />} />
      <Route path="/nosotros" element={<Nosotros />} />
    </Routes>
  </BrowserRouter>
);
