import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import { projects } from "../assets/asset.js";

const ProjectSection = () => {
  const [visibleProjects, setVisibleProjects] = useState(6);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const mobileView = window.innerWidth < 1024;
      setIsMobile(mobileView);
      setVisibleProjects(mobileView ? 3 : 6);
      setExpanded(false);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleToggleProjects = () => {
    if (expanded) {
      setVisibleProjects(isMobile ? 3 : 6); // Show initial projects count
    } else {
      setVisibleProjects(projects.length); // Show all projects
    }
    setExpanded(!expanded);
  };

  return (
    <section id="projects" className="py-10 sm:py-16bg-[#121212]">
      {/* Section Title */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-3xl sm:text-4xl font-bold text-center text-white mb-6 sm:mb-10"
      >
        My Projects
      </motion.h2>

      {/* Project Grid (Responsive) */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 px-4 sm:px-10 lg:px-20"
      >
        {projects.slice(0, visibleProjects).map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </motion.div>

      {/* "See More" / "See Less" Button */}
      {projects.length > (isMobile ? 3 : 6) && (
        <div className="flex justify-center mt-6 sm:mt-8">
          <button
            onClick={handleToggleProjects}
            className="px-5 py-2 bg-gradient-to-br from-blue-500 to-purple-500 text-white font-semibold rounded-lg hover:opacity-80 transition"
          >
            {expanded ? "See Less..." : "See More..."}
          </button>
        </div>
      )}
    </section>
  );
};

export default ProjectSection;
