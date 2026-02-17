import React, { useState } from 'react'
import Hero from './components/Component-Hero/Hero'
import Navbar from './components/Component-Nav/Navbar'
import ToggleMenu from './components/UX/ToggleMenu'
import SocialTicker from './components/UX/SocialTicker'
import AboutUs from './components/Component-AboutUs/AboutUs'
import Services from './components/Component-Services/Services'
import Contact from './components/Component-Contact/Contact'
import Footer from './components/Component-Footer/Footer'

function App() {

  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div  className='bg-linear-to-b from-[#430179] to-[#0a0a0a]'>
      <div className='flex flex-col min-h-screen items-center'>

        <Navbar isOpen={isOpen} toggleMenu={toggleMenu} />
        <ToggleMenu isOpen={isOpen} />
        <Hero />
        <SocialTicker />
        <AboutUs />
        <Services />
        <Contact />
      </div>
      <Footer />
    </div>
  )
}

export default App
