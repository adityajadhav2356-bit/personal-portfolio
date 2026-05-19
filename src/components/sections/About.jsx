import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Code2, Cpu, Users } from 'lucide-react';
import TerminalBio from '../TerminalBio';

const About = () => {
  const stats = [
    { icon: <Code2 className="text-indigo-400" size={24} />, label: "Projects Completed", value: "5+" },
    { icon: <Cpu className="text-purple-400" size={24} />, label: "Technologies Learned", value: "20+" },
    { icon: <Users className="text-blue-400" size={24} />, label: "Leadership Roles", value: "3" },
    { icon: <BookOpen className="text-pink-400" size={24} />, label: "Hackathons", value: "5+" },
  ];

  return (
    <section id="about" className="py-24 relative z-10">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex items-center space-x-4 mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900">About Me</h2>
            <div className="flex-1 h-[1px] bg-gradient-to-r from-indigo-500/50 to-transparent"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-6 flex flex-col justify-center">
              <TerminalBio />
            </div>

            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="glassmorphism-dark p-6 rounded-2xl border border-slate-200 hover:border-indigo-500/30 transition-colors group"
                >
                  <div className="bg-slate-900/5 w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    {stat.icon}
                  </div>
                  <h3 className="text-3xl font-bold text-slate-900 mb-1">{stat.value}</h3>
                  <p className="text-sm text-slate-600 font-medium">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
