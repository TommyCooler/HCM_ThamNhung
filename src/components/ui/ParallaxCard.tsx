import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface ParallaxCardProps {
  children: React.ReactNode;
  className?: string;
  depth?: number;
  glowOnHover?: boolean;
}

const ParallaxCard: React.FC<ParallaxCardProps> = ({
  children,
  className = '',
  depth = 20,
  glowOnHover = true
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [glowPosition, setGlowPosition] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;
    
    const rotateXValue = (mouseY / (rect.height / 2)) * -depth;
    const rotateYValue = (mouseX / (rect.width / 2)) * depth;

    setRotateX(rotateXValue);
    setRotateY(rotateYValue);

    // Update glow position
    const glowX = ((e.clientX - rect.left) / rect.width) * 100;
    const glowY = ((e.clientY - rect.top) / rect.height) * 100;
    setGlowPosition({ x: glowX, y: glowY });
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
    setGlowPosition({ x: 50, y: 50 });
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{
        rotateX,
        rotateY,
      }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className={`relative transform-gpu ${className}`}
      style={{ perspective: '1000px' }}
    >
      {/* Glow effect */}
      {glowOnHover && (
        <div
          className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: `radial-gradient(circle at ${glowPosition.x}% ${glowPosition.y}%, rgba(220, 38, 38, 0.3) 0%, transparent 50%)`
          }}
        />
      )}

      {/* Content */}
      <div className="relative">
        {children}
      </div>
    </motion.div>
  );
};

export default ParallaxCard;
