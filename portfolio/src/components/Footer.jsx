import React from "react";
import { assets } from "../assets/asset";

const Footer = () => {
  return (
    <footer className="bg-[#121212] text-white py-4 mt-5">
      {/* White Separator Line */}
      <div className="border-t border-gray-600 w-full mb-4"></div>

      {/* Footer Content */}
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between text-sm text-gray-400 space-y-4 md:space-y-0">
        {/* Logo */}
        <h1 className="text-xl font-bold tracking-wide">
          <img src={assets.logo} className="h-8 sm:h-9 w-auto" alt="" />
        </h1>

        {/* Copyright */}
        <p>
          © {new Date().getFullYear()} Priyanshu Chaniyara. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
