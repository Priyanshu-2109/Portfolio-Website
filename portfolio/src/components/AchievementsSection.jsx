import React from "react";
import AnimatedNumbers from "react-animated-numbers";

const achievementsList = [
  { id: 1, metric: "Projects Completed", value: "4", postfix: "+" },
  { id: 2, metric: "LeetCode Problems Solved", value: "60", prefix: "~", postfix: "+" },
  { id: 3, metric: "At CodeChef", value: "2", postfix: "⭐" },
];

const AchievementsSection = () => {
  return (
    <div className="py-10 px-6 sm:py-16 sm:px-12">
      <div className="border border-[#33353F] rounded-lg py-10 px-8 flex flex-col sm:flex-row sm:flex-wrap items-center justify-center sm:justify-between gap-6 sm:gap-12">
        {achievementsList.map((achievement, index) => (
          <div key={index} className="flex flex-col items-center justify-center mx-4 sm:mx-6 w-full sm:w-auto">
            <h2 className="text-white text-3xl sm:text-4xl font-bold flex flex-row">
              {achievement.prefix || ""}
              <AnimatedNumbers
                includeComma
                animateToNumber={parseInt(achievement.value)}
                locale="en-US"
                className="text-white text-3xl sm:text-4xl font-bold"
                configs={(_, i) => ({
                  key: i,
                  mass: 1,
                  friction: 50,
                  tension: 120 * (i + 1),
                })}
              />
              {achievement.postfix || ""}
            </h2>
            <p className="text-[#ADB7BE] text-base sm:text-lg text-center">{achievement.metric}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AchievementsSection;
