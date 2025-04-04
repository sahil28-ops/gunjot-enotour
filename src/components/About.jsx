import React from 'react';
import { Flag, Eye, Heart, Users, Briefcase } from 'lucide-react';

const About = () => {
  return (
    <div id='aboutus' className="py-16 bg-gradient-to-r from-blue-900 to-purple-900 text-white text-center px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-extrabold mb-10">About Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 flex flex-col items-center text-center">
            <Flag size={40} className="text-yellow-400 mb-4" />
            <h3 className="text-2xl font-bold mb-2">Our Mission</h3>
            <p className="text-lg opacity-80">
              We aim to empower businesses with cutting-edge digital solutions, helping them grow and innovate in a competitive market.
            </p>
          </div>
          <div className="p-6 flex flex-col items-center text-center">
            <Eye size={40} className="text-yellow-400 mb-4" />
            <h3 className="text-2xl font-bold mb-2">Our Vision</h3>
            <p className="text-lg opacity-80">
              To be a global leader in technology-driven business solutions, creating impact through innovation and expertise.
            </p>
          </div>
          <div className="p-6 flex flex-col items-center text-center">
            <Heart size={40} className="text-yellow-400 mb-4" />
            <h3 className="text-2xl font-bold mb-2">Our Values</h3>
            <p className="text-lg opacity-80">
              Integrity, Innovation, and Excellence—these core values drive our approach to delivering the best digital solutions.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          <div className="p-6 flex flex-col items-center text-center">
            <Users size={40} className="text-yellow-400 mb-4" />
            <h3 className="text-2xl font-bold mb-2">50+ Happy Clients</h3>
            <p className="text-lg opacity-80">We have successfully helped over 50 clients achieve their digital goals.</p>
          </div>
          <div className="p-6 flex flex-col items-center text-center">
            <Briefcase size={40} className="text-yellow-400 mb-4" />
            <h3 className="text-2xl font-bold mb-2">50+ Completed Projects</h3>
            <p className="text-lg opacity-80">Delivering high-quality projects across multiple industries with exceptional results.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
