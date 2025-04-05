import React from 'react';
import { FaMobileAlt, FaSearch, FaLaptopCode, FaPalette } from 'react-icons/fa';
import { motion } from 'framer-motion';

const services = [
  { icon: <FaMobileAlt size={50} />, title: "Mobile App Development" },
  { icon: <FaSearch size={50} />, title: "SEO Optimization" },
  { icon: <FaLaptopCode size={50} />, title: "Website Development" },
  { icon: <FaPalette size={50} />, title: "UI/UX Design" },
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const Services = () => {
  return (
    <motion.div
      id="services"
      className="py-16 bg-gradient-to-br from-blue-50 to-gray-100 text-center"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <motion.h2
        className="text-4xl font-extrabold text-gray-800 mb-12"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Our Services
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 px-10">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="p-8 bg-white rounded-2xl shadow-xl flex flex-col items-center cursor-default"
            variants={cardVariants}
            whileHover={{ scale: 1.08, rotate: 1 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <div className="text-blue-600 mb-4 bg-blue-100 p-4 rounded-full shadow-md">
              {service.icon}
            </div>
            <h3 className="text-2xl font-semibold text-gray-700">{service.title}</h3>
            <p className="text-gray-500 mt-2 text-center">
              We offer top-notch {service.title.toLowerCase()} to elevate your business.
            </p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Services;
  