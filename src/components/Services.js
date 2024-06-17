import React from 'react';

function Services() {
  return (
    <section id="services" className="py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Nuestros Servicios</h2>
        <div className="flex flex-wrap justify-center">
          <div className="w-full md:w-1/3 p-4">
            <div className="bg-white shadow-lg p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Terapia Manual</h3>
              <p>Descripción del servicio de terapia manual.</p>
            </div>
          </div>
          <div className="w-full md:w-1/3 p-4">
            <div className="bg-white shadow-lg p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Rehabilitación Deportiva</h3>
              <p>Descripción del servicio de rehabilitación deportiva.</p>
            </div>
          </div>
          <div className="w-full md:w-1/3 p-4">
            <div className="bg-white shadow-lg p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Masajes Terapéuticos</h3>
              <p>Descripción del servicio de masajes terapéuticos.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;