import React from "react";
import { MapPin, Phone } from "lucide-react";

const Contacto = () => {
  return (
    <section id="contacto" className="py-20 px-4 bg-gray-50 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 text-sm font-semibold text-iglesia-azul-oscuro bg-iglesia-azul-claro/20 rounded-full mb-4">
            Encuéntranos
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-iglesia-azul-profundo mb-4">
            Contacto
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Nos encantaría que nos visitaras y buscasemos juntos al Señor.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="glass-card p-8 rounded-2xl text-center md:text-left">
            <h3 className="text-xl font-semibold text-iglesia-azul-oscuro mb-6">
              Información de Contacto
            </h3>

            <div className="space-y-6">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-iglesia-azul-oscuro/10 flex items-center justify-center text-iglesia-azul-oscuro">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-iglesia-azul-oscuro mb-1">
                    Dirección
                  </h4>
                  <a
                    href="https://maps.app.goo.gl/xqk3MEKGafQTwsu2A"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-iglesia-azul-medio"
                  >
                    Avenida Lehendakari Aguirre 186, <br />
                    San Ignacio, Bilbao
                  </a>
                </div>
              </div>

              <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-iglesia-azul-oscuro/10 flex items-center justify-center text-iglesia-azul-oscuro">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-iglesia-azul-oscuro mb-1">
                    Teléfono
                  </h4>
                  <p className="text-gray-600">Pastor Jonathan</p>
                  <a
                    href="tel:+34607498181"
                    className="text-iglesia-azul-medio hover:text-iglesia-azul-oscuro transition-colors"
                  >
                    607 49 81 81
                  </a>
                  <br />
                  <p className="text-gray-600">Pastor Miguel</p>
                  <a
                    href="tel:+34661512505"
                    className="text-iglesia-azul-medio hover:text-iglesia-azul-oscuro transition-colors"
                  >
                    661 51 25 05
                  </a>
                </div>
              </div>

              <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-iglesia-azul-oscuro/10 flex items-center justify-center text-iglesia-azul-oscuro">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-iglesia-azul-oscuro mb-1">
                    Horarios
                  </h4>
                  <p className="text-gray-600">
                    Domingos de celebración a las 19:00 <br />
                    Martes de oración a las 19:30 <br />
                    Jueves de estudio a las 18:30 <br />
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="glass-card rounded-2xl overflow-hidden h-[400px] md:h-auto">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6890.526787997185!2d-2.968567323484422!3d43.283705376249976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd4e50705ee088a3%3A0x5bebad5b87cafa9e!2sBrazos%20Abiertos!5e0!3m2!1ses!2ses!4v1748516685778!5m2!1ses!2ses"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa de la ubicación de la iglesia"
              className="w-full h-full"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacto;
