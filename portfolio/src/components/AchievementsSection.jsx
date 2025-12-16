import React from "react";
import CountUp from "./CountUp";

const achievementsList = [
  { id: 1, metric: "Projects Completed", value: 10, postfix: "+" },
  { id: 2, metric: "LeetCode Problems Solved", value: 300, prefix: "~", postfix: "+" },
  { id: 3, metric: "At CodeChef", value: 2, postfix: "⭐" },
];

const AchievementsSection = () => {
  return (
    <div className="py-10 px-6 sm:py-15 sm:px-12">
      <div className="border border-[#33353F] backdrop-blur-xs rounded-lg py-10 px-8 flex flex-wrap items-center justify-center sm:justify-between gap-6 sm:gap-12 w-full max-w-[95%] mx-auto">
        {achievementsList.map((achievement) => (
          <div key={achievement.id} className="flex flex-col items-center justify-center mx-4 sm:mx-6 w-[80%] sm:w-auto min-w-[120px]">
            <h2 className="text-white text-3xl sm:text-4xl font-bold flex items-center">
              {achievement.prefix && <span className="mr-1">{achievement.prefix}</span>}
              <CountUp
                from={0}
                to={achievement.value}
                separator=","
                duration={1}
                className="text-white text-3xl sm:text-4xl font-bold"
              />
              {achievement.postfix && <span className="ml-1">{achievement.postfix}</span>}
            </h2>
            <p className="text-[#ADB7BE] text-base sm:text-lg text-center leading-tight">
              {achievement.metric}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AchievementsSection;
