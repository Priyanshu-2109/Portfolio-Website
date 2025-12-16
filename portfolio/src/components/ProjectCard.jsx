import React, { useState } from "react";
import { motion } from "framer-motion";

const ProjectCard = ({ project }) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="relative group bg-[#1a1a1a] p-6 rounded-xl shadow-lg overflow-hidden border border-gray-800 flex flex-col items-center justify-center transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:border-gray-600 w-[450px] max-w-full"
      onClick={() => setShowDetails(!showDetails)} // Toggle details on tap for mobile
    >
      {/* Fixed Image Container */}
      <div className="relative w-full max-w-[400px] h-[250px] flex justify-center items-center bg-white rounded-lg overflow-hidden">
        <motion.img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-contain transition-all duration-500 group-hover:scale-95 p-4"
        />
      </div>

      {/* Project Title */}
      <h3 className="mt-4 text-lg font-semibold text-white text-center px-4">
        {project.title}
      </h3>

      {/* Hover/Click Overlay for Desktop & Mobile */}
      <motion.div
        className={`absolute inset-0 bg-black bg-opacity-90 flex flex-col items-center justify-center text-center transition-opacity duration-500 p-6 rounded-xl ${
          showDetails ? "opacity-100" : "opacity-0 group-hover:opacity-100"
        }`}
      >
        <h3 className="text-2xl font-bold text-white">{project.title}</h3>
        <p className="text-gray-300 text-sm mt-2">{project.description}</p>

        {/* GitHub Button - Visible on Hover (Desktop) & Tap (Mobile) */}
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 px-5 py-2 text-sm font-medium bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition"
            onClick={(e) => e.stopPropagation()} // Prevent card click from closing details
          >
            GitHub
          </a>
        )}
      </motion.div>
    </motion.div>
  );
};

export default ProjectCard;
