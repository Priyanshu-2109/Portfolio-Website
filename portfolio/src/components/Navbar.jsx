import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { assets } from "../assets/asset";

const Navbar = () => {
  const [hasShadow, setHasShadow] = useState(false);
  const [isOpen, setIsOpen] = useState(false); // State for mobile menu

  useEffect(() => {
    const handleScroll = () => {
      setHasShadow(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      setIsOpen(false); // Close menu when clicking a section
      window.scrollTo({
        top: section.offsetTop - 45,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full bg-[#121212] flex justify-between items-center px-6 sm:px-10 py-4 z-50 transition-all duration-300 ${
        hasShadow ? "shadow-md shadow-white/30" : "border-b border-gray-500"
      }`}
    >
      {/* Logo */}
      <h1 onClick={() => scrollToSection("home")} className="text-2xl sm:text-3xl font-extrabold tracking-wide text-white">
        <img src={assets.logo} alt="PRIYANSHU" className="h-8 sm:h-9 w-[100%]" />
      </h1>

      {/* Desktop Menu */}
      <div className="hidden lg:flex space-x-8 text-l">
      {/* <button
          onClick={() => scrollToSection("home")}
          className="hover:text-gray-300 transition duration-300 text-white"
        >
          Home
        </button> */}
        <button
          onClick={() => scrollToSection("about")}
          className="hover:text-gray-300 transition duration-300 text-white"
        >
          About
        </button>

        <button
          onClick={() => scrollToSection("education")}
          className="hover:text-gray-300 transition duration-300 text-white"
        >
          Education
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

      {/* Mobile Menu Button - Fixed Padding & Clickable Area */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden text-white text-3xl p-2"
      >
        <FiMenu />
      </button>

      {/* Mobile Menu (Sidebar) */}
      <div
        className={`fixed top-0 right-0 h-full w-3/4 bg-black/80 backdrop-blur-lg flex flex-col items-center justify-center space-y-8 transition-transform duration-300 ${
          isOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
        } lg:hidden`}
      >
        {/* Close Button Inside Sidebar */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-5 right-5 text-white text-3xl p-2"
        >
          <FiX />
        </button>
        <button
          onClick={() => scrollToSection("home")}
          className="py-3 text-xl text-white font-semibold tracking-wide hover:text-gray-300 transition-all duration-300"
        >
          Home
        </button>

        <button
          onClick={() => scrollToSection("about")}
          className="py-3 text-xl text-white font-semibold tracking-wide hover:text-gray-300 transition-all duration-300"
        >
          About
        </button>
        <button
          onClick={() => scrollToSection("education")}
          className="py-3 text-xl text-white font-semibold tracking-wide hover:text-gray-300 transition-all duration-300"
        >
          Education
        </button>

        <button
          onClick={() => scrollToSection("projects")}
          className="py-3 text-xl text-white font-semibold tracking-wide hover:text-gray-300 transition-all duration-300"
        >
          Projects
        </button>

        <button
          onClick={() => scrollToSection("contact")}
          className="py-3 text-xl text-white font-semibold tracking-wide hover:text-gray-300 transition-all duration-300"
        >
          Contact
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
