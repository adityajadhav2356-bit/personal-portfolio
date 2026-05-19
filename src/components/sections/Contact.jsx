import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Send } from 'lucide-react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
    alert('Message sent successfully! (Demo)');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-24 relative z-10">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <div className="flex items-center space-x-4 mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900">Get In Touch</h2>
            <div className="flex-1 h-[1px] bg-gradient-to-r from-pink-500/50 to-transparent"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Let's connect and build something amazing together.</h3>
              <p className="text-slate-600 mb-8 leading-relaxed">
                Whether you have a question, a project idea, or just want to say hi, I'll try my best to get back to you!
              </p>

              <div className="space-y-6">
                <a href="mailto:adityajadhav2356@gmail.com" className="flex items-center space-x-4 group">
                  <div className="w-12 h-12 glassmorphism-dark rounded-xl flex items-center justify-center text-indigo-400 group-hover:bg-indigo-500 group-hover:text-slate-900 transition-all">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-slate-500 text-sm">Email</p>
                    <p className="text-slate-900 font-medium group-hover:text-indigo-300 transition-colors">adityajadhav2356@gmail.com</p>
                  </div>
                </a>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 glassmorphism-dark rounded-xl flex items-center justify-center text-indigo-400">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="text-slate-500 text-sm">Location</p>
                    <p className="text-slate-900 font-medium">India</p>
                  </div>
                </div>

                <a href="tel:7030027961" className="flex items-center space-x-4 group">
                  <div className="w-12 h-12 glassmorphism-dark rounded-xl flex items-center justify-center text-indigo-400 group-hover:bg-indigo-500 group-hover:text-slate-900 transition-all">
                    <span className="font-bold text-xl">#</span>
                  </div>
                  <div>
                    <p className="text-slate-500 text-sm">Phone</p>
                    <p className="text-slate-900 font-medium group-hover:text-indigo-300 transition-colors">+91 7030027961</p>
                  </div>
                </a>
              </div>

              <div className="mt-12 flex items-center space-x-6">
                <p className="text-slate-500 font-medium">Follow me:</p>
                <div className="flex space-x-4">
                  <a href="https://github.com/adityajadhav2356-bit" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full glassmorphism-dark flex items-center justify-center text-slate-600 hover:text-slate-900 hover:bg-slate-900/5 transition-all transform hover:-translate-y-1">
                    <FaGithub size={20} />
                  </a>
                  <a href="https://www.linkedin.com/in/aaditya-jadhav-0077b5387/" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full glassmorphism-dark flex items-center justify-center text-slate-600 hover:text-slate-900 hover:bg-slate-900/5 transition-all transform hover:-translate-y-1">
                    <FaLinkedin size={20} />
                  </a>
                  <a href="https://www.instagram.com/adi.21725/" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full glassmorphism-dark flex items-center justify-center text-slate-600 hover:text-slate-900 hover:bg-slate-900/5 transition-all transform hover:-translate-y-1">
                    <FaInstagram size={20} />
                  </a>
                </div>
              </div>
            </div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="glassmorphism-dark p-8 rounded-3xl border border-slate-200"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-600 mb-2">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-slate-900/50 border border-slate-300 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-600 mb-2">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-slate-900/50 border border-slate-300 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-600 mb-2">Message</label>
                  <textarea 
                    id="message" 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="4"
                    className="w-full bg-slate-900/50 border border-slate-300 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors resize-none"
                    placeholder="Your message..."
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 rounded-xl transition-colors flex items-center justify-center space-x-2"
                >
                  <span>Send Message</span>
                  <Send size={18} />
                </button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
