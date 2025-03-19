"use client";

import { useRef, useEffect, useState, useCallback } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

interface SectionRevealProps {
  children: React.ReactNode;
  direction?: "up" | "down" | "left" | "right";
  delay?: number;
  duration?: number;
  className?: string;
  once?: boolean;
}

export default function SectionReveal({
  children,
  direction = "up",
  delay = 0,
  duration = 0.5,
  className = "",
  once = true,
}: SectionRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, margin: "-100px 0px" });
  const controls = useAnimation();
  const [hasAnimated, setHasAnimated] = useState(false);

  // Set initial animation values based on direction
  const getInitialValue = useCallback(() => {
    switch (direction) {
      case "up":
        return { opacity: 0, y: 50 };
      case "down":
        return { opacity: 0, y: -50 };
      case "left":
        return { opacity: 0, x: 50 };
      case "right":
        return { opacity: 0, x: -50 };
      default:
        return { opacity: 0, y: 50 };
    }
  }, [direction]);

  // Set animation target values
  const getTargetValue = useCallback(() => {
    switch (direction) {
      case "up":
      case "down":
        return { opacity: 1, y: 0 };
      case "left":
      case "right":
        return { opacity: 1, x: 0 };
      default:
        return { opacity: 1, y: 0 };
    }
  }, [direction]);

  useEffect(() => {
    if (isInView && !hasAnimated) {
      controls.start(getTargetValue());
      if (once) {
        setHasAnimated(true);
      }
    } else if (!isInView && !once && hasAnimated) {
      controls.start(getInitialValue());
      setHasAnimated(false);
    }
  }, [isInView, controls, once, hasAnimated, getInitialValue, getTargetValue]);

  return (
    <motion.div
      ref={ref}
      initial={getInitialValue()}
      animate={controls}
      transition={{
        duration,
        delay,
        ease: "easeOut",
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
