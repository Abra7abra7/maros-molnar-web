"use client";

import { useRef} from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface ParallaxEffectProps {
  children: React.ReactNode;
  speed?: number; // Positive values move slower, negative values move faster
  className?: string;
  direction?: "vertical" | "horizontal";
}

export default function ParallaxEffect({
  children,
  speed = 0.5,
  className = "",
  direction = "vertical",
}: ParallaxEffectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Calculate transform based on direction
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    direction === "vertical" ? [0, 100 * speed] : [0, 0]
  );
  const x = useTransform(
    scrollYProgress,
    [0, 1],
    direction === "horizontal" ? [0, 100 * speed] : [0, 0]
  );

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.div
        style={{ y, x }}
        className="w-full h-full"
      >
        {children}
      </motion.div>
    </div>
  );
}
