import React from 'react';
import { stack } from '../../helpers/ArregloLinks';

const AboutUs = () => {
  return (
    <section id="nosotros" className="py-24 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <div className="absolute top-10 left-10 w-64 h-64 bg-purple-600 rounded-full blur-[120px]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Lado Izquierdo: Misión Corporativa */}
          <div className="lg:w-1/2">
            <h2 className="text-sm uppercase tracking-[0.3em] text-purple-500 font-semibold mb-3">
              Ingeniería de Software de Alto Impacto
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Soluciones <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-pink-600">Multiplataforma</span> a Medida
            </h3>
            <p className="text-gray-400 text-lg -mb-15 leading-relaxed">
              En <strong>Magic Komox</strong>, transformamos desafíos complejos en ecosistemas digitales robustos. Nos especializamos en el desarrollo de software de alto rendimiento, cubriendo desde aplicaciones web escalables y soluciones móviles nativas, hasta potentes sistemas de escritorio para entornos empresariales exigentes.
            </p>
            
            <div className="mt-20 border-t border-white/5 pt-5">
              <p className="text-gray-500 font-mono text-xs uppercase tracking-widest mb-5 text-center">
                Instrumentación y Tecnologías Core
              </p>
              <div className="flex flex-wrap justify-center md:gap-4 opacity-70 hover:opacity-100 transition-opacity duration-500">
                {stack.map((tool, index) => (
                  <div 
                    key={index} 
                    className="flex items-center gap-2 group cursor-default"
                  >
                    <i className={`${tool.icon} text-purple-500 group-hover:text-pink-500 transition-colors`}></i>
                    <span className="text-gray-400 group-hover:text-white transition-colors font-medium">
                      {tool.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Lado Derecho: Especialidades */}
          <div className="lg:w-1/2 w-full">
            <div className="relative group">
              <div className="absolute -inset-1 bg-linear-to-r from-purple-600 to-pink-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
              <div className="relative bg-[#161616] border border-white/10 p-8 rounded-2xl">
                <h4 className="text-white font-mono text-sm mb-6">{"// Nuestros Pilares"}</h4>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="text-purple-500 text-2xl"><i className="bi bi-browser-edge"></i></div>
                    <div>
                      <h5 className="text-white font-semibold">Desarrollo Web Enterprise</h5>
                      <p className="text-gray-500 text-sm">Plataformas reactivas y seguras con tecnologías de última generación.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="text-purple-500 text-2xl"><i className="bi bi-phone"></i></div>
                    <div>
                      <h5 className="text-white font-semibold">Aplicaciones Móviles Nativo/Híbrido</h5>
                      <p className="text-gray-500 text-sm">Experiencias fluidas en iOS y Android centradas en el usuario.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="text-purple-500 text-2xl"><i className="bi bi-pc-display"></i></div>
                    <div>
                      <h5 className="text-white font-semibold">Software de Escritorio Robusto</h5>
                      <p className="text-gray-500 text-sm">Sistemas standalone de alto procesamiento y estabilidad.</p>
                    </div>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
