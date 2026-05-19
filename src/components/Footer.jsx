import React from 'react';
import { Mail } from 'lucide-react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="border-t border-slate-200 py-12 relative z-10 bg-slate-50/50 backdrop-blur-lg">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center">
        
        <div className="mb-6 md:mb-0">
          <a href="#" className="text-xl font-bold tracking-tighter bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
            Aaditya.
          </a>
          <p className="text-slate-500 text-sm mt-2">
            Designed & Developed with React & Tailwind
          </p>
        </div>

        <div className="flex flex-col items-center md:items-end">
          <div className="flex space-x-6 mb-4">
            <a href="https://github.com/adityajadhav2356-bit" target="_blank" rel="noreferrer" className="text-slate-600 hover:text-indigo-400 transition-colors transform hover:scale-110">
              <FaGithub size={20} />
            </a>
            <a href="https://www.linkedin.com/in/aaditya-jadhav-0077b5387/" target="_blank" rel="noreferrer" className="text-slate-600 hover:text-indigo-400 transition-colors transform hover:scale-110">
              <FaLinkedin size={20} />
            </a>
            <a href="https://www.instagram.com/adi.21725/" target="_blank" rel="noreferrer" className="text-slate-600 hover:text-indigo-400 transition-colors transform hover:scale-110">
              <FaInstagram size={20} />
            </a>
            <a href="mailto:adityajadhav2356@gmail.com" className="text-slate-600 hover:text-indigo-400 transition-colors transform hover:scale-110">
              <Mail size={20} />
            </a>
          </div>
          <p className="text-slate-600 text-sm">
            &copy; {new Date().getFullYear()} Aaditya Jadhav. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
