import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  PhoneCall,
  MessageCircle,
  Mail,
  MapPin,
  Briefcase,
} from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
};

const ContactUs = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div
      id="contactus"
      className="relative py-16 bg-gradient-to-r from-blue-900 to-purple-900 text-white text-center px-6"
    >
      <div className="max-w-5xl mx-auto">
        <motion.h2
          className="text-4xl font-extrabold mb-6"
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          Get in Touch
        </motion.h2>

        <motion.p
          className="text-lg opacity-80 mb-8"
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          We’d love to hear from you! Whether you have a project idea, need
          support, or just want to say hi, reach out to us. Our team is always
          here to assist you.
        </motion.p>

        <motion.button
          className="bg-yellow-400 text-black font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-yellow-500 transition duration-300 flex items-center mx-auto"
          onClick={() => setIsModalOpen(true)}
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Mail className="mr-2" /> Contact Us
        </motion.button>

        {/* Contact Details & Google Map */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-20 text-left">
          {/* Contact Information */}
          <div className="space-y-6">
            {[ 
              {
                icon: <MapPin className="text-yellow-400" size={28} />,
                title: "Our Office",
                desc: "GUNJOT ENTOUR PVT. LTD. Office M-2, Plot no. D-229, PHASE 8B, MOHALI"
              },
              {
                icon: <PhoneCall className="text-yellow-400" size={28} />,
                title: "HR Contact",
                desc: "+91 9877445707"
              },
              {
                icon: <Briefcase className="text-yellow-400" size={28} />,
                title: "Business Email",
                desc: "gunjotentour@gmail.com"
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="flex items-center space-x-4"
                variants={fadeInUp}
                initial="initial"
                whileInView="animate"
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                {item.icon}
                <div>
                  <h4 className="text-xl font-bold">{item.title}</h4>
                  <p className="opacity-80">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Google Map */}
          <motion.div
            className="w-full h-64 md:h-80 rounded-lg overflow-hidden shadow-lg"
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3430.776422396549!2d76.68467847557895!3d30.69656607460175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzDCsDQxJzQ3LjYiTiA3NsKwNDEnMTQuMSJF!5e0!3m2!1sen!2sin!4v1743680307222!5m2!1sen!2sin"
              className="w-full h-full"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </motion.div>
        </div>
      </div>

      {/* Modal with fade-in */}
      {isModalOpen && (
        <motion.div
          className="fixed inset-0 flex justify-center items-center z-50 backdrop-blur-lg bg-white/20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <motion.div
            className="bg-white text-black p-6 rounded-lg shadow-lg max-w-sm text-center"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-2xl font-bold mb-4">Contact Us</h3>
            <p className="text-lg mb-6">Choose how you’d like to reach us:</p>
            <div className="flex flex-col space-y-4">
              <a
                href="tel:+91 9877445707"
                className="bg-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700 transition duration-300 flex items-center justify-center"
              >
                <PhoneCall className="mr-2" /> Call Us
              </a>
              <a
                href="https://wa.me/+91 9877445707"
                className="bg-green-500 text-white font-bold py-3 px-6 rounded-lg hover:bg-green-600 transition duration-300 flex items-center justify-center"
              >
                <MessageCircle className="mr-2" /> WhatsApp Us
              </a>
              <a
                href="mailto:gunjotentour@gmail.com"
                className="bg-gray-700 text-white font-bold py-3 px-6 rounded-lg hover:bg-gray-800 transition duration-300 flex items-center justify-center"
              >
                <Mail className="mr-2" /> Email Us
              </a>
            </div>
            <button
              className="mt-6 bg-red-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-red-600 transition duration-300"
              onClick={() => setIsModalOpen(false)}
            >
              Close
            </button>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default ContactUs;
