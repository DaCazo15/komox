import React from 'react'
import { links } from '../../helpers/ArregloLinks'

const ToggleMenu = ({ isOpen, toggleMenu }) => {
  return (
    <div className={`
      /* Posicionamiento fijo para cubrir toda la pantalla */
      fixed inset-0 z-40 bg-linear-to-b from-[#430179] via-transparent to-[#0a0a0a] backdrop-blur-md
      flex flex-col items-center justify-center lg:hidden
      transition-all duration-500 ease-in-out
      /* Manejo de visibilidad basado en el estado */
      ${isOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'}
    `}>
      
      <ul className="flex flex-col gap-8 items-center">
        {[...links, {id:4, name: 'Contacto', url: '#contacto'}].map((link) => (
          <li key={link.id}>
            <a 
              href={link.url}
              onClick={toggleMenu} /* Importante: cerrar el menú al hacer clic */
              className="
                text-3xl uppercase tracking-[0.2em] poppins-bold
                text-white opacity-80 hover:opacity-100 hover:text-purple-500
                transition-all duration-300
              "
            >
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ToggleMenu
