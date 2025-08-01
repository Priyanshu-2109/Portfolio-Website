import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { assets } from "../assets/asset";

const AboutSection = () => {
  return (
    <section
      id="about"
      className="text-white py-12 sm:py-16 px-4 sm:px-6 lg:px-12 pt-22 bg-transparent relative"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-12">
          {/* Left Side - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="w-full lg:w-2/5 max-w-sm lg:max-w-none mx-auto lg:mx-0"
          >
            <img
              src={assets.aboutimg}
              className="rounded-lg shadow-lg w-full h-auto"
              alt="About"
            />
          </motion.div>

          {/* Right Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="w-full lg:w-3/5 text-center lg:text-left"
          >
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              About Me
            </h1>
            <div className="text-gray-300 text-xs sm:text-sm lg:text-base leading-relaxed space-y-3">
              <p>
                I'm a dedicated 3rd-year Computer Science student at CHARUSAT
                with 2+ years of hands-on experience in web development,
                specializing in the MERN stack, Next.js, and modern JavaScript
                frameworks. I'm passionate about building scalable full-stack
                applications and continuously exploring tools to improve
                performance and development workflows.
              </p>
              <p>
                With a solid foundation in both frontend and backend
                technologies, I'm currently focused on deepening my expertise in
                advanced frameworks and real-world problem-solving. I thrive on
                hands-on learning, turning challenges into opportunities for
                growth and innovation.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
