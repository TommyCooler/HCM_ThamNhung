import React from 'react';
import { motion } from 'framer-motion';

interface VietnamFlagProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  animated?: boolean;
  className?: string;
}

const VietnamFlag: React.FC<VietnamFlagProps> = ({ 
  size = 'md', 
  animated = true,
  className = '' 
}) => {
  const sizeClasses = {
    sm: 'w-8 h-6',
    md: 'w-12 h-8',
    lg: 'w-16 h-12',
    xl: 'w-24 h-16'
  };

  const starSize = {
    sm: '12',
    md: '18',
    lg: '24',
    xl: '36'
  };

  return (
    <motion.div
      className={`${sizeClasses[size]} relative overflow-hidden rounded-sm shadow-lg ${className}`}
      initial={animated ? { scale: 0, rotate: -180 } : {}}
      animate={animated ? { scale: 1, rotate: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
      whileHover={animated ? { scale: 1.05 } : {}}
    >
      {/* Red background */}
      <motion.div
        className="w-full h-full bg-gradient-to-br from-red-600 via-red-700 to-red-800"
        initial={animated ? { opacity: 0 } : {}}
        animate={animated ? { opacity: 1 } : {}}
        transition={{ duration: 0.5, delay: 0.3 }}
      />
      
      {/* Yellow star */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        initial={animated ? { scale: 0, rotate: 360 } : {}}
        animate={animated ? { scale: 1, rotate: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
      >
        <svg
          width={starSize[size]}
          height={starSize[size]}
          viewBox="0 0 24 24"
          fill="none"
          className="drop-shadow-md"
        >
          <motion.path
            d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
            fill="url(#starGradient)"
            initial={animated ? { pathLength: 0 } : {}}
            animate={animated ? { pathLength: 1 } : {}}
            transition={{ duration: 1, delay: 0.8 }}
          />
          <defs>
            <linearGradient id="starGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: '#FCD34D', stopOpacity: 1 }} />
              <stop offset="50%" style={{ stopColor: '#F59E0B', stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: '#D97706', stopOpacity: 1 }} />
            </linearGradient>
          </defs>
        </svg>
      </motion.div>
      
      {/* Shine effect */}
      {animated && (
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0"
          animate={{ 
            x: ['-100%', '100%'],
            opacity: [0, 0.3, 0]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatDelay: 3,
            ease: "easeInOut"
          }}
        />
      )}
    </motion.div>
  );
};

export default VietnamFlag;
