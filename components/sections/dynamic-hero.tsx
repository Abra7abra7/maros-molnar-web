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
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/60 to-black/90" />
      </div>
    </div>
  )

  const renderOtherImage = (index: number) => (
    <>
      <Image
        src={heroImages[index]}
        alt={`Maroš Molnár - Hero ${index + 1}`}
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/90" />
    </>
  )

  return (
    <div className="relative h-[90vh] md:h-screen w-full overflow-hidden">
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
      <div className="absolute left-0 right-0 text-center p-8 md:p-16 z-10 text-shadow-lg" style={{ top: '60%' }}>
        <h2 className="text-2xl md:text-3xl font-semibold mb-2 text-white">Profesionálny fitness tréner a fyzioterapeut</h2>
        <p className="text-lg md:text-xl text-gray-200 max-w-xl mx-auto mb-6">
          Pomôžem ti dosiahnuť tvoje ciele a zlepšiť kvalitu života prostredníctvom personalizovaného prístupu.
        </p>
        <AnimatedButton href="/kontakt#objednavka" variant="primary" size="lg">
          Objednať konzultáciu
        </AnimatedButton>
      </div>
    </div>
  )
}
