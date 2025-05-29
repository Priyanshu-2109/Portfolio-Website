import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const LoadingScreen = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);
  useEffect(() => {
    // Animate progress from 0 to 100 over 3 seconds
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          // Call onLoadingComplete immediately so portfolio renders behind the curtains
          onLoadingComplete();
          // Start theater curtain opening animation after a brief moment
          setTimeout(() => setIsExiting(true), 100);
          return 100;
        }
        return prev + 1.67; // Adjusted increment for 3 second duration (100 / 60 frames ≈ 1.67)
      });
    }, 50); // Reduced interval for smoother animation

    return () => clearInterval(interval);
  }, [onLoadingComplete]);

  // SVG circle properties
  const circleSize = 120;
  const strokeWidth = 4;
  const radius = (circleSize - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const strokeDashoffset = circumference - (progress / 100) * circumference;
  return (
    <>
      {" "}
      {/* Loading Screen with theater curtain opening effect */}
      <div className="fixed inset-0 z-50 overflow-hidden">
        {/* Top curtain half - rises up like theater curtain */}
        <motion.div
          className="absolute top-0 left-0 right-0 h-1/2 bg-[#0a0a0a]"
          animate={isExiting ? { y: "-100%" } : { y: 0 }}
          transition={{
            duration: 1.2,
            ease: [0.25, 0.1, 0.25, 1],
            delay: 0,
          }}
        />
        {/* Bottom curtain half - drops down like theater curtain */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-1/2 bg-[#0a0a0a]"
          animate={isExiting ? { y: "100%" } : { y: 0 }}
          transition={{
            duration: 1.2,
            ease: [0.25, 0.1, 0.25, 1],
            delay: 0,
          }}
        />{" "}
        {/* Loading content container - positioned over both curtain halves */}
        <div className="absolute inset-0 z-10 h-full flex flex-col items-center justify-center">
          <motion.div
            className="w-full max-w-md px-6 text-center"
            animate={
              isExiting ? { opacity: 0, scale: 0.8 } : { opacity: 1, scale: 1 }
            }
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            {/* Name/Logo */}
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent"
            >
              Priyanshu
            </motion.h1>

            {/* Title */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.8 }}
              transition={{ delay: 0.2 }}
              className="mt-2 text-gray-300 text-lg font-light"
            >
              Full Stack Developer
            </motion.p>

            {/* Simple gradient line separator */}
            <motion.div
              className="h-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 my-6 mx-auto rounded-full"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ delay: 0.3, duration: 0.8 }}
            />

            {/* Clean circular progress loader */}
            <motion.div
              className="mx-auto my-8 relative"
              style={{ width: circleSize, height: circleSize }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              {/* Background circle */}
              <svg
                className="w-full h-full"
                viewBox={`0 0 ${circleSize} ${circleSize}`}
              >
                <circle
                  cx={circleSize / 2}
                  cy={circleSize / 2}
                  r={radius}
                  fill="none"
                  stroke="rgba(255, 255, 255, 0.1)"
                  strokeWidth={strokeWidth}
                />
              </svg>

              {/* Progress circle with gradient */}
              <svg
                className="absolute top-0 left-0 w-full h-full -rotate-90"
                viewBox={`0 0 ${circleSize} ${circleSize}`}
              >
                <defs>
                  <linearGradient
                    id="circleGradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#3B82F6" />
                    <stop offset="50%" stopColor="#8B5CF6" />
                    <stop offset="100%" stopColor="#EC4899" />
                  </linearGradient>
                </defs>
                <circle
                  cx={circleSize / 2}
                  cy={circleSize / 2}
                  r={radius}
                  fill="none"
                  stroke="url(#circleGradient)"
                  strokeWidth={strokeWidth}
                  strokeDasharray={circumference}
                  strokeDashoffset={strokeDashoffset}
                  strokeLinecap="round"
                />
              </svg>

              {/* Progress percentage */}
              <div className="absolute inset-0 flex items-center justify-center text-white font-medium text-xl">
                {Math.round(progress)}%
              </div>
            </motion.div>

            {/* Developer tag */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="mt-10 text-gray-500 text-sm"
            >
              <div className="flex items-center justify-center space-x-1">
                <span className="text-gray-400 font-mono">&lt;</span>
                <span className="text-blue-400 font-mono">developer</span>
                <span className="text-gray-400 font-mono">/&gt;</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default LoadingScreen;
