
import React from 'react';

function Skills() {
  return (
    <section id="tecnologias" className="mb-10">
      
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Tecnologías y Herramientas</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-4 rounded-lg shadow-sm border">
            <h3 className="font-bold text-blue-600 border-b pb-2 mb-3">Frontend</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>React & JavaScript</li>
              <li>Tailwind CSS</li>
            </ul>
          </div> 
          <div className="bg-white p-4 rounded-lg shadow-sm border">
            <h3 className="font-bold text-green-600 border-b pb-2 mb-3">Backend & Base de Datos</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Node.js & Express</li>
              <li>PostgreSQL, MySQL, MariaDB</li>
              <li>MongoDB & SQL Server</li>
              <li>Supabase</li>
            </ul>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm border">
            <h3 className="font-bold text-purple-600 border-b pb-2 mb-3">DevOps & Arquitectura</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Docker</li>
              <li>Git, GitHub & Git Flow</li>
              <li>Vercel</li>
            </ul>
          </div>
        </div>
      </section>
  );
}

export default Skills;