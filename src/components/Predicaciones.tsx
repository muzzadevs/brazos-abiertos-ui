
import React from 'react';
import { Play, Pause, Volume2, SkipBack, SkipForward } from 'lucide-react';
import PredicacionCard from './PredicacionCard';

// Datos de ejemplo para las predicaciones
const predicacionesEjemplo = [
  {
    id: 1,
    titulo: "El amor incondicional de Dios",
    predicador: "Pastor Juan Martínez",
    audioUrl: "/public/audios/predicacion1.mp3", // Ruta de ejemplo
    fecha: "18-06-2023"
  },
  {
    id: 2,
    titulo: "Fe en tiempos difíciles",
    predicador: "Pastora María Gómez",
    audioUrl: "/public/audios/predicacion2.mp3", // Ruta de ejemplo
    fecha: "25-06-2023"
  },
  {
    id: 3,
    titulo: "El poder de la oración",
    predicador: "Diácono Pedro Rodríguez",
    audioUrl: "/public/audios/predicacion3.mp3", // Ruta de ejemplo
    fecha: "02-07-2023"
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
          {predicacionesEjemplo.map((predicacion) => (
            <PredicacionCard key={predicacion.id} predicacion={predicacion} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Predicaciones;
