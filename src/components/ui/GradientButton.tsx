import React from 'react';
import { motion } from 'framer-motion';

interface GradientButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: 'primary' | 'secondary' | 'accent';
  size?: 'sm' | 'md' | 'lg';
  glowOnHover?: boolean;
}

const GradientButton: React.FC<GradientButtonProps> = ({
  children,
  onClick,
  className = '',
  variant = 'primary',
  size = 'md',
  glowOnHover = true
}) => {
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };

  const variantClasses = {
    primary: 'bg-gradient-vietnam hover:shadow-red-500/25',
    secondary: 'bg-gradient-to-r from-blue-500 to-blue-700 hover:shadow-blue-500/25',
    accent: 'bg-gradient-to-r from-yellow-500 to-yellow-700 hover:shadow-yellow-500/25'
  };

  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`
        relative group overflow-hidden
        rounded-full font-semibold text-white
        shadow-lg transition-shadow duration-300
        ${glowOnHover ? 'hover:shadow-2xl' : ''}
        ${sizeClasses[size]}
        ${variantClasses[variant]}
        ${className}
      `}
    >
      {/* Shine effect */}
      <motion.div
        animate={{ 
          x: ['-100%', '200%'],
          opacity: [0, 0.8, 0]
        }}
        transition={{ 
          duration: 1.5,
          repeat: Infinity,
          repeatDelay: 3
        }}
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-30"
      />

      {/* Glow effect on hover */}
      {glowOnHover && (
        <motion.div
          initial={false}
          animate={{ opacity: [0, 0.5, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-50 blur-xl transition-opacity"
          style={{
            background: variant === 'primary' 
              ? 'linear-gradient(135deg, #DC2626, #EA580C)' 
              : variant === 'secondary'
              ? 'linear-gradient(135deg, #3B82F6, #1D4ED8)'
              : 'linear-gradient(135deg, #F59E0B, #D97706)'
          }}
        />
      )}

      {/* Content */}
      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
      </span>
    </motion.button>
  );
};

export default GradientButton;
