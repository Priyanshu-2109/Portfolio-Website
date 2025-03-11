import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [hasShadow, setHasShadow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setHasShadow(true);
      } else {
        setHasShadow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full bg-[#121212] flex justify-between items-center px-10 py-5 z-50 transition-all duration-300 ${
        hasShadow ? "shadow-md shadow-white/30" : "border-b border-gray-500"
      }`}
    >
      <h1 className="text-3xl font-extrabold tracking-wide text-white">LOGO</h1>
      <div className="space-x-8 text-lg">
        <button className="hover:text-gray-300 transition duration-300 text-white">About</button>
        <button className="hover:text-gray-300 transition duration-300 text-white">Projects</button>
        <button className="hover:text-gray-300 transition duration-300 text-white ">Contact</button>
      </div>
    </nav>
  );
};

export default Navbar;
