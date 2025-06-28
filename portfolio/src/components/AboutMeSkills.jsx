import React from "react";
import { motion } from "framer-motion";
import ChromaGrid from "../uiCodes/ChromaGrid";

const skillsData = [
  {
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    title: "HTML",
    borderColor: "#E34F26",
    gradient: "linear-gradient(145deg, #E34F26, #121212)",
  },
  {
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    title: "CSS",
    borderColor: "#1572B6",
    gradient: "linear-gradient(145deg, #1572B6, #121212)",
  },
  {
    image: "https://www.svgrepo.com/show/374118/tailwind.svg",
    title: "Tailwind CSS",
    borderColor: "#06B6D4",
    gradient: "linear-gradient(145deg, #06B6D4, #121212)",
  },
  {
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    title: "JavaScript",
    borderColor: "#F7DF1E",
    gradient: "linear-gradient(145deg, #F7DF1E, #121212)",
  },
  {
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    title: "TypeScript",
    borderColor: "#3178C6",
    gradient: "linear-gradient(145deg, #3178C6, #121212)",
  },
  {
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    title: "React",
    borderColor: "#61DAFB",
    gradient: "linear-gradient(145deg, #61DAFB, #121212)",
  },
  {
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    title: "Next.js",
    borderColor: "#FFFFFF",
    gradient: "linear-gradient(145deg, #FFFFFF, #121212)",
  },
//   {
//     image:
//       "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/framermotion/framermotion-original.svg",
//     title: "Framer Motion",
//     borderColor: "#0055FF",
//     gradient: "linear-gradient(145deg, #0055FF, #121212)",
//   },
  {
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    title: "Node.js",
    borderColor: "#339933",
    gradient: "linear-gradient(145deg, #339933, #121212)",
  },
  {
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    title: "Express.js",
    borderColor: "#FFFF00",
    gradient: "linear-gradient(145deg, #FFFF00, #121212)",
  },
  {
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg",
    title: ".NET",
    borderColor: "#512BD4",
    gradient: "linear-gradient(145deg, #512BD4, #121212)",
  },
  {
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    title: "MongoDB",
    borderColor: "#47A248",
    gradient: "linear-gradient(145deg, #47A248, #121212)",
  },
  {
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
    title: "C",
    borderColor: "#3B82F6",
    gradient: "linear-gradient(145deg, #3B82F6, #121212)",
  },
  {
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
    title: "C++",
    borderColor: "#00599C",
    gradient: "linear-gradient(145deg, #00599C, #121212)",
  },
  {
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
    title: "Java",
    borderColor: "#ED8B00",
    gradient: "linear-gradient(145deg, #ED8B00, #121212)",
  },
  {
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",
    title: "C#",
    borderColor: "#8B5CF6",
    gradient: "linear-gradient(145deg, #8B5CF6, #121212)",
  },
  {
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    title: "Git",
    borderColor: "#F05032",
    gradient: "linear-gradient(145deg, #F05032, #121212)",
  },
  {
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    title: "GitHub",
    borderColor: "#FFFFFF",
    gradient: "linear-gradient(145deg, #FFFFFF, #121212)",
  },
  {
    image: "https://www.svgrepo.com/show/354202/postman-icon.svg",
    title: "Postman",
    borderColor: "#FF6C37",
    gradient: "linear-gradient(145deg, #FF6C37, #121212)",
  },
];

const AboutMeSkills = () => {
  return (
    <section
      id="skills"
      className="text-white py-12 sm:py-16 px-4 sm:px-6 lg:px-12 bg-[#121212]"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <p className="text-gray-300 text-base sm:text-lg lg:text-xl">
            Technologies I work with
          </p>
        </motion.div>

        {/* ChromaGrid Skills */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6 sm:mb-8 h-[350px] sm:h-[400px] lg:h-[450px] relative"
        >
          <ChromaGrid
            items={skillsData}
            radius={190}
            damping={0.4}
            fadeOut={0.6}
            ease="power3.out"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default AboutMeSkills;
