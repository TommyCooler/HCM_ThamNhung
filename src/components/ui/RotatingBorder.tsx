import React from 'react';
import { motion } from 'framer-motion';

interface RotatingBorderProps {
  children: React.ReactNode;
  className?: string;
  borderWidth?: number;
  borderColor?: string;
  rotationDuration?: number;
}

const RotatingBorder: React.FC<RotatingBorderProps> = ({
  children,
  className = '',
  borderWidth = 2,
  borderColor = 'border-red-500/30',
  rotationDuration = 20
}) => {
  return (
    <div className={`relative ${className}`}>
      {/* Rotating borders */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: rotationDuration, repeat: Infinity, ease: "linear" }}
        className={`absolute -inset-4 rounded-full border-${borderWidth} ${borderColor}`}
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: rotationDuration * 1.5, repeat: Infinity, ease: "linear" }}
        className={`absolute -inset-8 rounded-full border-${borderWidth} ${borderColor}`}
      />

      {/* Content */}
      <div className="relative">
        {children}
      </div>
    </div>
  );
};

export default RotatingBorder;
