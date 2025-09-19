import React from 'react';
import { motion } from 'framer-motion';

interface GlowingBackgroundProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
  intensity?: 'soft' | 'medium' | 'strong';
}

const GlowingBackground: React.FC<GlowingBackgroundProps> = ({
  children,
  className = '',
  glowColor = 'rgba(220, 38, 38, 0.2)', // Default red glow
  intensity = 'medium'
}) => {
  const glowIntensity = {
    soft: 'blur-xl',
    medium: 'blur-2xl',
    strong: 'blur-3xl'
  };

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Animated glow orbs */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 50, 0],
          y: [0, 30, 0]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className={`absolute -top-1/2 -left-1/2 w-full h-full rounded-full ${glowIntensity[intensity]}`}
        style={{ background: glowColor }}
      />

      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          x: [0, -30, 0],
          y: [0, -50, 0]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className={`absolute -bottom-1/2 -right-1/2 w-full h-full rounded-full ${glowIntensity[intensity]}`}
        style={{ background: glowColor }}
      />

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default GlowingBackground;
