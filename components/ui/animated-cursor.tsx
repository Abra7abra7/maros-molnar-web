"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface AnimatedCursorProps {
  color?: string;
  size?: number;
  ringSize?: number;
  trailColor?: string;
}

export default function AnimatedCursor({
  color = "#dc2626", // red-600
  size = 8,
  ringSize = 24,
  trailColor = "rgba(220, 38, 38, 0.2)", // red-600 with opacity
}: AnimatedCursorProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorHidden, setCursorHidden] = useState(false);
  
  useEffect(() => {
    // Track mouse position
    const mouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };
    
    // Hide cursor when mouse leaves window
    const mouseLeave = () => setCursorHidden(true);
    const mouseEnter = () => setCursorHidden(false);
    
    // Add hover effect for interactive elements
    const addHoverClass = () => {
      const interactiveElements = document.querySelectorAll('a, button, [role="button"], input, select, textarea');
      
      interactiveElements.forEach((el) => {
        el.addEventListener('mouseenter', () => {
          document.body.classList.add('cursor-hover');
        });
        
        el.addEventListener('mouseleave', () => {
          document.body.classList.remove('cursor-hover');
        });
      });
    };
    
    window.addEventListener("mousemove", mouseMove);
    window.addEventListener("mouseleave", mouseLeave);
    window.addEventListener("mouseenter", mouseEnter);
    
    // Initial setup
    document.body.style.cursor = "none";
    addHoverClass();
    
    return () => {
      window.removeEventListener("mousemove", mouseMove);
      window.removeEventListener("mouseleave", mouseLeave);
      window.removeEventListener("mouseenter", mouseEnter);
      document.body.style.cursor = "auto";
    };
  }, []);
  
  // Add CSS to document
  useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = `
      .cursor-hover .cursor-ring {
        width: 40px !important;
        height: 40px !important;
        border-width: 2px !important;
      }
      
      .cursor-hover .cursor-dot {
        width: 5px !important;
        height: 5px !important;
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <>
      {/* Cursor dot */}
      <motion.div
        className="cursor-dot fixed top-0 left-0 rounded-full pointer-events-none z-[9999]"
        style={{
          backgroundColor: color,
          width: size,
          height: size,
          opacity: cursorHidden ? 0 : 1,
        }}
        animate={{
          x: mousePosition.x - size / 2,
          y: mousePosition.y - size / 2,
        }}
        transition={{
          type: "spring",
          damping: 25,
          stiffness: 400,
          mass: 0.1,
        }}
      />
      
      {/* Cursor ring */}
      <motion.div
        className="cursor-ring fixed top-0 left-0 rounded-full pointer-events-none z-[9998] border-solid"
        style={{
          borderColor: color,
          borderWidth: 1,
          width: ringSize,
          height: ringSize,
          opacity: cursorHidden ? 0 : 1,
        }}
        animate={{
          x: mousePosition.x - ringSize / 2,
          y: mousePosition.y - ringSize / 2,
        }}
        transition={{
          type: "spring",
          damping: 20,
          stiffness: 300,
          mass: 0.2,
        }}
      />
      
      {/* Cursor trail */}
      {Array.from({ length: 5 }).map((_, index) => (
        <motion.div
          key={index}
          className="fixed top-0 left-0 rounded-full pointer-events-none z-[9997]"
          style={{
            backgroundColor: trailColor,
            width: size * 0.8,
            height: size * 0.8,
            opacity: cursorHidden ? 0 : 0.2 - index * 0.03,
          }}
          animate={{
            x: mousePosition.x - (size * 0.8) / 2,
            y: mousePosition.y - (size * 0.8) / 2,
          }}
          transition={{
            type: "spring",
            damping: 25 - index * 2,
            stiffness: 300 - index * 20,
            mass: 0.5 + index * 0.1,
            delay: 0.02 * index,
          }}
        />
      ))}
    </>
  );
}
