import React, { useState } from "react";
import { motion } from "framer-motion";
import { experiences } from "../assets/asset.js";
import SpotlightCard from "../uiCodes/SpotlightCard";

const TimelineExperienceCard = ({
  experience,
  index,
  isEven,
  isHovered,
  setHovered,
  clearHovered,
  isFirst,
  isLast,
}) => {
  return (
    <div className="relative mb-14">
      {/* Timeline Node */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{
          duration: 0.5,
          delay: index * 0.1 + 0.2,
          type: "spring",
          stiffness: 200,
          damping: 20,
        }}
        className="absolute left-[50%] top-7 transform -translate-x-1/2 z-10"
      >
        <div
          className={`w-5 h-5 rounded-full ${isHovered ? "bg-blue-500 scale-125" : "bg-blue-600"} border-4 border-[#121212] transition-all duration-300`}
        ></div>
      </motion.div>{" "}
      {/* Card */}
      <div
        className={`flex ${isEven ? "justify-end" : "justify-start"} items-stretch`}
      >
        {" "}
        {/* Date for even cards (left side) */}
        {isEven && (
          <div className="w-[48%] flex justify-end pr-8 py-6">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 + 0.1 }}
              className="text-right"
            >
              <div className="text-blue-400 font-medium tracking-wide">
                {experience.duration}
              </div>
            </motion.div>
          </div>
        )}
        {/* Card Content */}{" "}
        <motion.div
          initial={{ opacity: 0, y: 30, x: isEven ? -10 : 10 }}
          whileInView={{ opacity: 1, y: 0, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{
            duration: 0.6,
            delay: index * 0.1,
            ease: [0.22, 1, 0.36, 1],
          }}
          onHoverStart={setHovered}
          onHoverEnd={clearHovered}
          className="w-[48%]"
        >
          {" "}
          <SpotlightCard
            className="bg-[#1a1a1a] rounded-xl border border-gray-700/50 transition-all duration-300 p-0 hover:border-gray-600/70 hover:shadow-2xl hover:shadow-blue-500/10"
            spotlightColor="rgba(59, 130, 246, 0.25)"
          >
            {/* Card Pattern Background */}
            <div className="absolute inset-0 overflow-hidden rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className="absolute h-32 w-64 blur-2xl top-0 left-0 bg-blue-500/20 rounded-full -translate-x-16 -translate-y-16"></div>
              <div className="absolute h-32 w-64 blur-xl bottom-0 right-0 bg-indigo-500/20 rounded-full translate-x-16 translate-y-16"></div>
            </div>{" "}
            {/* Card Content */}
            <div className="p-7 relative z-10">
              <div className="flex items-start gap-6">
                {/* Company Logo */}
                {experience.logo && (
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-gray-800/40 to-gray-900/60 border border-gray-700/40 flex items-center justify-center shadow-lg backdrop-blur-sm">
                      <img
                        src={experience.logo}
                        alt={experience.company}
                        className="w-9 h-9 object-contain"
                      />
                    </div>
                  </div>
                )}

                {/* Content */}
                <div className="flex-1">
                  {/* Role */}
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300 leading-tight">
                    {experience.role}
                  </h3>

                  {/* Company */}
                  <div className="flex items-center text-lg text-blue-400 font-semibold mb-4">
                    <span className="relative">
                      {experience.company}
                      <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-blue-400/60 to-transparent"></div>
                    </span>
                  </div>
                  {/* Location */}
                  <div className="text-gray-400 text-sm flex items-center">
                    <svg
                      className="w-4 h-4 mr-2 text-blue-400/70"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    {experience.location}
                  </div>
                </div>
              </div>
            </div>
          </SpotlightCard>{" "}
        </motion.div>
        {/* Date for odd cards (right side) */}
        {!isEven && (
          <div className="w-[48%] flex justify-start pl-8 py-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 + 0.1 }}
            >
              <div className="text-blue-400 font-medium tracking-wide">
                {experience.duration}
              </div>
            </motion.div>
          </div>
        )}
      </div>
      {/* Timeline Connector Lines (except for the last item) */}
      {!isLast && (
        <motion.div
          initial={{ height: 0 }}
          whileInView={{ height: "100%" }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: index * 0.1 + 0.3 }}
          className="absolute left-[50%] top-10 bottom-0 w-px bg-gradient-to-b from-blue-600/30 to-transparent"
          style={{ height: "calc(100% - 25px)" }}
        ></motion.div>
      )}
    </div>
  );
};

// Responsive TimelineExperienceCard for mobile
const MobileTimelineCard = ({ experience, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="mb-6 relative"
    >
      {/* Timeline Connector */}
      {index !== 0 && (
        <div className="absolute top-0 left-7 w-px h-6 -mt-6 bg-gradient-to-b from-transparent to-blue-600/20"></div>
      )}{" "}
      <SpotlightCard
        className="bg-[#1a1a1a] rounded-xl border border-gray-700/50 shadow-lg p-0 hover:border-gray-600/70 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300"
        spotlightColor="rgba(59, 130, 246, 0.15)"
      >
        <div className="p-6">
          <div className="flex items-start">
            {/* Timeline Node */}
            <div className="mr-4 mt-2">
              <div className="w-4 h-4 rounded-full bg-blue-600 border-4 border-[#121212] shadow-lg"></div>
            </div>

            <div className="flex-1">
              {/* Duration */}
              <div className="text-blue-400 text-sm font-semibold mb-3 flex items-center">
                <svg
                  className="w-4 h-4 mr-1.5 text-blue-400/70"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                {experience.duration}
              </div>

              {/* Role & Company */}
              <h3 className="text-lg font-bold text-white mb-2 leading-tight">
                {experience.role}
              </h3>
              <div className="text-blue-400 font-semibold mb-3 relative inline-block">
                {experience.company}
                <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-blue-400/60 to-transparent"></div>
              </div>
              {/* Location */}
              <div className="text-gray-400 text-sm flex items-center">
                <svg
                  className="w-3.5 h-3.5 mr-1.5 text-blue-400/70"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                {experience.location}
              </div>
            </div>
          </div>
        </div>
      </SpotlightCard>
    </motion.div>
  );
};

const Experience = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section id="experience" className="py-24 bg-[#121212] relative">
      {" "}
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-500/0 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-indigo-500/0 rounded-full filter blur-3xl"></div>
        <div className="grid grid-cols-8 h-full w-full opacity-0">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="border-r border-white/10 h-full"></div>
          ))}
        </div>
        <div className="grid grid-rows-8 h-full w-full opacity-0">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="border-b border-white/10 w-full"></div>
          ))}
        </div>
      </div>
      <div className="container mx-auto px-4 max-w-5xl relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight">
            Professional{" "}
            <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-indigo-600 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>

          <div className="w-20 h-1.5 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto rounded-full mt-6"></div>
        </motion.div>

        {/* Desktop Timeline - Hidden on Mobile */}
        <div className="hidden md:block relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-[50%] top-0 bottom-0 w-px bg-gradient-to-b from-blue-600/20 via-indigo-500/30 to-blue-600/10"></div>

          {/* Experience Cards in Timeline */}
          {experiences.map((exp, index) => (
            <TimelineExperienceCard
              key={index}
              experience={exp}
              index={index}
              isEven={index % 2 === 0}
              isHovered={hoveredIndex === index}
              setHovered={() => setHoveredIndex(index)}
              clearHovered={() => setHoveredIndex(null)}
              isFirst={index === 0}
              isLast={index === experiences.length - 1}
            />
          ))}
        </div>

        {/* Mobile Timeline - Shown on Mobile Only */}
        <div className="md:hidden relative">
          <div className="absolute left-7 top-0 bottom-0 w-px bg-gradient-to-b from-blue-600/20 via-indigo-500/30 to-blue-600/10"></div>

          {experiences.map((exp, index) => (
            <MobileTimelineCard key={index} experience={exp} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
