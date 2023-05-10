import React from 'react'
import Navbar from './Navbar';
import Hero from './Hero';
import About from './About';
import { StarsCanvas } from './canvas';
import Experience from './Experience';
import Contact from './Contact';

const Home = () => {
  return (
    <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <StarsCanvas />
        <Experience />
          <Contact />
          </div>
  )
}

export default Home