
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

// Componente NavBar con efecto glassmorphism
const NavBar = () => {
  // Estado para controlar el menú móvil
  const [isOpen, setIsOpen] = useState(false);
  // Estado para controlar el color de fondo del navbar al hacer scroll
  const [scrolled, setScrolled] = useState(false);
  // Estado para determinar si estamos en la sección de inicio (para cambiar color de logo)
  const [isOnHome, setIsOnHome] = useState(true);

  // Efecto para manejar el scroll y cambiar la transparencia del navbar
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      // Si hemos hecho scroll más de 50px, cambiamos el estado
      if (offset > 50) {
        setScrolled(true);
        // Si estamos por debajo del hero, cambiamos el estado de isOnHome
        if (offset > window.innerHeight - 100) {
          setIsOnHome(false);
        } else {
          setIsOnHome(true);
        }
      } else {
        setScrolled(false);
        setIsOnHome(true);
      }
    };

    // Añadimos el event listener
    window.addEventListener('scroll', handleScroll);
    
    // Limpiamos el event listener al desmontar
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Función para manejar el scroll suave a las secciones
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false); // Cerramos el menú móvil al navegar
    }
  };

  // Función para determinar la clase del logo según la sección
  const logoClass = isOnHome ? 'text-white' : 'text-iglesia-azul-oscuro';

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass-navbar py-2' : 'py-4 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        {/* Logo de la iglesia */}
        <div className="flex items-center">
          <h1 className={`text-xl md:text-2xl font-bold transition-colors duration-300 ${logoClass}`}>
            Brazos Abiertos
          </h1>
        </div>

        {/* Navegación escritorio */}
        <div className="hidden md:flex space-x-8">
          {['inicio', 'predicaciones', 'contacto'].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className={`text-sm font-medium uppercase tracking-wide ${
                isOnHome ? 'text-white hover:text-iglesia-azul-claro' : 'text-iglesia-azul-oscuro hover:text-iglesia-azul-medio'
              } transition-colors`}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </button>
          ))}
        </div>

        {/* Botón menú móvil */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Menú móvil */}
      <div
        className={`fixed inset-0 z-40 glass bg-iglesia-azul-profundo/90 backdrop-blur-lg transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden flex flex-col items-center justify-center`}
      >
        <div className="flex flex-col items-center space-y-8">
          {['inicio', 'predicaciones', 'contacto'].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className="text-xl font-semibold text-white hover:text-iglesia-azul-claro transition-colors"
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
