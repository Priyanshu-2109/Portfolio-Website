import React, { useState, useEffect, useRef, Suspense } from "react";
import { motion } from "framer-motion";
import { Canvas, useFrame, extend, useThree } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera, useGLTF, useCubeTexture, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";
import { EffectComposer, Bloom, Noise } from "@react-three/postprocessing";

// 3D Animated Crystal Component
const CrystalLoader = ({ progress }) => {
  const meshRef = useRef();
  const lightRef = useRef();

  // Animation for the crystal
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.3;
      meshRef.current.rotation.z += delta * 0.1;
      
      // Pulse effect based on progress
      const pulseScale = 1 + Math.sin(state.clock.elapsedTime * 2) * 0.05;
      meshRef.current.scale.set(
        pulseScale,
        pulseScale,
        pulseScale
      );
    }
    
    // Animate light intensity based on progress
    if (lightRef.current) {
      lightRef.current.intensity = 5 + Math.sin(state.clock.elapsedTime * 3) * 2;
      lightRef.current.position.x = Math.sin(state.clock.elapsedTime * 0.5) * 3;
      lightRef.current.position.z = Math.cos(state.clock.elapsedTime * 0.5) * 3;
    }
  });

  return (
    <>
      {/* Dynamic lights */}
      <ambientLight intensity={0.2} />
      <pointLight 
        ref={lightRef} 
        position={[3, 3, 3]} 
        intensity={5} 
        color="#5eead4"
      />
      <pointLight 
        position={[-3, -3, -3]} 
        intensity={3} 
        color="#8b5cf6"
      />
      
      {/* Progress-reactive diamond/crystal mesh */}
      <mesh ref={meshRef}>
        <octahedronGeometry args={[2, 2]} />
        <MeshDistortMaterial
          distort={0.3 * (progress / 100)} // Distortion increases with progress
          speed={3}
          color="#ffffff"
          roughness={0}
          metalness={0.9}
          emissive={"#3b82f6"}
          emissiveIntensity={0.5 * (progress / 100)}
          clearcoat={1}
          clearcoatRoughness={0.1}
        />
      </mesh>
      
      {/* Orbiting particles */}
      {[...Array(8)].map((_, i) => (
        <OrbitingParticle 
          key={i} 
          index={i} 
          progress={progress}
          radius={3.5 + (i % 3) * 0.5}
          color={
            i % 3 === 0 
            ? "#3b82f6"  // blue
            : i % 3 === 1 
              ? "#8b5cf6" // purple
              : "#ec4899"  // pink
          }
        />
      ))}
    </>
  );
};

// Orbiting particles
const OrbitingParticle = ({ index, progress, radius, color }) => {
  const meshRef = useRef();
  const speed = 0.3 + (index * 0.05);
  const offset = index * (Math.PI / 4);
  
  useFrame((state) => {
    const t = state.clock.elapsedTime * speed + offset;
    meshRef.current.position.x = Math.cos(t) * radius;
    meshRef.current.position.z = Math.sin(t) * radius;
    meshRef.current.position.y = Math.sin(t * 2) * (radius / 3);
    
    // Pulse scale based on progress
    const scale = 0.15 + (progress / 1000) + Math.sin(t * 5) * 0.05;
    meshRef.current.scale.set(scale, scale, scale);
  });
  
  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[0.2, 16, 16]} />
      <meshStandardMaterial 
        color={color} 
        emissive={color} 
        emissiveIntensity={2}
        toneMapped={false}
      />
    </mesh>
  );
};

// Scene setup with post-processing effects
const Scene = ({ progress }) => {
  const { camera } = useThree();
  
  useEffect(() => {
    camera.position.z = 10;
    camera.lookAt(0, 0, 0);
  }, [camera]);
  
  return (
    <>
      <CrystalLoader progress={progress} />
      <EffectComposer>
        <Bloom 
          luminanceThreshold={0.2} 
          luminanceSmoothing={0.9} 
          intensity={0.8} 
        />
        <Noise opacity={0.02} />
      </EffectComposer>
    </>
  );
};

// Main Loading Screen Component
const LoadingScreen = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Animate progress from 0 to 100 over 3 seconds
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => onLoadingComplete(), 500);
          return 100;
        }
        return prev + 1.25;
      });
    }, 62);

    return () => clearInterval(interval);
  }, [onLoadingComplete]);

  return (
    <div className="fixed inset-0 z-50">
      {/* Left half */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#121212] to-[#1a1a1a]"
        initial={{ clipPath: "inset(0 50% 0 0)" }}
        exit={{
          clipPath: "inset(0 100% 0 0)",
          transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
        }}
      />
      
      {/* Right half */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#121212] to-[#1a1a1a]"
        initial={{ clipPath: "inset(0 0 0 50%)" }}
        exit={{
          clipPath: "inset(0 0 0 100%)",
          transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
        }}
      />
      
      {/* Content overlay */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        initial={{ opacity: 1 }}
        exit={{
          opacity: 0,
          transition: { duration: 0.4, ease: "easeOut" },
        }}
      >
        {/* Background animated elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Animated glowing grid */}
          <div className="absolute inset-0 grid grid-cols-10 grid-rows-10 opacity-20">
            {[...Array(100)].map((_, i) => (
              <motion.div
                key={`grid-${i}`}
                className="border border-blue-500/10 backdrop-blur-sm"
                animate={{
                  opacity: [0.1, 0.2, 0.1],
                  backgroundColor: [
                    "rgba(59, 130, 246, 0.01)", 
                    "rgba(139, 92, 246, 0.03)",
                    "rgba(59, 130, 246, 0.01)"
                  ],
                }}
                transition={{
                  duration: 5 + Math.random() * 5,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              />
            ))}
          </div>

          {/* Floating particles with blur effect */}
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={`particle-${i}`}
              className={`absolute rounded-full backdrop-blur-sm ${
                i % 3 === 0
                  ? "bg-blue-500/20"
                  : i % 3 === 1
                    ? "bg-purple-500/20"
                    : "bg-cyan-500/20"
              }`}
              style={{
                width: Math.random() * 15 + 5,
                height: Math.random() * 15 + 5,
              }}
              initial={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                opacity: 0,
              }}
              animate={{
                y: [null, -80, 80],
                x: [null, Math.random() * 100 - 50],
                opacity: [0, 0.6, 0],
                scale: [0.5, 1, 0.5],
                filter: ["blur(0px)", "blur(2px)", "blur(0px)"]
              }}
              transition={{
                duration: 8 + Math.random() * 7,
                repeat: Infinity,
                delay: Math.random() * 4,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        {/* Main content */}
        <div className="text-center z-10 px-4">
          {/* Logo/Name Animation */}
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-16"
          >
            <motion.h1
              className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-blue-500 to-purple-500 bg-clip-text text-transparent pb-2"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Priyanshu
            </motion.h1>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 1.2, delay: 0.8 }}
              className="h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mx-auto mt-4 rounded-full"
            />
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="text-gray-300 text-lg mt-4 font-light tracking-wide"
            >
              Full Stack Developer
            </motion.p>
          </motion.div>

          {/* 3D Canvas Loader */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.5 }}
            className="relative h-[300px] w-full max-w-[400px] mx-auto my-4"
          >
            <Canvas dpr={[1, 2]}>
              <Suspense fallback={null}>
                <Scene progress={progress} />
              </Suspense>
            </Canvas>
            
            {/* Progress Ring */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-[240px] h-[240px] relative">
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                  {/* Blurred background circle */}
                  <circle
                    cx="50"
                    cy="50"
                    r="44"
                    stroke="rgba(255, 255, 255, 0.03)"
                    strokeWidth="1.5"
                    fill="none"
                  />
                  
                  {/* Progress circle with gradient */}
                  <motion.circle
                    cx="50"
                    cy="50"
                    r="44"
                    stroke="url(#progressGradient)"
                    strokeWidth="1.5"
                    fill="none"
                    strokeLinecap="round"
                    strokeDasharray={276.5}
                    initial={{ strokeDashoffset: 276.5 }}
                    animate={{ 
                      strokeDashoffset: 276.5 - (276.5 * progress) / 100 
                    }}
                    transition={{ duration: 0.1, ease: "easeOut" }}
                  />
                  
                  {/* Digital progress markers */}
                  {[0, 25, 50, 75].map((marker) => {
                    const angle = (marker / 100) * 360 - 90;
                    const x = 50 + 44 * Math.cos(angle * (Math.PI / 180));
                    const y = 50 + 44 * Math.sin(angle * (Math.PI / 180));
                    
                    return (
                      <motion.circle
                        key={marker}
                        cx={x}
                        cy={y}
                        r="1.5"
                        fill={progress >= marker ? "url(#progressGradient)" : "rgba(255, 255, 255, 0.2)"}
                        animate={{
                          scale: progress >= marker ? [1, 1.5, 1] : 1,
                          opacity: progress >= marker ? [0.7, 1, 0.7] : 0.3,
                        }}
                        transition={{
                          duration: 2,
                          repeat: progress >= marker ? Infinity : 0,
                          ease: "easeInOut",
                        }}
                      />
                    );
                  })}
                  
                  {/* Gradient definition */}
                  <defs>
                    <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#3B82F6" />
                      <stop offset="50%" stopColor="#8B5CF6" />
                      <stop offset="100%" stopColor="#EC4899" />
                    </linearGradient>
                  </defs>
                </svg>
                
                {/* Percentage counter in the middle */}
                <motion.div 
                  className="absolute inset-0 flex items-center justify-center font-mono text-white/90 text-xl"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 2, duration: 0.5 }}
                >
                  <div className="flex flex-col items-center">
                    <motion.span
                      animate={{ opacity: [0.7, 1, 0.7] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      {Math.round(progress)}%
                    </motion.span>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Enhanced Loading text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 2 }}
            className="text-center mt-8"
          >
            {/* <motion.p
              className="text-gray-400 text-sm font-light tracking-wider"
              animate={{
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              LOADING EXPERIENCE
            </motion.p> */}
            
            {/* Progress dots indicator */}
            <div className="flex justify-center mt-3 space-x-1.5">
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="h-1.5 w-1.5 rounded-full bg-gray-500"
                  animate={{
                    scale: [1, 1.5, 1],
                    backgroundColor: ["#6B7280", "#3B82F6", "#6B7280"]
                  }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    delay: i * 0.3,
                    ease: "easeInOut"
                  }}
                />
              ))}
            </div>
          </motion.div>
          
          {/* High-tech code decorations */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 2.3 }}
            className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
          >
            <div className="flex items-center space-x-3 text-gray-500 text-sm">
              <div className="flex items-center space-x-2">
                <span className="text-gray-400 font-mono">&lt;</span>
                <motion.div className="flex space-x-1">
                  {['d', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r'].map((char, i) => (
                    <motion.span
                      key={i}
                      className="font-mono"
                      animate={{
                        color: ["#9CA3AF", "#3B82F6", "#8B5CF6", "#9CA3AF"],
                        y: [0, -3, 0]
                      }}
                      transition={{
                        color: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                        y: { duration: 1, repeat: Infinity, ease: "easeInOut", delay: i * 0.07 }
                      }}
                    >
                      {char}
                    </motion.span>
                  ))}
                </motion.div>
                <span className="text-gray-400 font-mono">/&gt;</span>
                {/* <span className="text-gray-500 ml-2">building the future</span> */}
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default LoadingScreen;
