import React from "react";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import { projects } from '../assets/asset.js';

// const projects = [
    
// ];

const ProjectSection = () => {
    return (
        <section id="projects" className="py-16 bg-gray-100 dark:bg-[#121212]">
            {/* Section Title */}
            <motion.h2
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-15"
            >
                My Projects
            </motion.h2>

            {/* Project Grid */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-6 md:px-12 lg:px-20"
            >
                {projects.map((project, index) => (
                    <ProjectCard key={index} project={project} />
                ))}
            </motion.div>
        </section>
    );
};

export default ProjectSection;
