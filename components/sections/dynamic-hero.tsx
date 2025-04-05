"use client"

import { useState, useEffect, useRef, useCallback } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import AnimatedButton from "@/components/ui/animated-button"

interface HeroSlide {
  image: string
  heading: string
  subheading: string
}

interface DynamicHeroProps {
  onImageChange?: (index: number) => void
}

function DynamicHero({ onImageChange }: DynamicHeroProps) {
  // Konfigurácia slidov s nadpismi a obrázkami
  const heroSlides: HeroSlide[] = [
    {
      image: "/images/maros-profil.webp",
      heading: "Maroš <span class=\"text-red-600\">Molnár</span>",
      subheading: "Profesionálny fitness tréner a fyzioterapeut"
    },
    {
      image: "/images/services/fitness-training-1.webp",
      heading: "Špecializované <span class=\"text-red-600\">fitness tréningy</span>",
      subheading: "Komplexný prístup k vášmu zdraviu a kondícii"
    },
    {
      image: "/images/physio-service.webp",
      heading: "Odborná <span class=\"text-red-600\">fyzioterapia</span>",
      subheading: "Efektívna liečba a prevencia pohybových problémov"
    }
  ]
  
  const [currentIndex, setCurrentIndex] = useState(0)
  const timerRef = useRef<NodeJS.Timeout | null>(null)
  
  // Synchronizované prechody medzi slidmi - obalené v useCallback
  const startSlideTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current)
    
    timerRef.current = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % heroSlides.length)
    }, 4000) // Rýchlejšie prechody (4s namiesto 5s)
  }, [heroSlides.length])
  
  useEffect(() => {
    // Spustenie časovača pri načítaní
    startSlideTimer()
    
    // Notifikovanie o zmene indexu
    if (onImageChange) onImageChange(currentIndex)
    
    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
    }
  }, [currentIndex, onImageChange, startSlideTimer])
  
  function handleSlideClick(index: number) {
    setCurrentIndex(index)
    startSlideTimer() // Reštartovanie časovača
  }
  
  return (
    <div className="relative h-[100svh] w-full overflow-hidden">
      {/* Animovaný background */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`bg-${currentIndex}`}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0"
        >
          <div className="w-full h-full bg-black relative">
            <div className="absolute inset-0">
              <Image 
                src={heroSlides[currentIndex].image}
                alt={`Maroš Molnár - ${currentIndex === 0 ? 'Profil' : currentIndex === 1 ? 'Tréning' : 'Fyzioterapia'}`}
                fill
                className="object-cover object-center"
                priority={currentIndex === 0}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                quality={85}
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/60 to-black/90" />
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
      
      {/* Synchronizovaný textový obsah */}
      <div className="absolute left-0 right-0 text-center p-4 sm:p-6 md:p-8 z-10 text-shadow-lg bottom-16 md:bottom-24 lg:bottom-32">
        <AnimatePresence mode="wait">
          <motion.div
            key={`heading-${currentIndex}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 
              className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 text-white tracking-wide"
              dangerouslySetInnerHTML={{ __html: heroSlides[currentIndex].heading }}
            />
          </motion.div>
        </AnimatePresence>
        
        <AnimatePresence mode="wait">
          <motion.div
            key={`subheading-${currentIndex}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <p className="text-base sm:text-lg md:text-xl text-gray-200 max-w-xl mx-auto mb-6 sm:mb-8">
              {heroSlides[currentIndex].subheading}
            </p>
          </motion.div>
        </AnimatePresence>
        
        <AnimatedButton href="/kontakt#objednavka" variant="primary" size="lg">
          Objednať konzultáciu
        </AnimatedButton>
      </div>
      
      {/* Indikátory slidov */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-20">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => handleSlideClick(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentIndex ? 'bg-red-600 w-6' : 'bg-white/50'}`}
            aria-label={`Prejsť na slide ${index + 1}`}
          />
        ))}  
      </div>
    </div>
  )
}

export default DynamicHero
