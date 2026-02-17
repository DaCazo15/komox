import React from 'react';

const Contact = () => {
  return (
    <section id="contacto" className="py-24 relative overflow-hidden">
      {/* Elemento decorativo de fondo */}
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full blur-[150px] pointer-events-none"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          
          {/* Lado Izquierdo: Información */}
          <div className="lg:w-1/2">
            <h2 className="text-purple-500 font-mono text-sm uppercase tracking-[0.4em] mb-4">
              ¿Listo para el siguiente nivel?
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Hablemos de tu <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-pink-600">
                próximo proyecto
              </span>
            </h3>
            <p className="text-gray-400 text-lg mb-10 leading-relaxed">
              Estamos listos para transformar tus ideas en software robusto. Ya sea una plataforma web enterprise, 
              una App móvil o un sistema desktop complejo, nuestro equipo está a un mensaje de distancia.
            </p>

            {/* Datos de contacto rápidos */}
            <div className="space-y-6">
              <div className="flex items-center gap-4 text-gray-300">
                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-purple-500">
                  <i className="bi bi-envelope-at text-xl"></i>
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase font-bold">Email</p>
                  <p className="text-white">dcazorla@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4 text-gray-300">
                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-purple-500">
                  <i className="bi bi-geo-alt text-xl"></i>
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase font-bold">Ubicación</p>
                  <p className="text-white">Global | Remoto</p>
                </div>
              </div>
            </div>
          </div>

          {/* Lado Derecho: Formulario Estilizado */}
          <div className="lg:w-1/2 w-full">
            <form className="bg-white/5 border border-white/10 p-8 md:p-10 rounded-3xl backdrop-blur-sm">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="space-y-2">
                  <label className="text-xs uppercase font-bold text-gray-400 tracking-widest ml-1">Nombre</label>
                  <input 
                    type="text" 
                    placeholder="Tu nombre..."
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white outline-hidden focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase font-bold text-gray-400 tracking-widest ml-1">Email</label>
                  <input 
                    type="email" 
                    placeholder="Coloca tu correo..."
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white outline-hidden focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all"
                  />
                </div>
              </div>
              <div className="space-y-2 mb-8">
                <label className="text-xs uppercase font-bold text-gray-400 tracking-widest ml-1">Mensaje</label>
                <textarea 
                  rows="4" 
                  placeholder="Cuéntanos sobre tu idea..."
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white outline-hidden focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all resize-none"
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="w-full bg-linear-to-r from-purple-600 to-pink-600 text-white font-bold py-4 rounded-xl hover:shadow-[0_0_20px_rgba(168,85,247,0.4)] transition-all transform active:scale-95"
              >
                Enviar Propuesta
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
