import React from 'react';
import { motion } from 'framer-motion';
import { Flag, Eye, Heart, Users, Briefcase } from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
};

const About = () => {
  return (
    <div id='aboutus' className="py-16 bg-gradient-to-r from-blue-900 to-purple-900 text-white text-center px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-extrabold mb-10">About Us</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[ 
            {
              icon: <Flag size={40} className="text-yellow-400 mb-4" />,
              title: 'Our Mission',
              desc: 'We aim to empower businesses with cutting-edge digital solutions, helping them grow and innovate in a competitive market.'
            },
            {
              icon: <Eye size={40} className="text-yellow-400 mb-4" />,
              title: 'Our Vision',
              desc: 'To be a global leader in technology-driven business solutions, creating impact through innovation and expertise.'
            },
            {
              icon: <Heart size={40} className="text-yellow-400 mb-4" />,
              title: 'Our Values',
              desc: 'Integrity, Innovation, and Excellence—these core values drive our approach to delivering the best digital solutions.'
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="p-6 flex flex-col items-center text-center"
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              {item.icon}
              <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
              <p className="text-lg opacity-80">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {[
            {
              icon: <Users size={40} className="text-yellow-400 mb-4" />,
              title: '50+ Happy Clients',
              desc: 'We have successfully helped over 50 clients achieve their digital goals.',
            },
            {
              icon: <Briefcase size={40} className="text-yellow-400 mb-4" />,
              title: '50+ Completed Projects',
              desc: 'Delivering high-quality projects across multiple industries with exceptional results.',
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="p-6 flex flex-col items-center text-center"
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.3 }}
            >
              {item.icon}
              <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
              <p className="text-lg opacity-80">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
