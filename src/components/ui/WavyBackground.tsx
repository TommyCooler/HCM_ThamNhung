import React from 'react';
import { motion } from 'framer-motion';

interface WavyBackgroundProps {
  children: React.ReactNode;
  className?: string;
}

const WavyBackground: React.FC<WavyBackgroundProps> = ({ children, className = '' }) => {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Wave layers */}
      <motion.div
        animate={{ 
          x: [0, -100, 0],
          scaleY: [1, 1.1, 1]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0 opacity-30"
      >
        <svg viewBox="0 0 1440 320" className="absolute w-[200%] h-full fill-red-600/20">
          <path d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </motion.div>

      <motion.div
        animate={{ 
          x: [-100, 0, -100],
          scaleY: [1.1, 1, 1.1]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0 opacity-20"
      >
        <svg viewBox="0 0 1440 320" className="absolute w-[200%] h-full fill-yellow-500/20">
          <path d="M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,122.7C672,149,768,235,864,256C960,277,1056,235,1152,197.3C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </motion.div>

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default WavyBackground;
