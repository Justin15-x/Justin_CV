import React from 'react';

function Map() {
  return (
    <section id="ubicacion" className="mb-10">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Ubicación</h2>
      <div className="w-full h-72 rounded-xl overflow-hidden shadow-sm border border-gray-200">
        <iframe
          title="Mapa de Aguascalientes"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          src="https://maps.google.com/maps?q=Aguascalientes,%20Mexico&t=&z=12&ie=UTF8&iwloc=&output=embed"
        ></iframe>
      </div>
    </section>
  );
}

export default Map;
