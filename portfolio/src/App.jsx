import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Home from "./pages/Home";
import LoadingScreen from "./components/LoadingScreen.jsx";
// import { Analytics } from "@vercel/analytics/react"

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-[#121212]">
      {/* Portfolio content - always rendered */}
      {!isLoading && (
        <motion.div
          key="main"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </motion.div>
      )}

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
