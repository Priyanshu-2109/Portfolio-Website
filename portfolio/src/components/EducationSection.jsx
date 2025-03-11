import React, { useEffect, useState } from "react";

const educationData = [
  {
    title: "B. Tech (Computer Science and Engineering)",
    institution: "Charotar University of Science and Technology, Anand, Gujarat",
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
    grade: "Percentage: 95.00%",
  },
];

const EducationTimeline = () => {
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
    <div className="py-12 bg-gray-100 dark:bg-[#121212]">
      <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-10">
        Education
      </h2>

      <div className="relative border-l-2 border-gray-300 dark:border-gray-700 ml-6">
        {educationData.map((edu, index) => (
          <div
            key={index}
            className={`mb-10 ml-6 relative education-card transition-opacity transform duration-700 ${
              index <= visibleIndex ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            {/* Timeline Dot (Centered) */}
            <div className="absolute -left-9 top-1/2 transform -translate-y-1/2 w-6 h-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 shadow-lg border-4 border-white dark:border-[#121212]"></div>

            {/* Card Content */}
            <div className="bg-[#1a1a1a] p-6 rounded-lg shadow-lg w-full flex items-center justify-between">
              
              {/* Details of card */}
              <div>
                <p className="text-gray-400 text-lg font-semibold">{edu.institution}</p>
                <h3 className="text-xl font-bold text-white mt-2">{edu.title}</h3>
                <p className="text-gray-300 mt-1">{edu.grade}</p>
              </div>

              {/* Right: Duration of education*/}
              <span className="px-4 py-1 text-sm font-medium bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full">
                {edu.duration}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EducationTimeline;
