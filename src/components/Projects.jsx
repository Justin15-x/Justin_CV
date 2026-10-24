import React from 'react';

function Projects() {
  return (
    <section id="proyectos" className="mb-10">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Proyectos Destacados</h2>
        <div className="space-y-4">
          <div className="bg-gray-50 p-5 rounded-lg border border-gray-100">
            <h3 className="text-xl font-bold text-gray-800">Dental Pro</h3>
            <p className="text-gray-700 mt-2">Sistema Full-Stack de gestión para clínicas dentales. Incluye manejo de expedientes de pacientes, programación de citas, autenticación mediante JWT.</p>
          </div>
          <div className="bg-gray-50 p-5 rounded-lg border border-gray-100">
            <h3 className="text-xl font-bold text-gray-800">El Náufrago</h3>
            <p className="text-gray-700 mt-2">Aplicación web en tiempo real con módulos de gestión de base de datos independientes para flujos de meseros, cocina y barra.</p>
          </div>
          <div className="bg-gray-50 p-5 rounded-lg border border-gray-100">
            <h3 className="text-xl font-bold text-gray-800">Adoratrices Vet Records Hub</h3>
            <p className="text-gray-700 mt-2">Sistema de gestión de inventario y historial de la clínica veterinaria desarrollando e implementando el patrón de diseño de software Repository. </p>
          </div>
        </div>
      </section>
  );
}

export default Projects;
