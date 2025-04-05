"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import AnimatedButton from "@/components/ui/animated-button"

interface DynamicHeroProps {
  onImageChange?: (index: number) => void;
}

export default function DynamicHero({ onImageChange }: DynamicHeroProps) {
  // Tieto obrázky budú nahradené po ich dodaní klientom
  const heroImages = [
    "/images/maros-profil.jpg",
    "/images/services/fitness-training-1.jpg",
    "/images/physio-service.jpg"
    
  ]
  
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  
  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (currentImageIndex + 1) % heroImages.length
      setCurrentImageIndex(nextIndex)
      
      // Vyvolá callback s novým indexom, ak existuje
      if (onImageChange) {
        onImageChange(nextIndex)
      }
    }, 5000)
    
    return () => clearInterval(interval)
  }, [currentImageIndex, heroImages.length, onImageChange]) // Pridané závislosti
  
  // Render funkcie pre rôzne typy obrázkov
  const renderMarosImage = () => (
    <div className="w-full h-full bg-black relative">
      <div className="absolute inset-0">
        <Image 
          src={heroImages[0]}
          alt="Maroš Molnár - Hero"
          fill
          className="object-cover object-top md:object-center"
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
          quality={90}
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAMCAgICAgMCAgIDAwMDBAYEBAQEBAgGBgUGCQgKCgkICQkKDA8MCgsOCwkJDRENDg8QEBEQCgwSExIQEw8QEBD/2wBDAQMDAwQDBAgEBAgQCwkLEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBD/wAARCAAGAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAf/xAAeEAABBAEFAAAAAAAAAAAAAAAAAAECAwQRBQYHIf/EABUBAQEAAAAAAAAAAAAAAAAAAAME/8QAFhEBAQEAAAAAAAAAAAAAAAAAAAER/9oADAMBAAIRAxEAPwCX5z2RW7JGYgcDZMq01LTF6gZUki//2Q=="
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/60 to-black/90" />
      </div>
    </div>
  )

  const renderOtherImage = (index: number) => (
    <>
      <Image
        src={heroImages[index]}
        alt={index === 1 ? "Maroš Molnár - Tréning" : "Maroš Molnár - Fyzioterapia"}
        fill
        className="object-cover object-center"
        loading="lazy"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
        quality={75}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/90" />
    </>
  )

  return (
    <div className="relative h-[100svh] w-full overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentImageIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          {currentImageIndex === 0 
            ? renderMarosImage() 
            : renderOtherImage(currentImageIndex)
          }
        </motion.div>
      </AnimatePresence>
      
      {/* Popis a tlačidlo sú umiestnené v centre, pod logom */}
      <div className="absolute left-0 right-0 text-center p-4 sm:p-6 md:p-8 z-10 text-shadow-lg bottom-16 md:bottom-24 lg:bottom-32">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-2 text-white">Profesionálny fitness tréner a fyzioterapeut</h2>
        <p className="text-base sm:text-lg md:text-xl text-gray-200 max-w-xl mx-auto mb-4 sm:mb-6">
          Pomôžem ti dosiahnuť tvoje ciele a zlepšiť kvalitu života prostredníctvom personalizovaného prístupu.
        </p>
        <AnimatedButton href="/kontakt#objednavka" variant="primary" size="lg">
          Objednať konzultáciu
        </AnimatedButton>
      </div>
    </div>
  )
}
