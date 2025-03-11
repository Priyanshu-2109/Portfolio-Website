import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import aboutImage from "../images/about-image.webp";
import TabButton from "../components/TabButton";

const TAB_DATA = [
  {
    title: "Hard Skills",
    id: "hardskills",
    content: (
      <ul className="list-disc pl-5 text-gray-300 text-sm">
        <li>C & C++</li>
        <li>Java</li>
        <li>HTML & CSS</li>
        <li>JavaScript</li>
        <li>ReactJS</li>
        <li>MongoDB</li>
        <li>ExpressJS</li>
        <li>NodeJS</li>
        <li>Git & GitHub</li>
      </ul>
    ),
  },
  {
    title: "Soft Skills",
    id: "softskills",
    content: (
      <ul className="list-disc pl-5 text-gray-300 text-sm">
        <li>Problem-solving</li>
        <li>Communication</li>
        <li>Teamwork</li>
        <li>Time Management</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("hardskills");

  return (
    <section id="about" className="text-white py-16 px-6 sm:px-12 pt-25">
      <div className="flex flex-col lg:flex-row items-center lg:items-start">
        
        {/* Left Side - Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="lg:w-2/5 w-full"
        >
          <img src={aboutImage} className="rounded-lg shadow-lg w-full h-auto" alt="About" />
        </motion.div>

        {/* Right Side - Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="lg:w-1/2 w-full lg:pl-12 mt-8 lg:mt-0"
        >
          <h1 className="text-4xl font-bold mb-4">About Me</h1>
          <p className="text-gray-300 text-base">
            I am a passionate full-stack web developer with experience in JavaScript, React, Node.js, 
            Express, MongoDB, and Git. I love building interactive and efficient web applications.
          </p>

          {/* Skills Section */}
          <div className="mt-6">
            <h2 className="text-2xl font-bold">Skills</h2>
            
            {/* Tab Buttons with Animated Underline */}
            <div className="relative flex space-x-6 border-b border-gray-600 pb-2">
              {TAB_DATA.map(({ id, title }) => (
                <button
                  key={id}
                  onClick={() => setTab(id)}
                  className={`relative px-4 py-2 text-lg transition ${
                    tab === id ? "text-purple-500 " : "text-gray-400"
                  }`}
                >
                  {title}
                  {tab === id && (
                    <motion.div
                      layoutId="underline"
                      className="absolute left-0 bottom-0 h-[3px] w-full bg-purple-500"
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    />
                  )}
                </button>
              ))}
            </div>

            {/* Tab Content with Animation */}
            <AnimatePresence mode="wait">
              <motion.div
                key={tab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="mt-6"
              >
                {TAB_DATA.find((t) => t.id === tab)?.content}
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
