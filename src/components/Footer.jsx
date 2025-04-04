import React from "react";
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  PhoneCall,
} from "lucide-react";

const Footer = () => {
  const handleScroll = (e, targetId) => {
    e.preventDefault();
    const target = document.getElementById(targetId);
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 70, // Adjust for navbar height
        behavior: "smooth",
      });
    }
    setIsOpen(false); // Close menu after clicking (for mobile)
  };
  return (
    <footer className="bg-gray-900 text-white py-10 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Company Info */}
        <div>
          <h2 className="text-2xl font-bold mb-3">YourCompany</h2>
          <p className="opacity-80 text-sm">
            Delivering top-notch travel experiences with innovative solutions.
            Your journey, our commitment.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a
                href="#home"
                onClick={(e) => handleScroll(e, "home")}
                className="hover:text-gray-300 transition duration-300"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#services"
                onClick={(e) => handleScroll(e, "services")}
                className="hover:text-gray-300 transition duration-300"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#aboutus"
                onClick={(e) => handleScroll(e, "aboutus")}
                className="hover:text-gray-300 transition duration-300"
              >
                About Us
              </a>
            </li>
            <li>
              {" "}
              <a
                href="#contactus"
                onClick={(e) => handleScroll(e, "contactus")}
                className="hover:text-gray-300 transition duration-300"
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Contact Us</h3>
          <div className="flex items-center space-x-3 mb-2">
            <MapPin size={20} className="text-yellow-400" />
            <span className="opacity-80 text-sm">
              123 Business Street, Shimla, HP, India
            </span>
          </div>
          <div className="flex items-center space-x-3 mb-2">
            <PhoneCall size={20} className="text-yellow-400" />
            <span className="opacity-80 text-sm">+91 98765 43210</span>
          </div>
          <div className="flex items-center space-x-3">
            <Mail size={20} className="text-yellow-400" />
            <span className="opacity-80 text-sm">info@yourcompany.com</span>
          </div>
        </div>
      </div>

      {/* Social Media & Copyright */}
      <div className="text-center mt-10 border-t border-gray-700 pt-5">
        <div className="flex justify-center space-x-6 mb-4">
          <a
            href="https://facebook.com"
            target="_blank"
            className="hover:text-yellow-400 transition"
          >
            <Facebook size={24} />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            className="hover:text-yellow-400 transition"
          >
            <Instagram size={24} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            className="hover:text-yellow-400 transition"
          >
            <Linkedin size={24} />
          </a>
        </div>
        <p className="text-sm opacity-80">
          &copy; {new Date().getFullYear()} Gunjot Entour Pvt Ltd. All Rights
          Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
