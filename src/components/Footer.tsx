
import React from 'react';

const Footer = () => {
  // Obtener el año actual para el copyright
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-iglesia-azul-profundo text-white py-10 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-xl font-bold mb-1">Iglesia Brazos Abiertos</h2>
            <p className="text-sm opacity-70">Un lugar para todos</p>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-sm opacity-70">
              &copy; {currentYear} Iglesia Brazos Abiertos. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
