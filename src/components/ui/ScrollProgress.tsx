import React, { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

interface ScrollProgressProps {
  color?: string;
  height?: number;
  showPercentage?: boolean;
}

const ScrollProgress: React.FC<ScrollProgressProps> = ({
  color = '#DC2626',
  height = 3,
  showPercentage = false
}) => {
  const [scrollPercentage, setScrollPercentage] = useState(0);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    return scrollYProgress.onChange(latest => {
      setScrollPercentage(Math.round(latest * 100));
    });
  }, [scrollYProgress]);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 z-50 origin-left"
        style={{
          scaleX,
          height,
          background: color
        }}
      />
      
      {showPercentage && scrollPercentage > 0 && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed top-6 right-6 z-50"
        >
          <div
            className="bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-sm font-medium shadow-lg"
            style={{ color }}
          >
            {scrollPercentage}%
          </div>
        </motion.div>
      )}
    </>
  );
};

export default ScrollProgress;
