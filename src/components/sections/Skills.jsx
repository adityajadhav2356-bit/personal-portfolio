import React from 'react';
import { motion } from 'framer-motion';
import TechNetwork from '../TechNetwork';

const Skills = () => {
  const categories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "C++", level: 90 },
        { name: "Java", level: 85 },
        { name: "Python", level: 80 },
        { name: "JavaScript", level: 90 }
      ]
    },
    {
      title: "Web Development",
      skills: [
        { name: "React", level: 85 },
        { name: "Node.js", level: 75 },
        { name: "Express.js", level: 75 },
        { name: "MongoDB", level: 80 }
      ]
    },
    {
      title: "Tools & Platforms",
      skills: [
        { name: "Git & GitHub", level: 85 },
        { name: "VS Code", level: 90 },
        { name: "Firebase", level: 80 },
        { name: "Figma", level: 75 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-24 relative z-10">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <div className="flex items-center space-x-4 mb-16 justify-end">
            <div className="flex-1 h-[1px] bg-gradient-to-l from-accent-500/50 to-transparent"></div>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-50">Technical Skills</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {categories.map((category, catIndex) => (
              <motion.div 
                key={catIndex}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: catIndex * 0.1 }}
                className="glassmorphism-dark p-8 rounded-3xl border border-slate-800 relative overflow-hidden group"
              >
                <TechNetwork />
                <div className="relative z-10">
                  <h3 className="text-xl font-semibold text-slate-50 mb-6 flex items-center">
                  <span className="w-2 h-8 rounded bg-accent-500 mr-3"></span>
                  {category.title}
                </h3>
                
                <div className="space-y-6">
                  {category.skills.map((skill, index) => (
                    <div key={index} className="group">
                      <div className="flex justify-between mb-2">
                        <span className="text-slate-300 font-medium group-hover:text-slate-50 transition-colors">{skill.name}</span>
                        <span className="text-slate-500 text-sm">{skill.level}%</span>
                      </div>
                      <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.2 + (index * 0.1) }}
                          className="h-full bg-gradient-to-r from-accent-500 to-accent-500 rounded-full relative"
                        >
                          <div className="absolute top-0 right-0 bottom-0 w-10 bg-white/20 blur-[2px] animate-[translateX_2s_infinite]"></div>
                        </motion.div>
                      </div>
                    </div>
                  ))}
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

export default Skills;
