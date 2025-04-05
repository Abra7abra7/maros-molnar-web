"use client"

import { useState } from "react";
import Image from "next/image";

import AboutSection from "@/components/sections/about-section";
import Testimonials from "@/components/sections/testimonials";
import DynamicHero from "@/components/sections/dynamic-hero";

import SectionReveal from "@/components/animations/section-reveal";
import ScrollProgress from "@/components/ui/scroll-progress";
import ParallaxEffect from "@/components/animations/parallax-effect";
import ServiceCard from "@/components/ui/service-card";
import AnimatedButton from "@/components/ui/animated-button";
import DynamicBrand from "@/components/ui/dynamic-brand";

export default function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Funkcia na aktualizáciu aktuálneho indexu obrázka
  const handleImageChange = (index: number) => {
    setCurrentImageIndex(index);
  };
  
  return (
    <>
      <ScrollProgress showPercentage />
      
      <div className="bg-black">
        <div className="relative">
          <DynamicHero onImageChange={handleImageChange} />
          
          {/* Centrálny dynamický prvok Molnár/Move/Logo - len v hero sekcii */}
          <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center z-20">
            <DynamicBrand position="center" imageIndex={currentImageIndex} />
          </div>
        </div>
        
        <SectionReveal>
          <AboutSection 
            title="O mne"
            description="Som Maros Molnár, profesionálny fitness tréner a fyzioterapeut s viac ako 10-ročnými skúsenosťami v oblasti športu a rehabilitácie. Mojím cieľom je pomôcť vám dosiahnuť optimálnu fyzickú kondíciu a zdravie prostredníctvom individuálneho prístupu a odborných znalostí.\n\nŠpecializujem sa na funkčný tréning, rehabilitáciu po zraneniach a dlhodobé zlepšenie fyzickej kondície. Verím, že každý človek je jedinečný a preto vyžaduje individuálny prístup k tréningu a rehabilitácii."
            imageSrc="/images/maros-profil.webp"
            ctaText="Viac o mne"
            ctaLink="/o-mne"
          />
        </SectionReveal>
        
        {/* Pozadie s paralaxovým efektom */}
        <div className="relative py-20 overflow-hidden bg-black">
          <ParallaxEffect speed={-0.2} className="absolute inset-0 z-0">
            <div className="w-full h-[120%] relative">
              <Image
                src="/images/services/fitness-training-1.webp"
                alt="Fitness Training Background"
                fill
                className="object-cover opacity-20"
                priority
              />
            </div>
          </ParallaxEffect>
          
          <div className="relative z-10">
            <SectionReveal>
              <div className="container mx-auto px-4 mb-12 text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Moje služby</h2>
                <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                  Ponúkam komplexné služby v oblasti fitness tréningu a fyzioterapie, prispôsobené vašim individuálnym potrebám a cieľom.
                </p>
              </div>
            </SectionReveal>
            
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <SectionReveal direction="left" delay={0.2}>
                  <ServiceCard
                    title="Fitness Tréning"
                    description="Individuálne tréningové plány a osobný tréning pre dosiahnutie vašich fitness cieľov. Zameraný na silu, vytrvalosť a celkové zlepšenie kondície."
                    imageSrc="/images/fitness-service.webp"
                    href="/sluzby/fitness"
                  />
                </SectionReveal>
                
                <SectionReveal direction="right" delay={0.2}>
                  <ServiceCard
                    title="Fyzioterapia"
                    description="Odborná fyzioterapia a rehabilitácia pre liečbu zranení a zlepšenie pohyblivosti. Individuálny prístup a moderné metódy rehabilitácie."
                    imageSrc="/images/physio-service.webp"
                    href="/sluzby/fyzioterapia"
                  />
                </SectionReveal>
                
                <SectionReveal direction="left" delay={0.4}>
                  <ServiceCard
                    title="Extrémne Premeny"
                    description="Príbehy úspešných klientov a ich transformácie. Komplexný program pre tých, ktorí chcú dosiahnuť výraznú zmenu postavy a životného štýlu."
                    imageSrc="/images/transformation-service.webp"
                    href="/sluzby/extremne-premeny"
                  />
                </SectionReveal>
                
                <SectionReveal direction="right" delay={0.4}>
                  <ServiceCard
                    title="Profesionálni športovci"
                    description="Spolupráca s vrcholovými športovcami z NHL, profesionálnymi futbalistami, tenistami a ďalšími elitami športového sveta."
                    imageSrc="/images/athletes-service.webp"
                    href="/sluzby/profesionalni-sportovci"
                  />
                </SectionReveal>
              </div>
              
              <SectionReveal delay={0.6}>
                <div className="mt-12 text-center">
                  <AnimatedButton href="/sluzby" variant="primary" size="lg">
                    Všetky služby
                  </AnimatedButton>
                </div>
              </SectionReveal>
            </div>
          </div>
        </div>
        
        <SectionReveal>
          <Testimonials />
        </SectionReveal>
        
        {/* Call to Action sekcia */}
        <SectionReveal>
          <div className="bg-black text-white py-20">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Pripravený začať?</h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Kontaktujte ma a dohodneme si úvodnú konzultáciu, počas ktorej preberieme vaše ciele a možnosti spolupráce.
              </p>
              <AnimatedButton href="/kontakt" variant="primary" size="lg">
                Kontaktujte ma
              </AnimatedButton>
            </div>
          </div>
        </SectionReveal>
      </div>
    </>
  );
}
