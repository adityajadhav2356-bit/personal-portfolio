import React from 'react';
import { motion } from 'framer-motion';
import { Award, Calendar, Trophy, Users } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "President",
      organization: "Association of Computer Engineering Students",
      date: "Jan 2026 - Jan 2027",
      description: "Leading the student association, organizing technical events, workshops, and fostering a collaborative environment for computer engineering students.",
      icon: <Users className="text-blue-400" size={20} />
    },
    {
      title: "Winner (3rd Rank) - Logica 5.0",
      organization: "National Level Project Competition",
      date: "March 2026",
      description: "Secured 3rd rank at the national level project competition, showcasing innovative problem-solving and technical skills.",
      icon: <Trophy className="text-yellow-400" size={20} />
    },
    {
      title: "Institute Level Winner",
      organization: "Smart India Hackathon (SIH)",
      date: "November 2025",
      description: "Cleared the institute-level Smart India Hackathon, demonstrating strong teamwork and capability to build impactful solutions.",
      icon: <Award className="text-purple-400" size={20} />
    },
    {
      title: "Contributor and Ambassador",
      organization: "GirlScript Summer of Code",
      date: "2026",
      description: "Contributed to open-source projects and served as an ambassador, promoting open-source contribution and guiding new developers.",
      icon: <Award className="text-orange-400" size={20} />
    },
    {
      title: "Campus Ambassador",
      organization: "Indian Open Source Community (IOC)",
      date: "2026",
      description: "Represented IOC on campus, organized open-source awareness sessions, and encouraged student participation in collaborative open-source development.",
      icon: <Users className="text-green-400" size={20} />
    },
    {
      title: "PR Lead",
      organization: "GeeksforGeeks RSCOE",
      description: "Leading public relations efforts, increasing chapter visibility, and managing communications for technical events and coding competitions.",
      icon: <Users className="text-pink-400" size={20} />
    },
    {
      title: "PR Coordinator",
      organization: "Google Developer Group (GDG) on Campus RSCOE",
      description: "Coordinating public relations and outreach strategies to build a strong community of developers and tech enthusiasts.",
      icon: <Users className="text-indigo-400" size={20} />
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
            <div className="flex-1 h-[1px] bg-gradient-to-l from-indigo-500/50 to-transparent"></div>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 text-right">Experience & Achievements</h2>
          </div>

          <div className="relative border-l border-indigo-500/30 ml-4 md:ml-8 space-y-12">
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
                <div className="absolute -left-[21px] top-1 h-10 w-10 rounded-full glassmorphism-dark flex items-center justify-center border-2 border-indigo-500 z-10">
                  {exp.icon}
                </div>

                <div className="glassmorphism-dark p-6 md:p-8 rounded-2xl border border-slate-200 hover:border-indigo-500/30 transition-colors">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-slate-900">{exp.title}</h3>
                      <h4 className="text-indigo-400 font-medium">{exp.organization}</h4>
                    </div>
                    {exp.date && (
                      <div className="flex items-center text-slate-500 text-sm mt-2 md:mt-0 bg-slate-900/5 px-3 py-1 rounded-full w-max">
                        <Calendar size={14} className="mr-2" />
                        {exp.date}
                      </div>
                    )}
                  </div>
                  <p className="text-slate-600 leading-relaxed">
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
