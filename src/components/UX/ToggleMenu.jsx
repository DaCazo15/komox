import React from 'react'
import { links } from '../../helpers/ArregloLinks'

const Menu = ({isOpen}) => {
  return (
    <div>
      {isOpen && (
          <div className="
           fixed top-15 left-0 z-50 
            py-5 w-full max-min-auto 
            lg:hidden 
            bg-linear-to-t to-[#430179] via-transparent from-[#430179] 
            backdrop-blur-md
            rounded-b-4xl mb-5
            border-b border-white/10
            transition-all duration-300
          ">
            <ul className="flex flex-col gap-8 items-center text-white">
              {[
                ...links, 
                {
                  id: 4, 
                  name: 'Contacto', 
                  url: '#contacto'
                }
              ].map((link) => (
                <li key={link.id}>
                  <a 
                    href={link.url}
                    className="relative text-xs ms:text-ms uppercase tracking-wider poppins-medium opacity-80 hover:opacity-100 transition-all duration-300 after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-pink-500/25 after:left-0 after:-bottom-1 hover:after:w-full after:transition-all"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
    </div>
  )
}

export default Menu
