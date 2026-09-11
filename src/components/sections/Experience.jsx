import React from 'react';
import { motion } from 'framer-motion';
import { Award, Calendar, Trophy, Users } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "President",
      organization: "Association of Computer Engineering Students (ACES)",
      date: "Jan 2026 — Present",
      description: "Led technical and non-technical initiatives for 300+ students, coordinating teams, faculty, logistics, and end-to-end event execution. Managed student activities and technical events while driving student engagement and faculty collaboration.",
      icon: <Users className="text-blue-400" size={20} />
    },
    {
      title: "AI Lead",
      organization: "Phaiai",
      date: "Jul 2026 — Present",
      description: "Lead AI-focused initiatives involving solution design, experimentation, and implementation across technical projects.",
      icon: <Award className="text-accent-400" size={20} />
    },
    {
      title: "Capgemini Campus Ambassador",
      organization: "Capgemini",
      date: "Aug 2026 — Present",
      description: "Represented Capgemini on campus and coordinated Capgemini Brand Quest 2026, managing student outreach, communication, and event execution.",
      icon: <Users className="text-green-400" size={20} />
    },
    {
      title: "Institute-Level Winner (2 Consecutive Years)",
      organization: "Smart India Hackathon (SIH)",
      date: "2 Consecutive Years",
      description: "Institute-Level Winner at the Smart India Hackathon for 2 consecutive years, demonstrating strong teamwork, innovation, and capability to build impactful solutions.",
      icon: <Trophy className="text-yellow-400" size={20} />
    },
    {
      title: "3rd Rank — Logica 5.0",
      organization: "National Level Project Competition 2026",
      date: "2026",
      description: "Secured 3rd rank at the national level project competition, showcasing innovative problem-solving and technical skills.",
      icon: <Trophy className="text-yellow-400" size={20} />
    },
    {
      title: "Nominee — Z Skill Up Award",
      organization: "Z Skill Institute",
      date: "2026",
      description: "Nominated for the prestigious Z Skill Up Award by Z Skill Institute for dedication to continuous skill building.",
      icon: <Award className="text-orange-400" size={20} />
    },
    {
      title: "Google Cloud Arcade 2024",
      organization: "Google Cloud Certification",
      date: "2024",
      description: "Completed hands-on labs covering Google Cloud infrastructure, deployment, and cloud services.",
      icon: <Award className="text-blue-400" size={20} />
    },
    {
      title: "B.Tech in Computer Science Engineering",
      organization: "JSPM's Rajarshi Shahu College of Engineering",
      date: "2024 — Present",
      description: "Pursuing Bachelor of Technology in Computer Science Engineering with a focus on Full Stack and AI Systems.",
      icon: <Users className="text-accent-400" size={20} />
    },
    {
      title: "Higher Secondary (12th) — 83%",
      organization: "RJSPM's Dnyanbhakti Junior College",
      date: "2023 — 2024",
      description: "Completed Higher Secondary Certificate with 83% distinction in Science & Computer Science.",
      icon: <Award className="text-pink-400" size={20} />
    }
  ];

  return (
    <section id="experience" className="py-24 relative z-10">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex items-center space-x-4 mb-16 justify-end">
            <div className="flex-1 h-[1px] bg-gradient-to-l from-accent-500/50 to-transparent"></div>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-50 text-right">Experience & Achievements</h2>
          </div>

          <div className="relative border-l border-accent-500/30 ml-4 md:ml-8 space-y-12">
            {experiences.map((exp, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative pl-8 md:pl-12"
              >
                {/* Timeline dot */}
                <div className="absolute -left-[21px] top-1 h-10 w-10 rounded-full glassmorphism-dark flex items-center justify-center border-2 border-accent-500 z-10">
                  {exp.icon}
                </div>

                <div className="glassmorphism-dark p-6 md:p-8 rounded-2xl border border-slate-800 hover:border-accent-500/30 transition-colors">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-slate-50">{exp.title}</h3>
                      <h4 className="text-accent-400 font-medium">{exp.organization}</h4>
                    </div>
                    {exp.date && (
                      <div className="flex items-center text-slate-500 text-sm mt-2 md:mt-0 bg-slate-50/5 px-3 py-1 rounded-full w-max">
                        <Calendar size={14} className="mr-2" />
                        {exp.date}
                      </div>
                    )}
                  </div>
                  <p className="text-slate-400 leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
