import React, { useState } from 'react';
import aboutImage from '../images/about-image.webp';
import TabButton from "../components/TabButton";

const TAB_DATA = [
  {
    title: "Hard Skills",
    id: "hardskills",
    content: (
      <ul className="list-disc pl-5 text-gray-300">
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
      <ul className="list-disc pl-5 text-gray-300">
        <li>Problem-solving</li>
        <li>Communication</li>
        <li>Teamwork</li>
        <li>Time Management</li>
      </ul>
    ),
  }
];

const AboutSection = () => {
  const [tab, setTab] = useState("hardskills");

  return (
    <section id="about" className="text-white py-16 px-6 sm:px-12">
      <div className="flex flex-col lg:flex-row items-center lg:items-start">
        
        {/* Left Side - Image */}
        <div className="lg:w-1/2 w-full">
          <img src={aboutImage} className="rounded-lg shadow-lg w-full h-auto" alt="About" />
        </div>

        {/* Right Side - Content */}
        <div className="lg:w-1/2 w-full lg:pl-12 mt-8 lg:mt-0">
          <h1 className="text-4xl font-bold mb-4">About Me</h1>
          <p className="text-gray-300 text-lg">
            I am a passionate full-stack web developer with experience in JavaScript, React, Node.js, 
            Express, MongoDB, and Git. I love building interactive and efficient web applications.
          </p>

          {/* Skills Section */}
          <div className="mt-10">
            <h2 className="text-2xl font-bold">Skills</h2>
            
            {/* Tab Buttons */}
            <div className="flex space-x-6 mt-2 border-b border-gray-600 pb-2">
              {TAB_DATA.map(({ id, title }) => (
                <TabButton key={id} selectTab={() => setTab(id)} active={tab === id}>
                  {title}
                </TabButton>
              ))}
            </div>

            {/* Tab Content */}
            <div className="mt-6">
              {TAB_DATA.find((t) => t.id === tab)?.content}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
