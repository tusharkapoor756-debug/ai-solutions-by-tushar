"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const BackgroundEffects = () => {
  const [particles, setParticles] = useState<{ id: number; left: string; delay: number; duration: number }[]>([]);

  useEffect(() => {
    const newParticles = [...Array(20)].map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      delay: Math.random() * 20,
      duration: Math.random() * 10 + 10,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="fixed inset-0 -z-20 overflow-hidden pointer-events-none">
      {/* Animated Grid */}
      <div className="absolute inset-0 bg-grid opacity-20" />
      
      {/* Top Gradient */}
      <div className="absolute top-0 left-0 right-0 h-[500px] bg-gradient-to-b from-primary/10 to-transparent" />

      {/* Floating Particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute w-1 h-1 bg-white rounded-full opacity-20"
          animate={{
            y: [1000, -100],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            ease: "linear",
            delay: particle.delay,
          }}
          style={{
            left: particle.left,
          }}
        />
      ))}

      {/* Radial Glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/20 blur-[120px] rounded-full animate-pulse-slow" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-secondary/20 blur-[120px] rounded-full animate-pulse-slow" />
    </div>
  );
};

export default BackgroundEffects;
