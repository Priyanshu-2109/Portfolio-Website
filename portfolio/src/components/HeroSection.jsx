import React from 'react';
import heroImage from '../images/hero-image.webp';
import emoji from '../images/emojiimage.png';

const HeroSection = () => {
  return (
    <section className="pb-25">
      <div className="grid grid-cols-1 sm:grid-cols-12 gap-8 items-center">
        {/* Left Section */}
        <div className="col-span-7 text-center sm:text-left">
          <h1 className="mb-6 text-5xl lg:text-7xl font-extrabold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
            Hello, I'm Priyanshu
          </h1>
          <p className="text-[#ADB7BE] text-lg sm:text-xl mb-8 leading-relaxed">
            I am a passionate developer, dedicated to crafting interactive and efficient web applications.
          </p>
          <div className="flex flex-col sm:flex-row sm:items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button className="px-6 py-3 rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:opacity-80 text-white shadow-lg transform hover:scale-105 transition duration-300">
              Hire Me
            </button>
            <button className="px-6 py-3 rounded-full bg-transparent hover:bg-slate-800 text-white border borde shadow-md transform hover:scale-105 transition duration-300 " >
              Download Resume
            </button>
          </div>
        </div>

        {/* Right Section (Image) */}
        <div className="col-span-5 flex justify-center lg:justify-end">
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative shadow-lg shadow-purple-600/50">
            <img
              src={emoji}
              alt="Hero Image"
              className="absolute object-cover transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-full"
              width={400}
              height={400}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
