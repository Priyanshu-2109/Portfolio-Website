import React from "react";
import { TypeAnimation } from "react-type-animation";
import GradientText from "./GradientText";
import { assets } from "../assets/asset";

const HeroSection = () => {
  const handleHireMeClick = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <section id="home" className="pb-12 sm:pb-16 relative overflow-hidden mt-5">
      <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 sm:gap-8 items-center max-w-7xl mx-auto px-3 sm:px-6">
        
        {/* Left Section */}
        <div className="col-span-12 sm:col-span-7 text-center sm:text-left max-w-md sm:max-w-lg mx-auto">
          {/* Animated Gradient Text for "Hello, I'm" */}
          <GradientText
            colors={["#007BFF", "#4169E1", "#8F00FF", "#A020F0", "#FF69B4"]}
            animationSpeed={3}
            showBorder={false}
            className="text-2xl sm:text-4xl font-bold"
          >
            Hello, I'm
          </GradientText>

          {/* Bigger Changing Text (White with Cursor) */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-white mt-2">
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

          <p className="text-[#ADB7BE] text-sm sm:text-lg mt-3 sm:mt-4 leading-relaxed">
            I am a passionate web developer, dedicated to crafting interactive
            and efficient web applications.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row sm:items-center space-y-3 sm:space-y-0 sm:space-x-6 mt-5 sm:mt-6">
            <button
              onClick={handleHireMeClick}
              className="px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-base rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:opacity-80 font-bold text-white shadow-lg transform hover:scale-105 transition duration-300"
            >
              Hire Me
            </button>

            <button
              onClick={() => {
                const link = document.createElement("a");
                link.href = "/Priyanshu Chaniyara - Resume.pdf"; // Ensure this file is inside the public folder
                link.download = "Priyanshu Chaniyara - Resume.pdf";
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }}
              className="px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-base rounded-full bg-transparent hover:bg-slate-800 text-white border shadow-md transform hover:scale-105 font-semibold transition duration-300"
            >
              Download Resume
            </button>
          </div>
        </div>

        {/* Right Section (Image with Border) */}
        <div className="col-span-12 sm:col-span-5 flex justify-center lg:justify-end mt-6 sm:mt-0">
          <div className="relative rounded-full bg-[#181818] w-auto h-auto max-w-[70%] sm:max-w-[80%] lg:max-w-[100%] flex items-center justify-center shadow-lg shadow-purple-600/50">
            <img
              src={assets.profile}
              alt="Hero Image"
              className="w-[180px] h-[180px] sm:w-[240px] sm:h-[240px] lg:w-[345px] lg:h-[345px] rounded-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
