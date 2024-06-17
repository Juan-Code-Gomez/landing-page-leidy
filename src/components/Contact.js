import React from 'react';

function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Contáctanos</h2>
        <form className="w-full max-w-lg mx-auto">
          <div className="mb-4">
            <input
              className="w-full p-3 border border-gray-300 rounded-lg"
              type="text"
              placeholder="Nombre"
            />
          </div>
          <div className="mb-4">
            <input
              className="w-full p-3 border border-gray-300 rounded-lg"
              type="email"
              placeholder="Email"
            />
          </div>
          <div className="mb-4">
            <textarea
              className="w-full p-3 border border-gray-300 rounded-lg"
              placeholder="Mensaje"
            />
          </div>
          <button
            className="bg-blue-600 text-white px-6 py-3 rounded-full"
            type="submit"
          >
            Enviar
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;