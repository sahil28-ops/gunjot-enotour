import React from "react";
import { motion } from "framer-motion";

import logo5 from "../assets/logo5.jpg";
import logo3 from "../assets/logo3.jpg";
import brand1 from "../assets/brand1.jpg";
import logo2 from "../assets/logo2.jpg";
import logo4 from "../assets/logo4.jpg";

const logos = [logo5, logo3, logo4, logo2, brand1];

const BrandSection = () => {
  return (
    <div className="py-16 bg-gradient-to-br from-blue-50 to-gray-100 flex flex-col items-center">
      <h2 className="text-4xl font-extrabold text-gray-800 mb-12">
        Trusted by Top Brands
      </h2>

      <div className="flex flex-wrap justify-center items-center gap-35">
        {logos.map((logo, index) => (
          <motion.img
            key={index}
            src={logo}
            alt={`Brand Logo ${index + 1}`}
            className="h-20 w-20 rounded-full object-cover"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: index * 0.2,
              ease: "easeOut",
            }}
            viewport={{ once: false, amount: 0.3 }} // 🔥 This makes it animate on every scroll into view
          />
        ))}
      </div>
    </div>
  );
};

export default BrandSection;
