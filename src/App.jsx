import React from 'react'
import Hero from './sections/Hero.jsx'
import About from './sections/About.jsx'
import TechStack from './sections/TechStack.jsx'
import { Project } from './sections/Project.jsx'
import { Contact } from './sections/Contact.jsx'
import Footer from './components/Footer.jsx'
import NavBar from './components/NavBar.jsx'
import { Education } from './sections/Education.jsx'
import { Certificate } from './sections/Certificate.jsx'
import './constants/i18n.js';

const App = () => {
  return (
    <div className=''>
      <NavBar />
      <Hero/>
      <About />
      <Education />
      <TechStack />
      <Project />
      <Certificate />
      <Contact />
      <Footer />
    </div>
  )
}

export default App