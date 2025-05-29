import PredicacionCard from "./PredicacionCard";

// Predicaciones
const predicaciones = [
  {
    id: 1,
    titulo: "Inversiones",
    predicador: "Jonatan Rego",
    audioUrl: "/audios/inversiones_J_REGO.mp3",
    fecha: "30-03-2025",
  },
  {
    id: 2,
    titulo: "El precio de lo irremediable",
    predicador: "David Muza",
    audioUrl: "/audios/elpreciodeloirremediable.mp3",
    fecha: "13-04-2025",
  },
  {
    id: 3,
    titulo: "Gratitud",
    predicador: "Miguel Muza",
    audioUrl: "/audios/gratitud.mp3",
    fecha: "20-04-2025",
  },
  {
    id: 4,
    titulo: "Por menos de 30 monedas",
    predicador: "Jonatan Rego",
    audioUrl: "/audios/pormenosde30monedas.mp3",
    fecha: "27-04-2025",
  },
  {
    id: 5,
    titulo: "El día que Dios echó a correr",
    predicador: "David Muza",
    audioUrl: "/audios/eldiaquediosechoacorrer.mp3",
    fecha: "04-05-2025",
  },
  {
    id: 6,
    titulo: "Un paso más",
    predicador: "Jonatan Rego",
    audioUrl: "/audios/unpasomas.mp3",
    fecha: "11-05-2025",
  },
  {
    id: 7,
    titulo: "Inteligencia mental",
    predicador: "Marlene Vargas",
    audioUrl: "/audios/inteligenciamental.mp3",
    fecha: "25-05-2025",
  },
];

const Predicaciones = () => {
  return (
    <section id="predicaciones" className="py-20 px-4 bg-white relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-4">
          <h2 className="text-3xl md:text-4xl font-bold text-iglesia-azul-profundo mb-2">
            Predicaciones
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Escucha las últimas predicaciones para profundizar y mediar en la
            palabra de Dios y en tu fe.
          </p>
        </div>

        <div className="space-y-6">
          {predicaciones
            .slice() // para no mutar el array original
            .sort((a, b) => {
              // Formato de fecha: dd-mm-yyyy
              const [da, ma, ya] = a.fecha.split("-").map(Number);
              const [db, mb, yb] = b.fecha.split("-").map(Number);
              const dateA = new Date(ya, ma - 1, da);
              const dateB = new Date(yb, mb - 1, db);
              return dateB.getTime() - dateA.getTime(); // Más recientes primero
            })
            .map((predicacion) => (
              <PredicacionCard key={predicacion.id} predicacion={predicacion} />
            ))}
        </div>
      </div>
    </section>
  );
};

export default Predicaciones;
