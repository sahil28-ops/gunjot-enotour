import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Function to handle smooth scrolling
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
    <nav className="bg-gradient-to-r from-blue-700 to-purple-700 p-4 shadow-lg fixed w-full z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <a
          href="#home"
          className="text-white text-3xl font-extrabold tracking-wide flex items-center"
          onClick={(e) => handleScroll(e, "home")}
        >
          <span className="bg-white text-blue-700 px-3 py-1 rounded-lg mr-2">GJ</span>
        </a>

        {/* Menu for larger screens */}
        <div className="hidden md:flex space-x-8 text-white font-semibold text-lg">
          <a href="#home" onClick={(e) => handleScroll(e, "home")} className="hover:text-gray-300 transition duration-300">Home</a>
          <a href="#services" onClick={(e) => handleScroll(e, "services")} className="hover:text-gray-300 transition duration-300">Services</a>
          <a href="#aboutus" onClick={(e) => handleScroll(e, "aboutus")} className="hover:text-gray-300 transition duration-300">About Us</a>
          <a href="#contactus" onClick={(e) => handleScroll(e, "contactus")} className="hover:text-gray-300 transition duration-300">Contact Us</a>
        </div>

        {/* Social Icons */}
        <div className="hidden md:flex space-x-4 text-white text-xl">
          <a href="#" className="hover:text-gray-300 transition duration-300"><i className="fab fa-instagram"></i></a>
          <a href="#" className="hover:text-gray-300 transition duration-300"><i className="fab fa-facebook"></i></a>
          <a href="#" className="hover:text-gray-300 transition duration-300"><i className="fab fa-linkedin"></i></a>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white focus:outline-none" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-center bg-blue-800 text-white py-6 space-y-4 shadow-lg rounded-b-lg animate-fadeIn">
          <a href="#home" onClick={(e) => handleScroll(e, "home")} className="hover:text-gray-300 transition duration-300 text-lg">Home</a>
          <a href="#services" onClick={(e) => handleScroll(e, "services")} className="hover:text-gray-300 transition duration-300 text-lg">Services</a>
          <a href="#aboutus" onClick={(e) => handleScroll(e, "aboutus")} className="hover:text-gray-300 transition duration-300 text-lg">About Us</a>
          <a href="#contactus" onClick={(e) => handleScroll(e, "contactus")} className="hover:text-gray-300 transition duration-300 text-lg">Contact Us</a>
          <div className="flex space-x-6 text-2xl">
            <a href="#" className="hover:text-gray-300 transition duration-300"><i className="fab fa-instagram"></i></a>
            <a href="#" className="hover:text-gray-300 transition duration-300"><i className="fab fa-facebook"></i></a>
            <a href="#" className="hover:text-gray-300 transition duration-300"><i className="fab fa-linkedin"></i></a>
          </div>
        </div>
      )}
    </nav>
  );
}
