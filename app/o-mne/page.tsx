import Image from "next/image";
import { Metadata } from "next";

import SectionReveal from "@/components/animations/section-reveal";
import ParallaxEffect from "@/components/animations/parallax-effect";
import ScrollProgress from "@/components/ui/scroll-progress";
import AnimatedButton from "@/components/ui/animated-button";
import { Award, Book, Heart, Zap, Clock, BarChart } from "lucide-react";

export const metadata: Metadata = {
  title: "O mne",
  description: "Profesionálny životopis a informácie o Marosovi Molnárovi, fitness trénerovi a fyzioterapeutovi.",
};

export default function AboutPage() {
  return (
    <>
      <ScrollProgress showPercentage />
      
      {/* Hero Section */}
      <section className="relative py-24 bg-black text-white overflow-hidden">
        <ParallaxEffect speed={-0.3} className="absolute inset-0">
          <div className="w-full h-[120%] relative">
            <Image
              src="/images/services/fitness-training-3.webp"
              alt="About Background"
              fill
              className="object-cover opacity-30"
              priority
            />
          </div>
        </ParallaxEffect>
        <div className="container mx-auto px-4 relative z-10">
          <SectionReveal>
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">O mne</h1>
              <p className="text-xl mb-8 text-gray-300">
                Profesionálny fitness tréner a fyzioterapeut s dlhoročnými skúsenosťami.
                Pomáham ľuďom dosiahnuť ich fitness ciele a zlepšiť kvalitu života.
              </p>
              <AnimatedButton href="/kontakt" className="bg-red-600 hover:bg-red-700">
                Kontaktujte ma
              </AnimatedButton>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Profile Section */}
      <section className="py-16 bg-black text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <SectionReveal direction="left">
              <div className="relative h-[600px] rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/images/maros-profil.webp"
                  alt="Maros Molnár"
                  fill
                  className="object-cover"
                />
              </div>
            </SectionReveal>
            
            <SectionReveal direction="right">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-white">Kto som</h2>
                <div className="space-y-4 text-gray-300">
                  <p>
                    Som Maros Molnár, profesionálny fitness tréner a fyzioterapeut s viac ako 10-ročnými skúsenosťami. Moja cesta začala, keď som ako tínedžer objavil svoju vášeň pre šport a zdravý životný štýl.
                  </p>
                  <p>
                    Po štúdiu fyzioterapie na Univerzite Komenského v Bratislave som získal certifikácie v oblasti osobného tréningu, výživy a rehabilitácie. Moja filozofia je založená na individuálnom prístupe ku každému klientovi a na kombinácii moderných tréningových metód s tradičnými rehabilitačnými postupmi.
                  </p>
                  <p>
                    Verím, že každý človek má potenciál zlepšiť svoju fyzickú kondíciu a zdravie, bez ohľadu na vek alebo aktuálnu formu. Mojím cieľom je nielen pomôcť klientom dosiahnuť ich krátkodobé ciele, ale naučiť ich, ako si udržať zdravý životný štýl dlhodobo.
                  </p>
                </div>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <SectionReveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Moja filozofia</h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                Verím v holistický prístup k fitness a zdraviu, ktorý zohľadňuje fyzické, mentálne a emocionálne aspekty každého človeka.
              </p>
            </div>
          </SectionReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <SectionReveal delay={0.1}>
              <div className="bg-gray-900 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 h-full border border-gray-700">
                <div className="text-red-500 mb-4">
                  <Heart className="h-10 w-10" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">Individuálny prístup</h3>
                <p className="text-gray-300">
                  Každý človek je jedinečný, preto vytváram tréningové a rehabilitačné plány šité na mieru podľa potrieb, cieľov a možností každého klienta.
                </p>
              </div>
            </SectionReveal>
            
            <SectionReveal delay={0.2}>
              <div className="bg-gray-900 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 h-full border border-gray-700">
                <div className="text-red-500 mb-4">
                  <Zap className="h-10 w-10" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">Udržateľný prístup</h3>
                <p className="text-gray-300">
                  Verím v postupné a udržateľné zmeny, ktoré vedú k dlhodobým výsledkom, namiesto rýchlych riešení a extrémných prístupov.
                </p>
              </div>
            </SectionReveal>
            
            <SectionReveal delay={0.3}>
              <div className="bg-gray-900 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 h-full border border-gray-700">
                <div className="text-red-500 mb-4">
                  <Book className="h-10 w-10" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">Vzdelávanie klientov</h3>
                <p className="text-gray-300">
                  Mojím cieľom je nielen trénovať klientov, ale aj vzdelávať ich, aby rozumeli svojmu telu a mohli sa o seba starať aj mimo našich tréningov.
                </p>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <SectionReveal>
            <h2 className="text-3xl font-bold mb-12 text-center text-white">Certifikácie a vzdelanie</h2>
          </SectionReveal>
          
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                title: "Magister fyzioterapie",
                institution: "Univerzita Komenského v Bratislave",
                year: "2015"
              },
              {
                title: "Certifikovaný osobný tréner",
                institution: "Fitness Academy International",
                year: "2016"
              },
              {
                title: "Špecialista na funkčný tréning",
                institution: "National Strength and Conditioning Association",
                year: "2017"
              },
              {
                title: "Certifikát výživového poradenstva",
                institution: "Institute of Nutrition",
                year: "2018"
              }
            ].map((cert, index) => (
              <SectionReveal key={index} delay={index * 0.1}>
                <div className="bg-gray-900 p-6 rounded-lg shadow-md border border-gray-700 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-center">
                    <div className="mr-4 text-red-500">
                      <Award className="h-8 w-8" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{cert.title}</h3>
                      <p className="text-gray-300">{cert.institution}</p>
                      <p className="text-gray-400 text-sm">{cert.year}</p>
                    </div>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-black text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <Clock className="h-8 w-8" />, number: "10+", label: "Rokov skúseností" },
              { icon: <BarChart className="h-8 w-8" />, number: "500+", label: "Spokojných klientov" },
              { icon: <Zap className="h-8 w-8" />, number: "5000+", label: "Tréningových hodín" },
              { icon: <Award className="h-8 w-8" />, number: "15+", label: "Certifikácií" }
            ].map((stat, index) => (
              <SectionReveal key={index} delay={index * 0.1}>
                <div className="text-center p-6 bg-black rounded-lg border border-gray-700 hover:shadow-lg transition-shadow duration-300">
                  <div className="text-red-500 mb-4 flex justify-center">{stat.icon}</div>
                  <p className="text-4xl font-bold text-white mb-2">{stat.number}</p>
                  <p className="text-lg text-gray-300">{stat.label}</p>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Začnime spolupracovať</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-300">
              Ste pripravení zmeniť svoj život k lepšiemu? Kontaktujte ma a spoločne vytvoríme plán, ktorý vám pomôže dosiahnuť vaše ciele.
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
