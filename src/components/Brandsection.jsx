import React from "react";
import logo5 from "../assets/logo5.jpg";
import logo3 from "../assets/logo3.jpg";
import brand1 from "../assets/brand1.jpg";
import logo2 from "../assets/logo2.jpg";
import logo4 from "../assets/logo4.jpg";

const BrandSection = () => {
  return (
    <div className="py-16 bg-gradient-to-br from-blue-50 to-gray-100 flex flex-col items-center">
      <h2 className="text-4xl font-extrabold text-gray-800 mb-12">Trusted by Top Brands</h2>
      <div className="flex flex-wrap justify-center items-center gap-38">
        {[logo5, logo3, logo4, logo2, brand1].map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt="Brand Logo"
            className="h-20 w-20 rounded-full object-cover transition-transform transform hover:scale-110 duration-300"
          />
        ))}
      </div>
    </div>
  );
};

export default BrandSection;
