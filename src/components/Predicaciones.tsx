
import React from 'react';
import { Play, Pause, Volume2, SkipBack, SkipForward } from 'lucide-react';
import PredicacionCard from './PredicacionCard';

// Predicaciones
const predicaciones = [
  {
    id: 1,
    titulo: "Inversiones",
    predicador: "Jonathan Rego",
    audioUrl: "/audios/inversiones_J_REGO.mp3", // Ruta de ejemplo
    fecha: "30-03-2025"
  }
];

const Predicaciones = () => {
  return (
    <section id="predicaciones" className="py-20 px-4 bg-white relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 text-sm font-semibold text-iglesia-azul-oscuro bg-iglesia-azul-claro/20 rounded-full mb-4">
            Nuestras enseñanzas
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-iglesia-azul-profundo mb-4">
            Predicaciones
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Escucha las últimas predicaciones y mensajes de nuestra iglesia para crecer en tu fe
          </p>
        </div>

        <div className="space-y-6">
          {predicaciones.map((predicacion) => (
            <PredicacionCard key={predicacion.id} predicacion={predicacion} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Predicaciones;
