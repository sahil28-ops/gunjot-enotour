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
    setIsOpen(false); // Close menu after clicking (for mobile)
  };
  return (
    <section id="home" className="relative flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-900 to-purple-900 text-white text-center px-6 pt-20">
      <div className="max-w-3xl px-4 md:px-8">
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold mb-6 animate-fadeIn leading-tight">
          Elevate Your Business with <span className="text-yellow-400">Gunjot Entour</span>
        </h1>
        <p className="text-base sm:text-lg md:text-xl mb-6 opacity-80 animate-fadeIn delay-200">
          We provide innovative digital solutions to drive your company's success. Let's build the future together.
        </p>
        <a href="#services" onClick={(e) => handleScroll(e, "services")}  className="bg-yellow-400 text-black font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-yellow-500 transition duration-300 animate-fadeIn delay-400">
          Get Started
        </a>
      </div>
    </section>
  );
}
