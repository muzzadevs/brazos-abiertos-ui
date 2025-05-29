import React, { useState, useRef } from "react";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";

// Definición del tipo para las propiedades
interface PredicacionProps {
  predicacion: {
    id: number;
    titulo: string;
    predicador: string;
    audioUrl: string;
    fecha: string;
  };
}

const PredicacionCard: React.FC<PredicacionProps> = ({ predicacion }) => {
  // Estados para el reproductor de audio
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const [isMuted, setIsMuted] = useState(false);

  // Referencia al elemento de audio
  const audioRef = useRef<HTMLAudioElement>(null);

  // Manejadores para el reproductor
  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTime = Number(e.target.value);
    setCurrentTime(newTime);
    if (audioRef.current) {
      audioRef.current.currentTime = newTime;
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = Number(e.target.value);
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
    if (newVolume === 0) {
      setIsMuted(true);
    } else {
      setIsMuted(false);
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      if (isMuted) {
        audioRef.current.volume = volume || 1;
        setIsMuted(false);
      } else {
        audioRef.current.volume = 0;
        setIsMuted(true);
      }
    }
  };

  // Formatear tiempo para mostrar
  const formatTime = (timeInSeconds: number) => {
    const hours = Math.floor(timeInSeconds / 3600);
    const minutes = Math.floor((timeInSeconds % 3600) / 60);
    const seconds = Math.floor(timeInSeconds % 60);

    return `${hours}:${minutes < 10 ? "0" : ""}${minutes}:${
      seconds < 10 ? "0" : ""
    }${seconds}`;
  };

  return (
    <div className="glass-card p-6 transition-all duration-300 hover:shadow-lg animate-fade-in">
      <div className="flex flex-col md:flex-row gap-4 md:gap-6">
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-iglesia-azul-oscuro mb-2">
            {predicacion.titulo}
          </h3>
          <p className="text-gray-600 mb-1">{predicacion.predicador}</p>
          <p className="text-sm text-iglesia-azul-oscuro">
            {predicacion.fecha}
          </p>
        </div>

        <div className="flex-1">
          {/* Elemento de audio oculto */}
          <audio
            ref={audioRef}
            src={predicacion.audioUrl}
            onTimeUpdate={handleTimeUpdate}
            onLoadedMetadata={handleLoadedMetadata}
            onEnded={() => setIsPlaying(false)}
            preload="metadata"
            className="hidden"
          />

          {/* Reproductor personalizado */}
          <div className="mt-4 md:mt-0">
            <div className="flex items-center mb-2">
              <button
                onClick={togglePlay}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-iglesia-azul-oscuro text-white hover:bg-iglesia-azul-medio transition-colors"
                aria-label={isPlaying ? "Pausar" : "Reproducir"}
              >
                {isPlaying ? (
                  <Pause size={18} />
                ) : (
                  <Play size={18} className="ml-1" />
                )}
              </button>

              <div className="flex-1 mx-4">
                <input
                  type="range"
                  min={0}
                  max={duration || 0}
                  value={currentTime}
                  onChange={handleSeek}
                  className="w-full h-2 rounded-full appearance-none bg-gray-300 accent-iglesia-azul-oscuro cursor-pointer"
                  aria-label="Progreso de la predicación"
                />
              </div>

              <div className="text-sm text-gray-500 min-w-[60px] text-right">
                {formatTime(currentTime)} /{" "}
                {duration ? formatTime(duration) : "0:00"}
              </div>
            </div>

            <div className="flex items-center">
              <button
                onClick={toggleMute}
                className="text-gray-600 hover:text-iglesia-azul-oscuro transition-colors mr-2"
                aria-label={isMuted ? "Activar sonido" : "Silenciar"}
              >
                {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
              </button>

              <input
                type="range"
                min={0}
                max={1}
                step={0.1}
                value={isMuted ? 0 : volume}
                onChange={handleVolumeChange}
                className="w-20 h-1.5 rounded-full appearance-none bg-gray-300 accent-iglesia-azul-oscuro cursor-pointer"
                aria-label="Volumen"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PredicacionCard;
