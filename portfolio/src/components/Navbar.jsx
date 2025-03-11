import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [hasShadow, setHasShadow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasShadow(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth Scroll Function
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 45, // Adjust for navbar height
        behavior: "smooth",
      });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full bg-[#121212] flex justify-between items-center px-10 py-5 z-50 transition-all duration-300 ${
        hasShadow ? "shadow-md shadow-white/30" : "border-b border-gray-500"
      }`}
    >
      <h1 className="text-3xl font-extrabold tracking-wide text-white">LOGO</h1>
      <div className="space-x-8 text-lg">
        <button
          onClick={() => scrollToSection("about")}
          className="hover:text-gray-300 transition duration-300 text-white"
        >
          About
        </button>
        <button
          onClick={() => scrollToSection("projects")}
          className="hover:text-gray-300 transition duration-300 text-white"
        >
          Projects
        </button>
        <button
          onClick={() => scrollToSection("contact")}
          className="hover:text-gray-300 transition duration-300 text-white"
        >
          Contact
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
