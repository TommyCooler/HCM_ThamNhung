import React from 'react';
import { motion } from 'framer-motion';

interface ShiningTextProps {
  children: React.ReactNode;
  className?: string;
}

const ShiningText: React.FC<ShiningTextProps> = ({ children, className = '' }) => {
  return (
    <div className={`relative overflow-hidden inline-block ${className}`}>
      {/* Shining effect */}
      <motion.div
        animate={{ 
          x: ['-100%', '200%'],
          opacity: [0, 1, 0]
        }}
        transition={{ 
          duration: 3,
          repeat: Infinity,
          repeatDelay: 5,
          ease: "easeInOut"
        }}
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent skew-x-12"
      />

      {/* Text content */}
      <span className="relative">
        {children}
      </span>
    </div>
  );
};

export default ShiningText;
