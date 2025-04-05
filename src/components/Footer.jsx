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
          <h2 className="text-2xl font-bold mb-3">Gunjot Entour Pvt Ltd</h2>
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
            GUNJOT ENTOUR PVT. LTD.
            Office M-2, Plot no. D-229, PHASE 8B, MOHALI
            </span>
          </div>
          <div className="flex items-center space-x-3 mb-2">
            <PhoneCall size={20} className="text-yellow-400" />
            <span className="opacity-80 text-sm">+91 9877445707</span>
          </div>
          <div className="flex items-center space-x-3">
            <Mail size={20} className="text-yellow-400" />
            <span className="opacity-80 text-sm">gunjotentour@gmail.com</span>
          </div>
        </div>
      </div>

      {/* Social Media & Copyright */}
      <div className="text-center mt-10 border-t border-gray-700 pt-5">
        <div className="flex justify-center space-x-6 mb-4">
          <a
            href="https://www.facebook.com/share/1A8qsvj3Dg/"
            target="_blank"
            className="hover:text-yellow-400 transition"
          >
            <Facebook size={24} />
          </a>
          <a
            href="https://www.instagram.com/gunjotentourpvt?utm_source=qr&igsh=MWQ5ODBmdGtzaGU3dg=="
            target="_blank"
            className="hover:text-yellow-400 transition"
          >
            <Instagram size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/gunjot-entour-14190235a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
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
