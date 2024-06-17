import React from 'react';

function Footer() {
  return (
    <footer className="bg-blue-600 text-white p-4">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} Fisioterapia ABC. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;