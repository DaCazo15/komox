import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className=" text-white pt-5 pb-4 px-10 w-full">
      <div className="container">
        <div className="gap-5">
          {/* Columna 1: Marca */}
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-2xl font-bold bg-linear-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent mb-4">
              Magic Komox
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              Ingeniería de software de alto impacto. Especialistas en soluciones robustas para la era digital.
            </p>
          </div>

        </div>

        {/* Línea Divisoria y Copyright */}
        <div className=" pt-8 flex flex-col md:flex-row justify-between items-center w-full">
          <p className="text-gray-600 text-xs">
            &copy; {currentYear} Magic Komox. <span className="hidden md:inline">|</span> Transformando ideas en software robusto.
          </p>
          
          {/* Social Links Rápidos */}
          <div className="flex gap-6 my-4">
            <a href="#" className="text-gray-500 hover:text-white transition-colors text-lg"><i className="bi bi-github"></i></a>
            <a href="#" className="text-gray-500 hover:text-white transition-colors text-lg"><i className="bi bi-linkedin"></i></a>
            <a href="#" className="text-gray-500 hover:text-white transition-colors text-lg"><i className="bi bi-instagram"></i></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
