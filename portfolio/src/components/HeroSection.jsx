import React from "react";
import { TypeAnimation } from "react-type-animation";
import GradientText from "./GradientText";
import emoji from "../images/emojiimage.png";

const HeroSection = () => {
  const handleHireMeClick = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <section className="pb-20 relative overflow-hidden mt-5">
      <div className="grid grid-cols-1 sm:grid-cols-12 gap-8 items-center max-w-7xl mx-auto px-6">
        
        {/* Left Section */}
        <div className="col-span-7 text-center sm:text-left">
          {/* Animated Gradient Text for "Hello, I'm" */}
          <GradientText
            colors={["#007BFF", "#4169E1", "#8F00FF", "#A020F0", "#FF69B4"]}
            animationSpeed={3}
            showBorder={false}
            className="text-4xl sm:text-5xl font-bold"
          >
            Hello, I'm
          </GradientText>

          {/* Bigger Changing Text (White with Cursor) */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-tight text-white mt-2">
            <TypeAnimation
              sequence={[
                "Priyanshu",
                1300,
                "Web Developer",
                1300,
                "CP Enthusiast",
                1300,
              ]}
              wrapper="span"
              speed={40}
              repeat={Infinity}
              cursor={true}
            />
          </h1>

          <p className="text-[#ADB7BE] text-lg sm:text-xl mt-5 leading-relaxed">
            I am a passionate developer, dedicated to crafting interactive and efficient web applications.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row sm:items-center space-y-4 sm:space-y-0 sm:space-x-6 mt-6">
            <button
              onClick={handleHireMeClick}
              className="px-6 py-3 rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:opacity-80 font-bold text-white shadow-lg transform hover:scale-105 transition duration-300">
              Hire Me
            </button>

            <button className="px-6 py-3 rounded-full bg-transparent hover:bg-slate-800 text-white border shadow-md transform hover:scale-105 fon transition duration-300">
              Download Resume
            </button>
          </div>
        </div>

        {/* Right Section (Image with Border) */}
        <div className="col-span-5 flex justify-center lg:justify-end">
          <div className="relative rounded-full bg-[#181818] w-[240px] h-[240px] lg:w-[340px] lg:h-[340px] flex items-center justify-center shadow-lg shadow-purple-600/50">
            <img
              src={emoji}
              alt="Hero Image"
              className="w-[240px] h-[240px] lg:w-[340px] lg:h-[340px] rounded-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
