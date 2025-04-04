"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export default function SideNavigation() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(true);
  const [activeHover, setActiveHover] = useState<string | null>(null);
  
  // Responzívnosť - skrytie navigácie na mobiloch
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth < 768) {
        setIsOpen(false);
      } else {
        setIsOpen(true);
      }
    };
    
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Efekty pre animácie
  const navVariants = {
    open: { x: 0 },
    closed: { x: "-100%" },
  };
  
  const itemVariants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: -20 },
  };
  
  return (
    <>
      {/* Hlavná bočná navigácia */}
      <motion.nav
        className={cn(
          "fixed left-0 top-0 bottom-0 z-40 w-16 md:w-24 bg-black/70 backdrop-blur-md",
          isMobile && "pointer-events-none"
        )}
        variants={navVariants}
        initial={isMobile ? "closed" : "open"}
        animate={isOpen ? "open" : "closed"}
        transition={{ duration: 0.3 }}
      >
        <div className="h-full flex flex-col items-center justify-center py-8 space-y-10">
          {navLinks.map((link, index) => {
            const isActive = pathname === link.href || pathname.startsWith(`${link.href}/`);
            const isHovered = activeHover === link.href;
            
            return (
              <motion.div
                key={link.href}
                className={cn(
                  "relative",
                  isMobile && "pointer-events-auto"
                )}
                variants={itemVariants}
                transition={{ delay: index * 0.05 }}
                onMouseEnter={() => setActiveHover(link.href)}
                onMouseLeave={() => setActiveHover(null)}
              >
                <Link href={link.href}>
                  <motion.div
                    className={cn(
                      "relative flex flex-col items-center justify-center px-2",
                      "group cursor-pointer"
                    )}
                  >
                    {/* Indikátor aktívnej položky */}
                    {isActive && (
                      <motion.div
                        className="absolute left-0 w-1 h-12 bg-red-500"
                        layoutId="activeIndicator"
                      />
                    )}
                    
                    {/* Meno položky */}
                    <div
                      className={cn(
                        "text-sm md:text-base font-medium origin-left writing-vertical",
                        isActive ? "text-red-500" : "text-white",
                        "group-hover:text-red-500 transition-colors duration-300"
                      )}
                    >
                      {link.title}
                    </div>
                    
                    {/* Efekt pri hover */}
                    {isHovered && !isActive && (
                      <motion.div
                        className="absolute left-0 w-1 h-12 bg-red-500/50"
                        initial={{ scaleY: 0 }}
                        animate={{ scaleY: 1 }}
                        exit={{ scaleY: 0 }}
                      />
                    )}
                  </motion.div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </motion.nav>
      
      {/* Tlačidlo pre mobilný výber */}
      {isMobile && (
        <motion.button
          className="fixed top-4 left-4 z-50 bg-black/80 text-white w-10 h-10 rounded-full flex items-center justify-center shadow-md"
          onClick={() => setIsOpen(!isOpen)}
          whileTap={{ scale: 0.9 }}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <motion.path
              d="M3 6H21"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 8 : 0 }}
            />
            <motion.path
              d="M3 12H21"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              animate={{ opacity: isOpen ? 0 : 1 }}
            />
            <motion.path
              d="M3 18H21"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -8 : 0 }}
            />
          </svg>
        </motion.button>
      )}
    </>
  );
}

// Pridávame globálne štýly pre vertikálny text
// Tieto budú importované v hlavnom layout súbore
const styles = `
  .writing-vertical {
    writing-mode: vertical-rl;
    text-orientation: mixed;
    transform: rotate(180deg);
  }
`;

export { styles as sideNavigationStyles };
