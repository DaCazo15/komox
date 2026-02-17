import React from 'react';
import { services } from '../../helpers/ArregloLinks';

const Services = () => {
  return (
    <section id="servicios" className="py-24 bg-[#0a0a0a] rounded-2xl relative">
      <div className="container mx-auto px-6">
        
        {/* Cabecera de sección */}
        <div className="text-center mb-20">
          <h2 className="text-purple-500 font-mono text-sm uppercase tracking-[0.4em] mb-4">
            Nuestra Expertise
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white">
            Soluciones de Ingeniería <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-pink-600">
              Sin Límites
            </span>
          </h3>
        </div>

        {/* Grid de Servicios */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group relative p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-purple-500/50 transition-all duration-500 hover:-translate-y-2"
            >
              {/* Efecto de brillo al hacer hover */}
              <div className="absolute inset-0 bg-linear-to-br from-purple-600/10 to-transparent opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity"></div>
              
              <div className="relative z-10">
                <div className="w-14 h-14 bg-purple-600/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                  <i className={`${service.icon} text-3xl text-purple-400`}></i>
                </div>
                
                <h4 className="text-2xl font-bold text-white mb-4">
                  {service.title}
                </h4>
                
                <p className="text-gray-400 leading-relaxed mb-8">
                  {service.desc}
                </p>

                {/* Tags Tecnológicos */}
                <div className="flex flex-wrap gap-2">
                  {service.tags.map((tag, tIndex) => (
                    <span 
                      key={tIndex} 
                      className="text-[10px] uppercase tracking-widest font-bold px-3 py-1 bg-white/5 text-gray-400 rounded-full border border-white/5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
