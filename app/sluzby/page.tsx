import { Metadata } from "next";
import Image from "next/image";

import { services } from "@/lib/constants";
import SectionReveal from "@/components/animations/section-reveal";
import ParallaxEffect from "@/components/animations/parallax-effect";
import ScrollProgress from "@/components/ui/scroll-progress";
import AnimatedButton from "@/components/ui/animated-button";
import ServiceCard from "@/components/ui/service-card";
import { Check } from "lucide-react";

export const metadata: Metadata = {
  title: "Služby",
  description: "Prehľad služieb, ktoré ponúka Maros Molnár - fitness tréning a fyzioterapia.",
};

export default function ServicesPage() {
  return (
    <>
      <ScrollProgress showPercentage />
      
      {/* Hero Section */}
      <section className="relative py-24 bg-black text-white overflow-hidden">
        <ParallaxEffect speed={-0.3} className="absolute inset-0">
          <div className="w-full h-[120%] relative">
            <Image
              src="/images/services-bg.jpg"
              alt="Services Background"
              fill
              className="object-cover opacity-30"
              priority
            />
          </div>
        </ParallaxEffect>
        <div className="container mx-auto px-4 relative z-10">
          <SectionReveal>
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Moje služby</h1>
              <p className="text-xl text-gray-300">
                Ponúkam profesionálne služby v oblasti fitness tréningu a fyzioterapie. Každý klient je pre mňa jedinečný a vyžaduje individuálny prístup.
              </p>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-black text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Fitness Training */}
            <SectionReveal direction="left">
              <ServiceCard
                title={services.fitness.title}
                description={services.fitness.description}
                imageSrc="/images/fitness-service.jpg"
                href="/sluzby/fitness"
                className="h-full"
              />
            </SectionReveal>
            
            {/* Physiotherapy */}
            <SectionReveal direction="right">
              <ServiceCard
                title={services.physio.title}
                description={services.physio.description}
                imageSrc="/images/physio-service.jpg"
                href="/sluzby/fyzioterapia"
                className="h-full"
              />
            </SectionReveal>
            
            {/* Extreme Transformations */}
            <SectionReveal direction="up">
              <ServiceCard
                title={services.transformation.title}
                description={services.transformation.description}
                imageSrc="/images/transformation-service.jpg"
                href="/sluzby/extremne-premeny"
                className="h-full"
              />
            </SectionReveal>
            
            {/* Professional Athletes */}
            <SectionReveal direction="down">
              <ServiceCard
                title={services.athletes.title}
                description={services.athletes.description}
                imageSrc="/images/athletes-service.jpg"
                href="/sluzby/profesionalni-sportovci"
                className="h-full"
              />
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <SectionReveal>
            <h2 className="text-3xl font-bold mb-12 text-center text-white">Prečo si vybrať moje služby?</h2>
          </SectionReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Individuálny prístup",
                description: "Každý tréningový a rehabilitačný plán je vytvorený na mieru podľa vašich potrieb a cieľov."
              },
              {
                title: "Odborné znalosti",
                description: "Mám viac ako 10 rokov skúseností v oblasti fitness tréningu a fyzioterapie."
              },
              {
                title: "Moderné metódy",
                description: "Využívam najnovšie metódy a techniky pre dosiahnutie najlepších výsledkov."
              },
              {
                title: "Flexibilný rozvrh",
                description: "Tréningy a terapie si môžete naplánovať podľa vášho časového harmonogramu."
              },
              {
                title: "Pravidelné sledovanie pokroku",
                description: "Pravidelne vyhodnocujeme váš pokrok a upravujeme plán podľa potreby."
              },
              {
                title: "Dlhodobé výsledky",
                description: "Zameranie na dlhodobé zlepšenie kondície a zdravia, nie len krátkodobé riešenia."
              }
            ].map((feature, index) => (
              <SectionReveal key={index} direction="up" delay={0.1 * index}>
                <div className="bg-black p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-800">
                  <div className="bg-red-600 text-white p-2 rounded-full w-10 h-10 flex items-center justify-center mb-4">
                    <Check size={20} />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-white">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-black text-white text-center">
        <div className="container mx-auto px-4">
          <SectionReveal>
            <h2 className="text-3xl font-bold mb-6">Pripravený začať?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Kontaktujte ma a dohodneme si úvodnú konzultáciu, počas ktorej preberieme vaše ciele a možnosti spolupráce.
            </p>
            <AnimatedButton href="/kontakt" variant="primary" size="lg">
              Kontaktujte ma
            </AnimatedButton>
          </SectionReveal>
        </div>
      </section>
    </>
  );
}
