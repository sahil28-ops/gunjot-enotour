import React from "react";
import "./App.css";
import Navbar from "./components/navbar";
import Hero from "./components/Hero";
import BrandSection from "./components/Brandsection";
import Services from "./components/Services";
import About from "./components/About";
import ContactUs from "./components/ContactUs";
import { MessageCircle } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <BrandSection />
      <Services />
      <About />
      <ContactUs />
      <Footer/>
      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/1234567890"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg animate-pulse flex items-center justify-center transition-transform hover:scale-110"
      >
        <FaWhatsapp size={28} />
      </a>
    </>
  );
}

export default App;
