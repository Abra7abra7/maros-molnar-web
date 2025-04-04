"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"

interface DynamicBrandProps {
  className?: string
  position?: "center" | "relative"
  imageIndex?: number // Index aktuálnej zobrazenej fotky
}

export default function DynamicBrand({ className, position = "center", imageIndex = 0 }: DynamicBrandProps) {
  const [isMobile, setIsMobile] = useState(false)
  
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])
  
  // Variácie animácie pre desktop a mobil
  const containerVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 1 } },
  }
  
  const textVariants = {
    initial: { opacity: 1 },
    exit: { opacity: 0, transition: { duration: 0.5 } },
  }
  
  const logoTextVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0.5 } },
  }
  
  return (
    <motion.div 
      className={cn(
        position === "center" ? "absolute z-30 transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" : "relative",
        "pointer-events-auto cursor-pointer select-none",
        className
      )}
      variants={containerVariants}
      initial="initial"
      animate="animate"
      // Automatická animácia namiesto interakcie s myšou
    >
      <AnimatePresence mode="wait">
        {imageIndex === 0 && (
          <motion.div
            key="molnar"
            className="relative"
            variants={textVariants}
            initial="initial"
            exit="exit"
          >
            <h1 className={cn(
              "font-extrabold tracking-tight",
              isMobile ? "text-5xl" : "text-7xl md:text-9xl"
            )}>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-red-500">
                Molnár
              </span>
            </h1>
          </motion.div>
        )}
        
        {imageIndex === 1 && (
          <motion.div
            key="move"
            className="relative"
            variants={logoTextVariants}
            initial="initial"
            animate="animate"
          >
            <div className="flex items-center">
              <div className="mr-2 md:mr-4 relative">
                {/* Zástupné miesto pre logo M - bude nahradené po dodaní klientom */}
                <div className="bg-red-500 w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-2xl md:text-3xl">M</span>
                </div>
              </div>
              <h1 className={cn(
                "font-extrabold tracking-tight text-red-500",
                isMobile ? "text-5xl" : "text-7xl md:text-9xl"
              )}>
                MOVE
              </h1>
            </div>
          </motion.div>
        )}
        
        {imageIndex === 2 && (
          <motion.div
            key="physio"
            className="relative"
            variants={logoTextVariants}
            initial="initial"
            animate="animate"
          >
            <div className="flex items-center">
              <div className="mr-2 md:mr-4 relative">
                <div className="bg-red-500 w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-2xl md:text-3xl">F</span>
                </div>
              </div>
              <h1 className={cn(
                "font-extrabold tracking-tight text-white",
                isMobile ? "text-5xl" : "text-7xl md:text-9xl"
              )}>
                FYZIO
              </h1>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}
