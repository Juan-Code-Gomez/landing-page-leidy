import { useState } from "react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-bold">Leidy Saa</div>
        <div className="hidden md:flex space-x-4">
          <a href="#" className="text-white hover:bg-gray-700">
            Inicio
          </a>
          <a href="#services" className="px-4 hover:bg-gray-700">
            Servicios
          </a>
          <a href="#" className="text-white hover:bg-gray-700">
            Acerca de
          </a>
          <a href="#" className="text-white hover:bg-gray-700">
            Servicios
          </a>
          <a href="#" className="text-white hover:bg-gray-700">
            Contacto
          </a>
        </div>
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <a href="#" className="block text-white p-2">
            Inicio
          </a>
          <a href="#" className="block text-white p-2">
            Acerca de
          </a>
          <a href="#" className="block text-white p-2">
            Servicios
          </a>
          <a href="#" className="block text-white p-2">
            Contacto
          </a>
        </div>
      )}
    </header>
  );
}

export default Header;
