import React from 'react'
import Personaje from '../../assets/img/Personaje.png'
import fondo from '../../assets/img/Fondo.png'
import { motion } from 'framer-motion'
import { sliceUp } from '../../assets/utility/animation'

const Hero = () => {
  const fondoStyle = {
    backgroundImage: `url(${fondo})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    position: 'relative',
    zIndex: '-z-20'
  };
  return (
    <section 
      id="inicio"
      style={fondoStyle} 
      className="
        relative w-full min-h-screen flex flex-col bg-tranparent overflow-hidden 
        mask-[linear-gradient(to_bottom,black_70%,transparent_100%)]
      "
    >

      
      <div className="container mx-auto flex-1 flex flex-col items-center justify-center z-10 ">
        <h1 className="
          py-5 px-2 text-7xl md:text-9xl font-bold tracking-tighter
          bg-linear-to-tl from-pink-500 to-pink-500 
          
          bg-size[0%_100%] bg-no-repeat bg-left bg-clip-text text-white 
          hover:text-transparent transition-all duration-700 hover:bg-size[50%_100%] hover:bg-size[100%_100%]
          lg:text-[8rem] text-[4rem]
        "
        >
          Magic Komox
        </h1>
        <p className="text-purple-300 text-xl text-[1rem] lg:text-2xl">
          Transformando ideas en software robusto.
        </p>
      </div>
      <div>
        <motion.img 
          src={Personaje} 
          variants={sliceUp(0.5)}
          initial="initial"
          animate="animate"
          alt="Personaje del sitio"
          className="
            max-h-180 h-140 w-auto 
            absolute -right-20 bottom-4
            lg:h-130 lg:bottom-4 lg:right-5
            /* Máscara de desvanecimiento vertical */
            mask-[linear-gradient(to_bottom,black_70%,transparent_100%)]
          "
        />
      </div>
    </section>
  )
}

export default Hero
