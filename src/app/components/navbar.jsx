"use client";

import React, { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div className="bg-red-600 text-white p-4 sticky top-0 z-10">
      <div className="container mx-auto">
        <div className="flex items-center justify-between mx-auto">
          <div className="text-3xl font-semibold hover:text-gray-600">
            <a href="/">Manabou.</a>
          </div>
          <div className="relative">
            <button
              className="text-3xl text-white hover:text-gray-600"
              onClick={toggleMenu}
            >
              {isMenuOpen ? "✖" : "☰"}
            </button>
            {isMenuOpen && (
              <div className="absolute text-center right-0 mt-4 bg-gray-700 text-white rounded-md shadow-lg shadow-gray-700">
                <a
                  href="institutos"
                  className="block text-xl px-20 py-2 hover:bg-gray-500 duration-1000"
                >
                  Institutos
                </a>
                <a
                  href="material"
                  className="block text-xl px-20 py-2 hover:bg-gray-500 duration-1000"
                >
                  Material
                </a>
                <a
                  href="videos"
                  className="block text-xl px-20 py-2 hover:bg-gray-500 duration-1000"
                  style={{ whiteSpace: "nowrap" }}
                >
                  Cursos y Videos
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
