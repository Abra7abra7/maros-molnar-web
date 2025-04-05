"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

interface AnimatedButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

export default function AnimatedButton({
  children,
  href,
  onClick,
  className = "",
  variant = "primary",
  size = "md",
  fullWidth = false,
  type = "button",
  disabled = false,
}: AnimatedButtonProps) {
  const [isHovered, setIsHovered] = useState(false);

  // Base styles
  const baseStyles = "relative inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none touch-action-manipulation";
  
  // Size styles - optimalizované pre mobilné zariadenia (väčšie dotyková plocha)
  const sizeStyles = {
    sm: "h-9 px-3 text-sm min-w-[80px]",
    md: "h-11 px-4 py-2 min-w-[100px]",
    lg: "h-12 px-6 py-3 text-lg min-w-[140px]",
  };
  
  // Variant styles
  const variantStyles = {
    primary: "bg-red-600 text-white hover:bg-red-700",
    secondary: "bg-black text-white hover:bg-gray-800",
    outline: "border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white",
  };
  
  // Width style
  const widthStyle = fullWidth ? "w-full" : "";
  
  // Combined styles
  const buttonStyles = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${widthStyle} ${className}`;

  // Button content with animation
  const ButtonContent = (
    <motion.div
      className="relative overflow-hidden w-full h-full flex items-center justify-center"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {/* Background animation */}
      <motion.div
        className="absolute inset-0 bg-white/10"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ 
          scale: isHovered ? 1 : 0,
          opacity: isHovered ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
        style={{ borderRadius: "inherit" }}
      />
      
      {/* Text with subtle animation */}
      <motion.span
        animate={{ 
          y: isHovered ? -2 : 0,
          scale: isHovered ? 1.02 : 1,
        }}
        transition={{ duration: 0.2 }}
        className="relative z-10"
      >
        {children}
      </motion.span>
    </motion.div>
  );

  // Return as link or button
  if (href) {
    return (
      <Link 
        href={href} 
        className={buttonStyles}
        onTouchStart={() => setIsHovered(true)} 
        onTouchEnd={() => setTimeout(() => setIsHovered(false), 300)}
        aria-disabled={disabled ? 'true' : 'false'}
      >
        {ButtonContent}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={() => {
        if (disabled) return;
        if (onClick) onClick();
      }}
      className={buttonStyles}
      disabled={disabled}
      onTouchStart={() => setIsHovered(true)}
      onTouchEnd={() => setTimeout(() => setIsHovered(false), 300)}
      aria-disabled={disabled ? 'true' : 'false'}
    >
      {ButtonContent}
    </button>
  );
}
