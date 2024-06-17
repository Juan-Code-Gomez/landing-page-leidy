import React from 'react';

function Testimonials() {
  return (
    <section id="testimonials" className="bg-gray-100 py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Testimonios</h2>
        <div className="flex flex-wrap justify-center">
          <div className="w-full md:w-1/3 p-4">
            <div className="bg-white shadow-lg p-6 rounded-lg">
              <p>"La mejor experiencia de fisioterapia que he tenido. ¡Altamente recomendable!"</p>
              <p className="mt-4 font-bold">- Juan Pérez</p>
            </div>
          </div>
          <div className="w-full md:w-1/3 p-4">
            <div className="bg-white shadow-lg p-6 rounded-lg">
              <p>"Profesionales y muy amables. Me ayudaron a recuperarme rápidamente."</p>
              <p className="mt-4 font-bold">- María López</p>
            </div>
          </div>
          <div className="w-full md:w-1/3 p-4">
            <div className="bg-white shadow-lg p-6 rounded-lg">
              <p>"Excelente servicio y atención personalizada."</p>
              <p className="mt-4 font-bold">- Carlos García</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;