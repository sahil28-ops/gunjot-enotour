import { motion } from "framer-motion";

export default function Hero() {
  const handleScroll = (e, targetId) => {
    e.preventDefault();
    const target = document.getElementById(targetId);
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 70, // Adjust for navbar height
        behavior: "smooth",
      });
    }
    // If you're using a mobile menu state
    // setIsOpen(false); 
  };

  return (
    <section
      id="home"
      className="relative flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-900 to-purple-900 text-white text-center px-6 pt-20"
    >
      <motion.div
        className="max-w-3xl px-4 md:px-8"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.h1
          className="text-3xl sm:text-4xl md:text-6xl font-extrabold mb-6 leading-tight"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Elevate Your Business with{" "}
          <span className="text-yellow-400">Gunjot Entour</span>
        </motion.h1>

        <motion.p
          className="text-base sm:text-lg md:text-xl mb-6 opacity-80"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          We provide innovative digital solutions to drive your company's
          success. Let's build the future together.
        </motion.p>

        <motion.a
          href="#services"
          onClick={(e) => handleScroll(e, "services")}
          className="bg-yellow-400 text-black font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-yellow-500 transition duration-300 inline-block"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          Get Started
        </motion.a>
      </motion.div>
    </section>
  );
}
