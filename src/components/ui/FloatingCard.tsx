import React from 'react';
import { motion } from 'framer-motion';

interface FloatingCardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  onClick?: () => void;
}

const FloatingCard: React.FC<FloatingCardProps> = ({ 
  children, 
  className = '', 
  delay = 0,
  onClick 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay }}
      className={`relative ${className}`}
      onClick={onClick}
    >
      {/* Floating effect */}
      <motion.div
        animate={{ y: [-10, 10, -10] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="relative z-10"
      >
        {/* Glow effect */}
        <motion.div
          animate={{ 
            boxShadow: [
              "0 0 20px rgba(220, 38, 38, 0.3)",
              "0 0 40px rgba(220, 38, 38, 0.5)",
              "0 0 20px rgba(220, 38, 38, 0.3)"
            ]
          }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0 rounded-3xl bg-gradient-to-br from-red-600/20 to-yellow-500/20 blur-xl"
        />

        {/* Card content */}
        <div className="relative bg-white/90 backdrop-blur-lg rounded-3xl p-8 border border-red-200/50 shadow-2xl">
          {children}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default FloatingCard;