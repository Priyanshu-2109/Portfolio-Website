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
                I'm a Computer Science and Engineering undergraduate at
                CHARUSAT and a Software Engineering Intern at Motorola
                Solutions. I build scalable software systems and modern web
                applications with JavaScript-based frameworks, focusing on
                responsive interfaces, backend architecture, and cloud
                technologies.
              </p>
              <p>
                I enjoy solving real-world problems, improving application
                performance, and building clean, user-focused products.
              </p>
              <p>
                Outside work, I contribute to the AWS Cloud Club Web Team, lead
                innovation and incubation initiatives at E-Cell CHARUSAT, and
                mentor students through GrowWithGit Club in Git and
                open-source collaboration. I'm an IBM Full-Stack JavaScript
                Developer (Coursera) and am working toward the AWS Certified
                Cloud Practitioner certification.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
