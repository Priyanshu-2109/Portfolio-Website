import React from "react";
import { motion } from "framer-motion";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";
import AboutSection from "../components/AboutSection";
import AboutMeSkills from "../components/AboutMeSkills";
import AchievementsSection from "../components/AchievementsSection";
import ProjectsSection from "../components/ProjectsSection";
import EducationSection from "../components/EducationSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
// import SplashCursor from './SplashCursor'
import Experience from "../components/Experience";

// Animation variants for staggered section entrance
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const sectionVariants = {
  hidden: {
    opacity: 0,
    y: 60,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.8, 0.25, 1],
    },
  },
};

const Home = () => {
  return (
    <motion.main
      className="flex min-h-screen flex-col bg-transparent relative z-10"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Navbar with special entrance */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <Navbar />
      </motion.div>

      <motion.div
        className="container mt-24 mx-auto px-4 sm:px-8 lg:px-12 py-4"
        variants={containerVariants}
      >
        <motion.div variants={sectionVariants}>
          <HeroSection />
        </motion.div>

        <motion.div variants={sectionVariants}>
          <AchievementsSection />
        </motion.div>

        <motion.div variants={sectionVariants}>
          <AboutSection />
        </motion.div>

        <motion.div variants={sectionVariants}>
          <AboutMeSkills />
        </motion.div>

        <motion.div variants={sectionVariants}>
          <EducationSection />
        </motion.div>

        <motion.div variants={sectionVariants}>
          <Experience />
        </motion.div>

        <motion.div variants={sectionVariants}>
          <ProjectsSection />
        </motion.div>

        <motion.div variants={sectionVariants}>
          <ContactSection />
        </motion.div>

        <motion.div variants={sectionVariants}>
          <Footer />
        </motion.div>

        {/* <SplashCursor /> */}
      </motion.div>
    </motion.main>
  );
};

export default Home;
