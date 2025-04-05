import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = (e, targetId) => {
    e.preventDefault();
    const target = document.getElementById(targetId);
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 70,
        behavior: "smooth",
      });
    }
    setIsOpen(false);
  };

  return (
    <nav className="bg-gradient-to-r from-blue-700 to-purple-700 h-16 px-6 shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between h-full">
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => handleScroll(e, "home")}
          className="flex items-center"
        >
          <img
            src="/gujnot-entour.png"
            alt="Gunjot Entour Logo"
            className="w-30 h-30 object-contain"
          />
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6 text-white font-semibold text-lg">
          <a href="#home" onClick={(e) => handleScroll(e, "home")} className="hover:text-gray-300 transition duration-300">Home</a>
          <a href="#services" onClick={(e) => handleScroll(e, "services")} className="hover:text-gray-300 transition duration-300">Services</a>
          <a href="#aboutus" onClick={(e) => handleScroll(e, "aboutus")} className="hover:text-gray-300 transition duration-300">About Us</a>
          <a href="#contactus" onClick={(e) => handleScroll(e, "contactus")} className="hover:text-gray-300 transition duration-300">Contact Us</a>
          <div className="flex space-x-3 text-xl ml-4">
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-facebook"></i></a>
            <a href="#"><i className="fab fa-linkedin"></i></a>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-center bg-blue-800 text-white py-6 space-y-4 shadow-lg rounded-b-lg animate-fadeIn">
          <a href="#home" onClick={(e) => handleScroll(e, "home")} className="hover:text-gray-300 transition duration-300 text-lg">Home</a>
          <a href="#services" onClick={(e) => handleScroll(e, "services")} className="hover:text-gray-300 transition duration-300 text-lg">Services</a>
          <a href="#aboutus" onClick={(e) => handleScroll(e, "aboutus")} className="hover:text-gray-300 transition duration-300 text-lg">About Us</a>
          <a href="#contactus" onClick={(e) => handleScroll(e, "contactus")} className="hover:text-gray-300 transition duration-300 text-lg">Contact Us</a>
          <div className="flex space-x-6 text-2xl">
            <a href="https://www.facebook.com/share/1A8qsvj3Dg/"><i className="fab fa-instagram"></i></a>
            <a href="https://www.linkedin.com/in/gunjot-entour-14190235a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><i className="fab fa-facebook"></i></a>
            <a href="https://www.instagram.com/gunjotentourpvt?utm_source=qr&igsh=MWQ5ODBmdGtzaGU3dg=="><i className="fab fa-linkedin"></i></a>
          </div>
        </div>
      )}
    </nav>
  );
}
