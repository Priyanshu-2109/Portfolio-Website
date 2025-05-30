import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Home from "./pages/Home";
import LoadingScreen from "./components/LoadingScreen.jsx";
// import { Analytics } from "@vercel/analytics/react"

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [showTransition, setShowTransition] = useState(false);
  const [showPortfolio, setShowPortfolio] = useState(false);

  const handleLoadingComplete = () => {
    setIsLoading(false);
    // Start the transition effects after loading screen
    setTimeout(() => {
      setShowTransition(true);
      // Show portfolio after transition effects
      setTimeout(() => {
        setShowPortfolio(true);
      }, 2500); // Increased to 2.5 seconds for smoother transition effects
    }, 250); // Reduced delay after curtains open for better timing
  };

  return (
    <div className="min-h-screen bg-[#121212] relative overflow-hidden">
      {/* Portfolio content - rendered when showPortfolio is true */}
      <AnimatePresence>
        {showPortfolio && (
          <motion.div
            key="main"
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{
              duration: 1.8,
              ease: [0.25, 0.8, 0.25, 1],
              staggerChildren: 0.15,
            }}
          >
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Transition Effects Layer */}
      <AnimatePresence>
        {showTransition && !showPortfolio && (
          <motion.div
            key="transition"
            className="fixed inset-0 z-40 pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.8, 0.25, 1] }}
          >
            {/* Floating particles */}
            <div className="absolute inset-0">
              {[...Array(20)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-gradient-to-r from-[#007BFF] to-[#8B5CF6] rounded-full"
                  initial={{
                    x: Math.random() * window.innerWidth,
                    y: window.innerHeight + 50,
                    opacity: 0,
                    scale: 0,
                  }}
                  animate={{
                    y: -50,
                    opacity: [0, 1, 0],
                    scale: [0, 1, 0],
                  }}
                  transition={{
                    duration: 3.5,
                    delay: Math.random() * 2.5,
                    ease: [0.25, 0.8, 0.25, 1],
                  }}
                />
              ))}
            </div>

            {/* Expanding circles */}
            <div className="absolute inset-0 flex items-center justify-center">
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute border-2 border-[#8B5CF6]/70 rounded-full shadow-lg shadow-[#8B5CF6]/50"
                  style={{
                    boxShadow: `0 0 ${20 + i * 10}px rgba(139, 92, 246, 0.6), inset 0 0 ${10 + i * 5}px rgba(139, 92, 246, 0.3)`,
                  }}
                  initial={{
                    width: 0,
                    height: 0,
                    opacity: 0,
                  }}
                  animate={{
                    width: [0, 300, 600],
                    height: [0, 300, 600],
                    opacity: [0, 0.9, 0],
                  }}
                  transition={{
                    duration: 2.5,
                    delay: i * 0.4,
                    ease: [0.25, 0.8, 0.25, 1],
                  }}
                />
              ))}
            </div>

            {/* Glowing orbs */}
            <div className="absolute inset-0">
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-4 h-4 bg-gradient-to-r from-[#FF69B4] to-[#007BFF] rounded-full blur-sm"
                  initial={{
                    x: Math.random() * window.innerWidth,
                    y: Math.random() * window.innerHeight,
                    opacity: 0,
                    scale: 0,
                  }}
                  animate={{
                    x: Math.random() * window.innerWidth,
                    y: Math.random() * window.innerHeight,
                    opacity: [0, 0.8, 0],
                    scale: [0, 1.5, 0],
                  }}
                  transition={{
                    duration: 2.2,
                    delay: i * 0.25,
                    ease: [0.25, 0.8, 0.25, 1],
                  }}
                />
              ))}
            </div>

            {/* Text animation */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{
                  duration: 1.5,
                  delay: 0.6,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                <motion.h2
                  className="text-4xl font-bold bg-gradient-to-r from-[#007BFF] via-[#8B5CF6] to-[#FF69B4] bg-clip-text text-transparent"
                  initial={{ opacity: 0, y: 20, scale: 0.9 }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{
                    opacity: {
                      duration: 1.2,
                      delay: 0.8,
                      ease: [0.16, 1, 0.3, 1],
                    },
                    y: { duration: 1.2, delay: 0.8, ease: [0.16, 1, 0.3, 1] },
                    scale: {
                      duration: 1.2,
                      delay: 0.8,
                      ease: [0.16, 1, 0.3, 1],
                    },
                    backgroundPosition: {
                      duration: 3.5,
                      delay: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    },
                  }}
                >
                  Welcome
                </motion.h2>
                <motion.p
                  className="text-gray-300 mt-2 text-lg"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 1.0,
                    delay: 1.3,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  to my digital space
                </motion.p>
              </motion.div>
            </div>

            {/* Lightning effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"
              initial={{ x: "-100%", skewX: -20 }}
              animate={{ x: "100%" }}
              transition={{
                duration: 1.8,
                delay: 1.0,
                ease: [0.25, 0.8, 0.25, 1],
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Loading screen overlay */}
      <AnimatePresence>
        {isLoading && (
          <LoadingScreen
            key="loading"
            onLoadingComplete={handleLoadingComplete}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
