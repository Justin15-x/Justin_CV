// Archivo: src/components/Navbar.jsx
import React from 'react';

function Navbar() {
  return (
    <nav className="sticky top-0 bg-white/90 backdrop-blur-md shadow-sm border-b z-50 mb-8 py-4 px-6">
      <div className="max-w-4xl mx-auto flex justify-between items-center">
        <span className="font-bold text-gray-900 text-lg">JC</span>
        
        <ul className="flex space-x-6 text-sm font-medium text-gray-600">
          <li>
            <a href="#inicio" className="hover:text-blue-600 transition-colors">Inicio</a>
          </li>
          <li>
            <a href="#tecnologias" className="hover:text-blue-600 transition-colors">Tecnologías</a>
          </li>
          <li>
            <a href="#proyectos" className="hover:text-blue-600 transition-colors">Proyectos</a>
          </li>
          <li>
            <a href="#educacion" className="hover:text-blue-600 transition-colors">Educación</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;