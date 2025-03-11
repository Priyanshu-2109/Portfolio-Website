import React from "react";
import { motion } from "framer-motion";

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="relative group bg-[#1a1a1a] p-6 rounded-xl shadow-lg overflow-hidden border border-gray-800 flex flex-col items-center justify-center transform transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:border-gray-600 w-[420px] max-w-full"
    >
      {/* Project Image */}
      <div className="relative w-full">
        <motion.img
          src={project.image}
          alt={project.title}
          className="w-full h-56 object-cover rounded-lg transition-all duration-500 group-hover:scale-90"
        />
      </div>

      {/* Project Title*/}
      <h3 className="mt-4 text-lg font-semibold text-white">{project.title}</h3>

      {/* Hover Overlay with Project Details */}
      <motion.div
        className="absolute inset-0 bg-black bg-opacity-80 flex flex-col items-center justify-center text-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-6 rounded-xl">
        <h3 className="text-2xl font-bold text-white">{project.title}</h3>
        <p className="text-gray-300 text-sm mt-2">{project.description}</p>

        {/* GitHub Button */}
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 px-5 py-2 text-sm font-medium bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition">
            GitHub
          </a>
        )}
      </motion.div>
    </motion.div>
  );
};

export default ProjectCard;
