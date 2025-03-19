"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  imageSrc: string;
  href: string;
  className?: string;
}

export default function ServiceCard({
  title,
  description,
  imageSrc,
  href,
  className = "",
}: ServiceCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className={`relative overflow-hidden rounded-lg shadow-lg group ${className}`}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 p-6 h-full flex flex-col justify-end text-white">
        <motion.h3 
          className="text-2xl font-bold mb-2"
          animate={{ y: isHovered ? -5 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {title}
        </motion.h3>
        
        <motion.p 
          className="text-gray-300 mb-4"
          initial={{ opacity: 0.8, height: "3rem", overflow: "hidden" }}
          animate={{ 
            opacity: isHovered ? 1 : 0.8,
            height: isHovered ? "auto" : "3rem"
          }}
          transition={{ duration: 0.3 }}
        >
          {description}
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ 
            opacity: isHovered ? 1 : 0,
            y: isHovered ? 0 : 20
          }}
          transition={{ duration: 0.3 }}
        >
          <Link 
            href={href}
            className="inline-flex items-center text-red-500 hover:text-red-400 font-medium"
          >
            Zistiť viac
            <motion.div
              animate={{ x: isHovered ? 5 : 0 }}
              transition={{ 
                duration: 0.3,
                repeat: isHovered ? Infinity : 0,
                repeatType: "reverse"
              }}
              className="ml-2"
            >
              <ArrowRight size={16} />
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
}
