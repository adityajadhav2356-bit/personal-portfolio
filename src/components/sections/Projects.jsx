import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "DigiSaathi",
      description: "Voice-first digital literacy platform tailored for senior citizens. Features regional language support, guided tutorials, and volunteer assistance to bridge the digital divide.",
      image: "/cool.png",
      tags: ["React", "Node.js", "Web Speech API", "MongoDB"],
      live: "https://digisaathi.vercel.app/"
    },
    {
      title: "RescueLink",
      description: "Comprehensive disaster management and emergency response platform. Enables real-time assistance, coordination features, and a user-focused responsive interface for critical situations.",
      image: "/dashboard.png",
      tags: ["React", "Express", "Socket.io", "Leaflet"],
      live: "https://rescue-link-sigma.vercel.app/"
    }
  ];

  return (
    <section id="projects" className="py-24 relative z-10">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <div className="flex items-center space-x-4 mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900">Featured Projects</h2>
            <div className="flex-1 h-[1px] bg-gradient-to-r from-blue-500/50 to-transparent"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative rounded-3xl overflow-hidden glassmorphism-dark border border-slate-300 hover:border-indigo-500/50 transition-all duration-500"
              >
                <div className="aspect-[16/9] overflow-hidden relative">
                  <div className="absolute inset-0 bg-white/40 mix-blend-multiply z-10 group-hover:bg-transparent transition-colors duration-500"></div>
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-slate-900 to-transparent z-20"></div>
                </div>

                <div className="p-8 relative z-30 -mt-10">
                  <div className="bg-white/80 backdrop-blur-md p-6 rounded-2xl border border-slate-200 shadow-xl transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-indigo-400 transition-colors">{project.title}</h3>
                    <p className="text-slate-600 text-sm mb-6 line-clamp-3 group-hover:line-clamp-none transition-all duration-300">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag, tagIndex) => (
                        <span key={tagIndex} className="text-xs font-medium text-indigo-300 bg-indigo-500/10 px-3 py-1 rounded-full border border-indigo-500/20">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center space-x-4 pt-4 border-t border-slate-200">
                      <a href={project.live} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-sm text-slate-700 hover:text-slate-900 transition-colors">
                        <ExternalLink size={18} />
                        <span>Live Demo</span>
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
