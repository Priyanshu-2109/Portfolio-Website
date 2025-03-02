import React from "react";
import AnimatedNumbers from "react-animated-numbers";

const achievementsList = [
    { id: 1, metric: "Projects Completed", value: "4", postfix: "+" },
    { id: 2, metric: "LeetCode Problems Solved", value: "50", prefix: "~", postfix: "+" },
    { id: 3, metric: "Hackathons Participated", value: "5", postfix: "+" },
];

const AchievementsSection = () => {
  return (
    <div className="py-10 px-6 sm:py-16 sm:px-12">
      <div className="border border-[#33353F] rounded-lg py-10 px-8 flex flex-col sm:flex-row items-center justify-between">
        {achievementsList.map((achievement,index) => (
          <div key={index} className="flex flex-col items-center justify-center mx-6 my-4 sm:my-0">
            <h2 className="text-white text-4xl font-bold flex flex-row">
              {achievement.prefix || ""}
              <AnimatedNumbers
                includeComma
                animateToNumber={parseInt(achievement.value)}
                locale="en-US"
                className="text-white text-4xl font-bold"
                configs={(_, i) => ({
                  key: i,
                  mass: 1,  
                  friction: 50,  
                  tension: 120 * (i + 1),
                })}
              />
              {achievement.postfix || ""}
            </h2>
            <p className="text-[#ADB7BE] text-lg">{achievement.metric}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AchievementsSection;
