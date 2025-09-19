import React from 'react';
import { motion } from 'framer-motion';
import type { LucideProps } from 'lucide-react';

interface IconBadgeProps {
  icon: React.FC<LucideProps>;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'primary' | 'secondary' | 'accent';
  className?: string;
}

const IconBadge: React.FC<IconBadgeProps> = ({
  icon: Icon,
  size = 'md',
  variant = 'primary',
  className = ''
}) => {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16'
  };

  const iconSizes = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8'
  };

  const variantClasses = {
    primary: 'bg-gradient-vietnam',
    secondary: 'bg-gradient-to-br from-blue-500 to-blue-700',
    accent: 'bg-gradient-to-br from-yellow-500 to-yellow-700'
  };

  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className={`
        ${sizeClasses[size]}
        ${variantClasses[variant]}
        rounded-xl flex items-center justify-center shadow-lg
        relative overflow-hidden
        ${className}
      `}
    >
      {/* Shine effect */}
      <motion.div
        animate={{ 
          x: ['-100%', '200%'],
          opacity: [0, 1, 0]
        }}
        transition={{ 
          duration: 1.5,
          repeat: Infinity,
          repeatDelay: 3
        }}
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12"
      />

      {/* Icon */}
      <Icon className={`${iconSizes[size]} text-white relative z-10`} />
    </motion.div>
  );
};

export default IconBadge;