import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Mail } from 'lucide-react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Hero = () => {
  const roles = [
    "Aspiring Java Full Stack Developer",
    "Passionate about Backend & Frontend",
    "Building Technology for Real-World Impact"
  ];
  
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }, 3000); // Change role every 3 seconds

    return () => clearInterval(intervalId);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col space-y-6"
          >
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center space-x-2 bg-accent-500/10 border border-accent-500/20 rounded-full px-4 py-1.5 w-max"
            >
              <span className="w-2 h-2 rounded-full bg-accent-500 animate-pulse"></span>
              <span className="text-sm font-medium text-accent-300">Available for Opportunities</span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-slate-50">
              Hi, I'm <br />
              <span className="bg-gradient-to-r from-accent-400 via-accent-400 to-accent-400 bg-clip-text text-transparent bg-300% animate-gradient-x">
                Aaditya Jadhav
              </span>
            </h1>

            <div className="h-12 flex items-center">
              <motion.p
                key={currentRoleIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.5 }}
                className="text-xl md:text-2xl font-medium text-slate-300"
              >
                {roles[currentRoleIndex]}
              </motion.p>
            </div>

            <p className="text-slate-400 text-lg max-w-lg leading-relaxed">
              An Aspiring Java Full Stack Developer focused on building robust, scalable, and user-centric web applications.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <a 
                href="#projects"
                className="group flex items-center space-x-2 bg-accent-500 text-slate-950 px-6 py-3 rounded-full font-medium transition-all hover:bg-accent-400 shadow-[0_0_15px_rgba(0,229,153,0.5)]"
              >
                <span>View Projects</span>
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="https://drive.google.com/file/d/1pev3oVbj98UKjYfAFc01fIegTSElKz6y/view?usp=drivesdk"
                target="_blank"
                rel="noreferrer"
                className="flex items-center space-x-2 glassmorphism-dark px-6 py-3 rounded-full font-medium text-slate-50 transition-all hover:bg-slate-50/5"
              >
                <Download size={18} />
                <span>Download Resume</span>
              </a>
            </div>

            <div className="flex items-center space-x-6 pt-8">
              <a href="https://github.com/adityajadhav2356-bit" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-accent-400 transition-colors transform hover:scale-110">
                <FaGithub size={24} />
              </a>
              <a href="https://www.linkedin.com/in/aaditya-jadhav-0077b5387/" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-accent-400 transition-colors transform hover:scale-110">
                <FaLinkedin size={24} />
              </a>
              <a href="https://www.instagram.com/adi.21725/" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-accent-400 transition-colors transform hover:scale-110">
                <FaInstagram size={24} />
              </a>
              <a href="mailto:adityajadhav2356@gmail.com" className="text-slate-400 hover:text-accent-400 transition-colors transform hover:scale-110">
                <Mail size={24} />
              </a>
            </div>
          </motion.div>

          {/* Visual Content / Avatar */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative order-first lg:order-last mb-12 lg:mb-0"
          >
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-tr from-accent-500/20 to-accent-500/20 rounded-full blur-3xl animate-pulse"></div>
              
              <div className="absolute inset-4 rounded-full border border-slate-700 glassmorphism-dark overflow-hidden flex items-center justify-center relative">
                  {/* Glowing orbital rings */}
                  <div className="absolute inset-0 border-2 border-accent-500/20 rounded-full animate-[spin_10s_linear_infinite]" style={{ borderTopColor: 'transparent', borderRightColor: 'transparent' }}></div>
                  <div className="absolute inset-8 border-2 border-accent-500/20 rounded-full animate-[spin_15s_linear_infinite_reverse]" style={{ borderBottomColor: 'transparent', borderLeftColor: 'transparent' }}></div>
                  
                  {/* User Profile Picture */}
                  <div className="w-full h-full bg-slate-900 rounded-full overflow-hidden flex items-center justify-center relative z-10 opacity-90 transition-all duration-700 hover:scale-105">
                      <img src="/Adi.jpeg" alt="Aaditya Jadhav" className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-50/50 via-transparent to-transparent"></div>
                  </div>
              </div>

              {/* Floating tech badges */}
              <motion.div 
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-10 right-10 glassmorphism p-3 rounded-xl"
              >
                <div className="w-10 h-10 bg-accent-500/20 rounded-lg flex items-center justify-center text-accent-400 font-bold">AI</div>
              </motion.div>
              
              <motion.div 
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-20 left-4 glassmorphism p-3 rounded-xl"
              >
                <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center text-blue-400 font-bold">{"</>"}</div>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
      >
        <span className="text-xs text-slate-400 mb-2 tracking-widest uppercase">Scroll</span>
        <div className="w-[1px] h-12 bg-white/20 relative overflow-hidden">
          <motion.div 
            animate={{ y: [0, 48] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
            className="absolute top-0 left-0 w-full h-1/2 bg-accent-500"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
