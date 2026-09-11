import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      title: "DigiSaathi",
      description: "Built a full-stack digital literacy platform for senior citizens with accessible workflows for UPI payments, WhatsApp, Aadhaar services, and digital safety. Features OTP authentication, multilingual Gemini AI assistance, Web Speech API tutorials, accessibility controls, and fraud alerts.",
      image: "/cool.png",
      tags: ["React 18", "Node.js", "Express.js", "Firebase", "Google Gemini", "Tailwind CSS"],
      live: "https://digisaathi.vercel.app/",
      github: "https://github.com/adityajadhav2356-bit/digisaathi"
    },
    {
      title: "RescueLink",
      description: "Engineered a real-time worker safety platform for hazardous environments with live monitoring and emergency response capabilities. Features WebSocket-based SOS alerts, live geolocation, environmental monitoring, device diagnostics, and worker/supervisor dashboards.",
      image: "/dashboard.png",
      tags: ["React 19", "Node.js", "Express.js", "MongoDB", "Socket.io", "React Leaflet"],
      live: "https://rescue-link-sigma.vercel.app/",
      github: "https://github.com/adityajadhav2356-bit/RescueLink"
    },
    {
      title: "AttendSync",
      description: "Built a student-teacher assignment scheduling platform that organizes assignment-checking slots and reduces student waiting time for faculty evaluation. Features time-slot allocation, student reservation, teacher availability management, and server-side data handling.",
      image: "/cool.png",
      tags: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS", "Supabase"],
      live: "",
      github: "https://github.com/adityajadhav2356-bit/attendsync"
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
            <h2 className="text-3xl md:text-5xl font-bold text-slate-50">Featured Projects</h2>
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
                className="group relative rounded-3xl overflow-hidden glassmorphism-dark border border-slate-700 hover:border-accent-500/50 transition-all duration-500"
              >
                <div className="aspect-[16/9] overflow-hidden relative">
                  <div className="absolute inset-0 bg-black/40 z-10 group-hover:bg-transparent transition-colors duration-500"></div>
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-slate-950 to-transparent z-20"></div>
                </div>

                <div className="p-8 relative z-30 -mt-10">
                  <div className="bg-slate-900/90 backdrop-blur-md p-6 rounded-2xl border border-slate-800 shadow-xl transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-2xl font-bold text-slate-50 mb-3 group-hover:text-accent-400 transition-colors">{project.title}</h3>
                    <p className="text-slate-400 text-sm mb-6 line-clamp-3 group-hover:line-clamp-none transition-all duration-300">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag, tagIndex) => (
                        <span key={tagIndex} className="text-xs font-medium text-accent-300 bg-accent-500/10 px-3 py-1 rounded-full border border-accent-500/20">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center space-x-6 pt-4 border-t border-slate-800">
                      {project.live && (
                        <a href={project.live} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-sm text-slate-300 hover:text-accent-400 transition-colors">
                          <ExternalLink size={18} />
                          <span>Live Demo</span>
                        </a>
                      )}
                      {project.github && (
                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-sm text-slate-300 hover:text-accent-400 transition-colors">
                          <FaGithub size={18} />
                          <span>GitHub</span>
                        </a>
                      )}
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
