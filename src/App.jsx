import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Experience from './components/sections/Experience';
import Contact from './components/sections/Contact';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import Universe from './components/Universe';

function App() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 font-sans selection:bg-accent-500/30 overflow-x-hidden relative">
      <CustomCursor />
      
      {/* Moving Universe Background */}
      <Universe />
      
      {/* Light subtle grid */}
      <div className="fixed inset-0 z-0 bg-grid-pattern opacity-[0.3] pointer-events-none" />

      <div className="relative z-10">
        <Navbar scrollY={scrollY} />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
