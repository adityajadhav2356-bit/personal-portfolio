import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Mail, Download } from 'lucide-react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
];

const Navbar = ({ scrollY }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const isScrolled = scrollY > 50;

  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map(link => link.name.toLowerCase());
      
      let current = '';
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && window.scrollY >= element.offsetTop - 100) {
          current = section;
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'py-4 glassmorphism-dark border-b border-slate-200' : 'py-6 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="text-2xl font-bold tracking-tighter bg-gradient-to-r from-indigo-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent bg-300% animate-gradient-x">
          Aaditya.
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          <ul className="flex space-x-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a 
                  href={link.href}
                  className={`text-sm font-medium transition-colors hover:text-indigo-400 ${
                    activeSection === link.name.toLowerCase() ? 'text-indigo-400' : 'text-slate-700'
                  }`}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          
          <div className="flex items-center space-x-4 pl-8 border-l border-slate-300">
            <a href="https://github.com/adityajadhav2356-bit" target="_blank" rel="noreferrer" className="text-slate-600 hover:text-slate-900 transition-colors">
              <FaGithub size={20} />
            </a>
            <a href="https://www.linkedin.com/in/aaditya-jadhav-0077b5387/" target="_blank" rel="noreferrer" className="text-slate-600 hover:text-slate-900 transition-colors">
              <FaLinkedin size={20} />
            </a>
            <a href="https://www.instagram.com/adi.21725/" target="_blank" rel="noreferrer" className="text-slate-600 hover:text-slate-900 transition-colors">
              <FaInstagram size={20} />
            </a>
            <a 
              href="https://drive.google.com/file/d/1pev3oVbj98UKjYfAFc01fIegTSElKz6y/view?usp=drivesdk" 
              target="_blank" 
              rel="noreferrer" 
              className="hidden lg:flex items-center space-x-2 bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-full font-medium transition-all ml-4 text-sm shadow-[0_0_15px_rgba(99,102,241,0.5)]"
            >
              <Download size={16} />
              <span>Resume</span>
            </a>
          </div>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-slate-700 hover:text-slate-900 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glassmorphism-dark border-t border-slate-200"
          >
            <div className="container mx-auto px-6 py-4 flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-slate-700 hover:text-indigo-400 py-2 text-lg font-medium border-b border-slate-200"
                >
                  {link.name}
                </a>
              ))}
              <div className="flex space-x-6 pt-4">
                <a href="https://github.com/adityajadhav2356-bit" className="text-slate-600 hover:text-slate-900">
                  <FaGithub size={24} />
                </a>
                <a href="https://www.linkedin.com/in/aaditya-jadhav-0077b5387/" className="text-slate-600 hover:text-slate-900">
                  <FaLinkedin size={24} />
                </a>
                <a href="https://www.instagram.com/adi.21725/" className="text-slate-600 hover:text-slate-900">
                  <FaInstagram size={24} />
                </a>
                <a href="mailto:adityajadhav2356@gmail.com" className="text-slate-600 hover:text-slate-900">
                  <Mail size={24} />
                </a>
              </div>
              <div className="pt-4 border-t border-slate-200">
                <a 
                  href="https://drive.google.com/file/d/1pev3oVbj98UKjYfAFc01fIegTSElKz6y/view?usp=drivesdk" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="flex items-center justify-center space-x-2 bg-indigo-500 hover:bg-indigo-600 text-white px-6 py-3 rounded-full font-medium transition-all w-full shadow-[0_0_15px_rgba(99,102,241,0.5)]"
                >
                  <Download size={18} />
                  <span>Download Resume</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
