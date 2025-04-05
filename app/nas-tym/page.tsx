import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import SectionReveal from "@/components/animations/section-reveal";

import ScrollProgress from "@/components/ui/scroll-progress";
import { Facebook, Instagram, Linkedin, Mail, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Náš tím | Maros Molnár",
  description: "Spoznajte náš tím profesionálnych trénerov, fyzioterapeutov a odborníkov, ktorí vám pomôžu dosiahnuť vaše ciele.",
};

interface TeamMemberProps {
  name: string;
  position: string;
  bio: string;
  imageSrc: string;
  socials?: {
    facebook?: string;
    instagram?: string;
    linkedin?: string;
    email?: string;
    phone?: string;
  };
}

function TeamMember({ name, position, bio, imageSrc, socials }: TeamMemberProps) {
  return (
    <div className="bg-gray-900 rounded-lg overflow-hidden h-full">
      <div className="aspect-[3/4] relative">
        <Image
          src={imageSrc}
          alt={name}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-1 text-white">{name}</h3>
        <p className="text-red-500 font-medium mb-4">{position}</p>
        <p className="text-gray-300 mb-6">{bio}</p>
        
        {socials && (
          <div className="flex space-x-4">
            {socials.facebook && (
              <a href={socials.facebook} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
            )}
            {socials.instagram && (
              <a href={socials.instagram} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
            )}
            {socials.linkedin && (
              <a href={socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
            )}
            {socials.email && (
              <a href={`mailto:${socials.email}`} className="text-gray-400 hover:text-white transition-colors">
                <Mail size={20} />
              </a>
            )}
            {socials.phone && (
              <a href={`tel:${socials.phone}`} className="text-gray-400 hover:text-white transition-colors">
                <Phone size={20} />
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default function TeamPage() {
  const owners = [
    {
      name: "Maroš Molnár",
      position: "Zakladateľ & Hlavný tréner",
      bio: "Maroš je zakladateľom centra a certifikovaným fitness trénerom a fyzioterapeutom s viac ako 10-ročnými skúsenosťami. Špecializuje sa na funkčný tréning, rehabilitáciu po zraneniach a spoluprácu s profesionálnymi športovcami. Jeho prístup kombinuje moderné tréningové metódy s dôrazom na správnu techniku a individuálne potreby klientov.",
      imageSrc: "/images/team/maros-molnar.webp",
      socials: {
        facebook: "https://facebook.com",
        instagram: "https://instagram.com",
        email: "maros@marosmolnar.sk",
        phone: "+421900000000",
      },
    },
    {
      name: "Zuzana Molnárová",
      position: "Spoluzakladateľka & Manažérka",
      bio: "Zuzana je spoluzakladateľkou centra a stará sa o jeho každodenný chod. Jej organizačné schopnosti a orientácia na detail zabezpečujú, že všetky procesy fungujú hladko a klienti dostávajú najlepšiu možnú starostlivosť. Zuzana má tiež certifikáciu v oblasti výživového poradenstva a pomáha klientom s nastavením stravovacích plánov.",
      imageSrc: "/images/team/zuzana-molnarova.webp",
      socials: {
        facebook: "https://facebook.com",
        instagram: "https://instagram.com",
        email: "zuzana@marosmolnar.sk",
        phone: "+421900000001",
      },
    },
  ];

  const trainers = [
    {
      name: "Peter Novák",
      position: "Senior Fitness Tréner",
      bio: "Peter sa špecializuje na silový tréning a budovanie svalovej hmoty. S viac ako 8 rokmi skúseností pomáha klientom dosiahnuť ich ciele prostredníctvom individuálnych tréningových plánov a dôrazu na správnu techniku. Je držiteľom niekoľkých certifikácií v oblasti fitness a výživy.",
      imageSrc: "/images/team/trainer-1.webp",
      socials: {
        instagram: "https://instagram.com",
        email: "peter@marosmolnar.sk",
      },
    },
    {
      name: "Martin Kováč",
      position: "Fitness Tréner & Špecialista na kardio",
      bio: "Martin je odborníkom na kardio tréning a vytrvalostné športy. Ako bývalý profesionálny bežec prináša do svojich tréningov praktické skúsenosti a pomáha klientom zlepšiť ich vytrvalosť, spaľovanie tukov a celkovú kondíciu. Špecializuje sa aj na prípravu na bežecké súťaže.",
      imageSrc: "/images/team/trainer-2.webp",
      socials: {
        instagram: "https://instagram.com",
        email: "martin@marosmolnar.sk",
      },
    },
    {
      name: "Tomáš Horváth",
      position: "Fitness Tréner & Špecialista na funkčný tréning",
      bio: "Tomáš sa zameriava na funkčný tréning a zlepšenie pohybových schopností. Jeho tréningy kombinujú prvky gymnastiky, vzpierania a vysokointenzívneho intervalového tréningu. Pomáha klientom nielen zlepšiť ich fyzickú kondíciu, ale aj predchádzať zraneniam a zlepšiť kvalitu každodenného pohybu.",
      imageSrc: "/images/team/trainer-3.webp",
      socials: {
        instagram: "https://instagram.com",
        email: "tomas@marosmolnar.sk",
      },
    },
  ];

  const physiotherapists = [
    {
      name: "Lucia Veselá",
      position: "Hlavná Fyzioterapeutka",
      bio: "Lucia je certifikovanou fyzioterapeutkou s viac ako 6 rokmi praxe. Špecializuje sa na športovú rehabilitáciu, manuálnu terapiu a liečbu chronických bolestí. Jej holistický prístup kombinuje tradičné fyzioterapeutické techniky s modernými metódami, čo umožňuje klientom rýchlejšie zotavenie a návrat k plnej funkčnosti.",
      imageSrc: "/images/team/physio-1.webp",
      socials: {
        linkedin: "https://linkedin.com",
        email: "lucia@marosmolnar.sk",
        phone: "+421900000002",
      },
    },
  ];

  return (
    <main className="pt-16">
      <ScrollProgress showPercentage />
      
      {/* Hero Section */}
      <section className="relative bg-black text-white py-20 md:py-32">
        <div className="absolute inset-0 z-0 opacity-30">
          <Image
            src="/images/team/team-hero.webp"
            alt="Náš tím"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <SectionReveal>
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
                Náš tím
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-300">
                Spoznajte profesionálov, ktorí stoja za úspechom našich klientov a každý deň im pomáhajú dosahovať ich ciele.
              </p>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-black text-white">
        <div className="container mx-auto px-4">
          <SectionReveal>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6 text-white">Profesionáli s vášňou pre zdravie a fitness</h2>
              <p className="text-lg mb-8 text-gray-300">
                Náš tím tvoria kvalifikovaní odborníci s bohatými skúsenosťami v oblasti fitness tréningu, fyzioterapie a výživového poradenstva. Všetci členovia nášho tímu zdieľajú spoločnú vášeň pre pomoc ľuďom zlepšiť ich zdravie, kondíciu a kvalitu života.
              </p>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Owners Section */}
      <section className="py-16 bg-black text-white">
        <div className="container mx-auto px-4">
          <SectionReveal>
            <h2 className="text-3xl font-bold mb-12 text-center text-white">Zakladatelia</h2>
          </SectionReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {owners.map((owner, index) => (
              <SectionReveal key={index} direction={index % 2 === 0 ? "left" : "right"} delay={0.1 * index}>
                <TeamMember {...owner} />
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Trainers Section */}
      <section className="py-16 bg-black text-white">
        <div className="container mx-auto px-4">
          <SectionReveal>
            <h2 className="text-3xl font-bold mb-12 text-center text-white">Fitness tréneri</h2>
          </SectionReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {trainers.map((trainer, index) => (
              <SectionReveal key={index} direction="up" delay={0.1 * index}>
                <TeamMember {...trainer} />
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Physiotherapists Section */}
      <section className="py-16 bg-black text-white">
        <div className="container mx-auto px-4">
          <SectionReveal>
            <h2 className="text-3xl font-bold mb-12 text-center text-white">Fyzioterapia</h2>
          </SectionReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="md:col-start-2">
              {physiotherapists.map((physio, index) => (
                <SectionReveal key={index} direction="up" delay={0.1 * index}>
                  <TeamMember {...physio} />
                </SectionReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Join Us Section */}
      <section className="py-16 bg-black text-white">
        <div className="container mx-auto px-4">
          <SectionReveal>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6 text-white">Staňte sa súčasťou nášho tímu</h2>
              <p className="text-lg mb-8 text-gray-300">
                Hľadáme talentovaných a motivovaných profesionálov, ktorí zdieľajú našu vášeň pre fitness a zdravý životný štýl. Ak máte záujem pripojiť sa k nášmu tímu, pošlite nám svoj životopis.
              </p>
              <Button asChild className="bg-red-600 hover:bg-red-700 text-white">
                <Link href="/kontakt">Kontaktujte nás</Link>
              </Button>
            </div>
          </SectionReveal>
        </div>
      </section>
    </main>
  );
}
