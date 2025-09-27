import React from "react";

export default function Header() {
  return (
    <div className="bg-black py-6 px-4">
      <nav className="flex flex-wrap justify-center gap-4 sm:gap-12">
        <a
          href="#"
          className="text-white text-sm sm:text-base hover:text-gray-300 transition"
        >
          Home
        </a>
        <a
          href="#"
          className="text-white text-sm sm:text-base hover:text-gray-300 transition"
        >
          Redes Sociales
        </a>
        <a
          href="#"
          className="text-white text-sm sm:text-base hover:text-gray-300 transition"
        >
          Nosotros
        </a>
      </nav>
    </div>
  );
}
