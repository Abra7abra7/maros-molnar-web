"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

interface ScrollProgressProps {
  color?: string;
  height?: number;
  showPercentage?: boolean;
}

export default function ScrollProgress({
  color = "#dc2626", // red-600
  height = 4,
  showPercentage = false,
}: ScrollProgressProps) {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  
  const [scrollPercentage, setScrollPercentage] = useState(0);
  
  useEffect(() => {
    return scrollYProgress.onChange((latest: number) => {
      setScrollPercentage(Math.round(latest * 100));
    });
  }, [scrollYProgress]);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 z-50 origin-left"
        style={{
          scaleX,
          backgroundColor: color,
          height,
        }}
      />
      
      {showPercentage && (
        <motion.div 
          className="fixed bottom-4 right-4 bg-black/80 text-white px-3 py-1 rounded-full text-sm font-medium z-50"
          animate={{ opacity: scrollPercentage > 0 ? 1 : 0 }}
          initial={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {scrollPercentage}%
        </motion.div>
      )}
    </>
  );
}
