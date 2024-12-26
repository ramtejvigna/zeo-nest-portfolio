import React from 'react';
import { Camera, Globe, Palette, Code, GraduationCap, Users, ChevronRight, Mail, Github, Linkedin, Twitter } from 'lucide-react';
import { motion } from 'framer-motion';

const Portfolio = () => {
  const services = [
    { icon: <Globe className="w-8 h-8" />, title: "Website Development", gradient: "from-blue-400 to-blue-600" },
    { icon: <Camera className="w-8 h-8" />, title: "Digital Marketing", gradient: "from-purple-400 to-purple-600" },
    { icon: <GraduationCap className="w-8 h-8" />, title: "Online Training", gradient: "from-green-400 to-green-600" },
    { icon: <Users className="w-8 h-8" />, title: "Internships", gradient: "from-yellow-400 to-yellow-600" },
    { icon: <Palette className="w-8 h-8" />, title: "Graphic Design", gradient: "from-pink-400 to-pink-600" },
    { icon: <Code className="w-8 h-8" />, title: "UI/UX Design", gradient: "from-indigo-400 to-indigo-600" }
  ];

  const projects = [
    {
      title: "Bapanapalli Sarees",
      description: "Custom-built online platform for traditional sarees",
      gradient: "from-rose-400 to-rose-600"
    },
    {
      title: "Vedicks CRM",
      description: "Tailored system for baby name services",
      gradient: "from-cyan-400 to-cyan-600"
    },
    {
      title: "Names Portal",
      description: "Extensive baby names database",
      gradient: "from-amber-400 to-amber-600"
    },
    {
      title: "Nectarasia",
      description: "Visually engaging brand showcase",
      gradient: "from-violet-400 to-violet-600"
    },
    {
      title: "Latha HMS",
      description: "Healthcare operations management",
      gradient: "from-emerald-400 to-emerald-600"
    }
  ];

  const team = [
    { name: "Asif Kangani", position: "CEO & Founder", image: "asif.jpg" },
    { name: "Ishwar Kamthe", position: "Managing Director", image: "ishwar.png" },
    { name: "Manoj Billa", position: "CTO", image: "manoj.png" },
    { name: "Vigna Ramtej Telagarapu", position: "Software Developer", image: "ramtej.png" },
    { name: "Tejassri Ryali", position: "Software Developer", image: "avinash.png" },
    { name: "Yogendra Sai", position: "Designer", image: "yogendra.jpg" }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative h-screen flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-20" />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            initial={{ y: 50 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
              Zeon Nest
            </h1>
            <p className="text-2xl mb-8 text-gray-300">Creating a Nest of Boundless Digital Possibilities!</p>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-500 to-purple-500 px-8 py-3 rounded-full font-semibold flex items-center gap-2 mx-auto"
            >
              Get Started <ChevronRight className="w-5 h-5" />
            </motion.button>
          </motion.div>
        </div>
      </motion.section>

      {/* Services Grid */}
      <motion.section 
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="py-20"
        id="services"
      >
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={item}
                whileHover={{ scale: 1.05 }}
                className={`p-6 rounded-xl bg-gradient-to-br ${service.gradient} bg-opacity-10 backdrop-blur-lg border border-gray-800 hover:border-gray-700 transition-all duration-300`}
              >
                <div className="mb-4 text-white">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Projects Section */}
      <motion.section 
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="py-20"
      >
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
            Our Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={item}
                whileHover={{ scale: 1.05 }}
                className={`rounded-xl overflow-hidden bg-gradient-to-br ${project.gradient} bg-opacity-10 backdrop-blur-lg border border-gray-800 hover:border-gray-700 transition-all duration-300`}
              >
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-400">{project.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Team Section */}
      <motion.section 
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="py-20"
      >
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
            Our Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                variants={item}
                whileHover={{ scale: 1.05 }}
                className="rounded-xl overflow-hidden bg-gray-900 border border-gray-800 hover:border-gray-700 transition-all duration-300"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                  <p className="text-gray-400">{member.position}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="py-12 border-t border-gray-800">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                Zeon Nest
              </h3>
              <p className="text-gray-400">Creating a Nest of Boundless Digital Possibilities!</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Contact</h3>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
              >
                <Mail className="w-5 h-5" /> Get in touch
              </motion.button>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <motion.a
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Github className="w-6 h-6" />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Linkedin className="w-6 h-6" />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Twitter className="w-6 h-6" />
                </motion.a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">&copy; 2024 Zeon Nest. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;