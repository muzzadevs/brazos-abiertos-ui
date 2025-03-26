
import React from 'react';
import { MapPin, Phone } from 'lucide-react';

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
            Nos encantaría que nos visitaras y te unieras a nuestra comunidad
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="glass-card p-8 rounded-2xl text-center md:text-left">
            <h3 className="text-xl font-semibold text-iglesia-azul-oscuro mb-6">Información de Contacto</h3>
            
            <div className="space-y-6">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-iglesia-azul-oscuro/10 flex items-center justify-center text-iglesia-azul-oscuro">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-iglesia-azul-oscuro mb-1">Dirección</h4>
                  <p className="text-gray-600">
                    Avenida Lehendakari Aguirre 186, <br />
                    San Ignacio, Bilbao
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-iglesia-azul-oscuro/10 flex items-center justify-center text-iglesia-azul-oscuro">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-iglesia-azul-oscuro mb-1">Teléfono</h4>
                  <p className="text-gray-600">
                    Pastor Jonathan
                  </p>
                  <a 
                    href="tel:+34607498181" 
                    className="text-iglesia-azul-medio hover:text-iglesia-azul-oscuro transition-colors"
                  >
                    607 49 81 81
                  </a>
                  <br />
                  <p className="text-gray-600">
                    Pastor Miguel
                  </p>
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
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-iglesia-azul-oscuro mb-1">Horarios</h4>
                  <p className="text-gray-600">
                    Domingos: 19:00 - 21:00 <br />
                    Martes: 19:30 - 21:00 <br />
                    Jueves: 18:30 - 20:00 <br />
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="glass-card rounded-2xl overflow-hidden h-[400px] md:h-auto">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2905.396944074702!2d-2.9384929842517093!3d43.269831579135845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd4e4fac87ce1c15%3A0xa2e10f815a570a0!2sAv.%20Lehendakari%20Aguirre%2C%20186%2C%2048015%20Bilbao%2C%20Vizcaya!5e0!3m2!1ses!2ses!4v1623242445830!5m2!1ses!2ses" 
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
