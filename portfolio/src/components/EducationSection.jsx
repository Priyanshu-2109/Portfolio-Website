import React, { useEffect, useState } from "react";

const educationData = [
  {
    title: "B. Tech (Computer Science and Engineering)",
    institution:
      "Charotar University of Science and Technology, Anand, Gujarat",
    duration: "2023 - 2027",
    grade: "Current CGPA: 9.18 / 10",
  },
  {
    title: "Higher Secondary - XII (GSEB)",
    institution: "Shree Swami Vivekanand Vidhyalaya - 2, Vadodara, Gujarat",
    duration: "2022 - 2023",
    grade: "Percentage: 76.67%",
  },
  {
    title: "Secondary - X (GSEB)",
    institution: "Shree Swami Vivekanand Vidhyalaya - 2, Vadodara, Gujarat",
    duration: "2020 - 2021",
    grade: "Percentage: 92.34%",
  },
];

const EducationSection = () => {
  const [visibleIndex, setVisibleIndex] = useState(-1);

  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll(".education-card");
      elements.forEach((el, index) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.85) {
          setVisibleIndex((prev) => Math.max(prev, index));
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div id="education" className="py-12 bg-transparent relative text-white">
      <h2 className="text-3xl font-bold text-center text-white mb-10">
        Education
      </h2>

      <div className="relative border-l-2 border-gray-700 ml-6">
        {educationData.map((edu, index) => (
          <div
            key={index}
            className={`mb-10 ml-6 relative education-card transition-opacity transform duration-700 ${
              index <= visibleIndex
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            }`}
          >
            {/* Timeline Dot (Centered) */}
            <div className="absolute -left-9 top-1/2 transform -translate-y-1/2 w-5 h-5 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 shadow-lg border-4 border-[#121212]"></div>

            {/* Card Content */}
            <div className="bg-[#1a1a1a] p-5 rounded-lg shadow-lg w-full flex flex-col sm:flex-row items-start sm:items-center justify-between max-w-full">
              {/* Details of card */}
              <div className="w-full sm:w-auto">
                <p className="text-gray-400 text-sm font-medium break-words">
                  {edu.institution}
                </p>
                <h3 className="text-lg font-semibold text-white mt-1 break-words">
                  {edu.title}
                </h3>
                <p className="text-gray-300 text-sm mt-1 sm:mt-0">
                  {edu.grade}
                </p>
              </div>

              {/* Right: Duration of education */}
              <span className="px-3 sm:px-4 py-1 sm:py-2 text-[10px] sm:text-sm font-medium bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full mt-2 sm:mt-0">
                {edu.duration}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EducationSection;
