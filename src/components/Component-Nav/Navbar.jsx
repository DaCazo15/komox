import React from 'react';
import logo from '../../assets/img/Logo.png';
import { links, menu } from '../../helpers/ArregloLinks';

const Navbar = ({ isOpen, toggleMenu }) => {
  const medidas = `lg:px-10 px-4 lg:pt-0 pt-1`
  
  

  return (
    <nav 
      className={[
        'fixed top-0 left-0 w-full z-50 morado-oscuro backdrop-blur-md border-b border-white/10 text-white shadow-lg transition-all duration-300',
        medidas
      ]}>


      <div className="container mx-auto flex items-center justify-between p-4">
        
        {/* Logo con un ligero hover de escala */}
        <div className="flex items-center">
          <img 
            src={logo} 
            alt="logotipo" 
            className="w-16 sm:w-32 hover:scale-105 transition-transform duration-300 cursor-pointer"
          />
        </div>

        {/* Links de Navegación - Diseño más limpio sin botones en cada link */}
        <div className="hidden lg:block">
          <ul className="flex gap-8 items-center">
            {links.map((link) => (
              <li key={link.id}>
                <a 
                  href={link.url}
                  className="
                    relative text-xs ms:text-ms uppercase 
                    tracking-wider poppins-medium 
                    opacity-80 hover:opacity-100 
                    transition-all duration-300 
                    after:content-[''] after:absolute after:w-0 after:h-0.5 
                    after:bg-pink-500/25 after:left-0 after:-bottom-1 hover:after:w-full after:transition-all"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Redes Sociales y Acción */}
        <div className="flex items-center gap-6">
          {/* Botón de llamada a la acción opcional */}
          <button 
            onClick={() => document.getElementById('contacto').scrollIntoView({ behavior: 'smooth' })}
            className="hidden lg:block ml-4 btn-morado-claro px-6 py-2 rounded-full font-bold text-sm uppercase tracking-tight shadow-lg shadow-purple-900/50"
          >
            Contacto
          </button>
          <div className='block lg:hidden'>
            <i className={`
              ${menu.icon} 
              cursor-pointer text-2xl text-white 
              inline-block transform transition-transform duration-300
              ${isOpen ? '-rotate-90' : ''}`} onClick={toggleMenu}></i>
          </div>
        </div>
      </div>
      
    </nav>
  );
};

export default Navbar;
