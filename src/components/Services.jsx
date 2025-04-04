import React from 'react';
import { FaMobileAlt, FaSearch, FaLaptopCode, FaPalette } from 'react-icons/fa';

const services = [
  { icon: <FaMobileAlt size={50} />, title: "Mobile App Development" },
  { icon: <FaSearch size={50} />, title: "SEO Optimization" },
  { icon: <FaLaptopCode size={50} />, title: "Website Development" },
  { icon: <FaPalette size={50} />, title: "UI/UX Design" },
];

const Services = () => {
  return (
    <div id='services' className="py-16 bg-gradient-to-br from-blue-50 to-gray-100 text-center">
      <h2 className="text-4xl font-extrabold text-gray-800 mb-12">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 px-10">
        {services.map((service, index) => (
          <div key={index} className="p-8 bg-white rounded-2xl shadow-xl flex flex-col items-center transform hover:scale-110 transition-transform duration-300 hover:shadow-2xl">
            <div className="text-blue-600 mb-4 bg-blue-100 p-4 rounded-full">{service.icon}</div>
            <h3 className="text-2xl font-semibold text-gray-700">{service.title}</h3>
            <p className="text-gray-500 mt-2 text-center">We offer top-notch {service.title.toLowerCase()} to elevate your business.</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
