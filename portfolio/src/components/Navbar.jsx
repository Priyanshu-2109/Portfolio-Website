import React from "react";

const Navbar = () => {
  const handleScroll = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="bg-black text-white flex justify-between items-center px-10 py-6 shadow-md">
      <h1 className="text-3xl font-extrabold tracking-wide">LOGO</h1>
      <div className="space-x-8 text-lg">
        <button
          onClick={() => handleScroll("about")}
          className="relative hover:text-gray-300 transition duration-300 after:block after:w-full after:h-[2px] after:bg-gradient-to-r from-blue-500 to-purple-500 after:scale-x-0 after:hover:scale-x-100 after:transition-transform after:duration-300"
        >
          About
        </button>
        <button className="hover:text-gray-300 transition duration-300">
          Projects
        </button>
        <button className="hover:text-gray-300 transition duration-300">
          Contact
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
