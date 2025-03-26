
import React, { useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const logoRef = useRef<HTMLDivElement>(null);

  // Efecto para la animación del logo
  useEffect(() => {
    if (logoRef.current) {
      logoRef.current.classList.add('animate-fade-in');
    }
  }, []);

  // Función para manejar el scroll a la siguiente sección
  const scrollToSection = () => {
    const predicacionesSection = document.getElementById('predicaciones');
    if (predicacionesSection) {
      predicacionesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="relative h-screen w-full overflow-hidden bg-agua-animado">
      {/* Overlay para mejor contraste con el texto */}
      <div className="absolute inset-0 bg-iglesia-azul-profundo/20 z-0"></div>
      
      {/* Contenido centrado */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 text-white">
        <div ref={logoRef} className="glass rounded-full p-8 mb-10 animate-pulse-slow">
          <img
            src="/lovable-uploads/2877c561-e978-435f-84cb-b743fd876ff2.png"
            alt="Logo Brazos Abiertos"
            className="w-32 h-32 md:w-48 md:h-48 object-contain"
          />
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold text-center mb-4 animate-fade-in">
          Brazos Abiertos
        </h1>
        
        <p className="text-lg md:text-xl text-center max-w-2xl animate-fade-in opacity-90">
          Un lugar de encuentro, amor y esperanza para todos
        </p>
      </div>
      
      {/* Flecha para bajar */}
      <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-float">
        <button
          onClick={scrollToSection}
          aria-label="Scroll hacia abajo"
          className="text-white hover:text-iglesia-azul-claro transition-colors duration-300"
        >
          <ChevronDown size={32} />
        </button>
      </div>
    </section>
  );
};

export default Hero;
