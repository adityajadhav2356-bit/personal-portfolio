import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const TerminalBio = () => {
  const [text, setText] = useState('');
  const [lineIndex, setLineIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  const lines = [
    '> Initializing user profile...',
    '> Fetching data for: Aaditya Jadhav',
    '> Role: Aspiring Java Full Stack Developer',
    '> Loading skills matrix [OK]',
    '> Compiling backend architecture [OK]',
    '> Executing frontend interfaces [OK]',
    '> System ready. Hello World!'
  ];

  useEffect(() => {
    // Adding an intersection observer to only start typing when visible
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && lineIndex === 0 && text === '') {
          startTyping();
        }
      },
      { threshold: 0.5 }
    );
    
    const terminalElement = document.getElementById('terminal-bio');
    if (terminalElement) {
      observer.observe(terminalElement);
    }

    return () => {
      if (terminalElement) {
        observer.unobserve(terminalElement);
      }
    };
  }, []);

  const startTyping = () => {
    let currentLine = 0;
    let currentChar = 0;
    let currentText = '';

    const typeInterval = setInterval(() => {
      if (currentLine < lines.length) {
        let stringToType = lines[currentLine];
        
        if (currentChar < stringToType.length) {
          currentText += stringToType.charAt(currentChar);
          setText(currentText);
          currentChar++;
        } else {
          currentText += '\n';
          setText(currentText);
          currentLine++;
          currentChar = 0;
        }
      } else {
        clearInterval(typeInterval);
        setIsTyping(false);
      }
    }, 40); // Typing speed
  };

  return (
    <div id="terminal-bio" className="w-full rounded-2xl overflow-hidden shadow-2xl border border-slate-200 bg-white group">
      {/* Terminal Header */}
      <div className="bg-slate-100 px-4 py-3 flex items-center border-b border-slate-200 transition-colors group-hover:bg-indigo-50">
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-400 shadow-[0_0_8px_rgba(248,113,113,0.6)]"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-400 shadow-[0_0_8px_rgba(250,204,21,0.6)]"></div>
          <div className="w-3 h-3 rounded-full bg-green-400 shadow-[0_0_8px_rgba(74,222,128,0.6)]"></div>
        </div>
        <div className="mx-auto text-xs font-mono text-slate-500 font-medium">
          guest@aaditya: ~/portfolio/about
        </div>
      </div>
      
      {/* Terminal Body */}
      <div className="p-6 h-64 bg-slate-900 text-green-400 font-mono text-sm sm:text-base overflow-y-auto">
        <pre className="whitespace-pre-wrap leading-relaxed font-mono">
          {text}
          {isTyping && <motion.span 
            animate={{ opacity: [1, 0] }} 
            transition={{ repeat: Infinity, duration: 0.8 }}
            className="inline-block w-2 h-4 bg-green-400 ml-1 align-middle"
          />}
        </pre>
      </div>
    </div>
  );
};

export default TerminalBio;
