import Image from "next/image";
import Hero from "@/components/sections/hero";
import AboutSection from "@/components/sections/about-section";
import ServicesOverview from "@/components/sections/services-overview";
import Testimonials from "@/components/sections/testimonials";
import { Dumbbell, Activity } from "lucide-react";

export default function Home() {
  return (
    <>
      <Hero 
        title="Maros Molnár"
        subtitle="Profesionálny fitness tréner a fyzioterapeut, ktorý vám pomôže dosiahnuť vaše ciele a zlepšiť kvalitu života."
        ctaText="Objednať konzultáciu"
        ctaLink="/kontakt"
      />
      
      <AboutSection 
        title="O mne"
        description="Som Maros Molnár, profesionálny fitness tréner a fyzioterapeut s viac ako 10-ročnými skúsenosťami v oblasti športu a rehabilitácie. Mojím cieľom je pomôcť vám dosiahnuť optimálnu fyzickú kondíciu a zdravie prostredníctvom individuálneho prístupu a odborných znalostí.\n\nŠpecializujem sa na funkčný tréning, rehabilitáciu po zraneniach a dlhodobé zlepšenie fyzickej kondície. Verím, že každý človek je jedinečný a preto vyžaduje individuálny prístup k tréningu a rehabilitácii."
        imageSrc="/images/maros-profil.jpg"
        ctaText="Viac o mne"
        ctaLink="/o-mne"
      />
      
      <ServicesOverview 
        title="Moje služby"
        description="Ponúkam komplexné služby v oblasti fitness tréningu a fyzioterapie, prispôsobené vašim individuálnym potrebám a cieľom."
        services={[
          {
            title: "Fitness Tréning",
            description: "Individuálne tréningové plány a osobný tréning pre dosiahnutie vašich fitness cieľov.",
            icon: <Dumbbell className="h-12 w-12" />,
            link: "/sluzby/fitness"
          },
          {
            title: "Fyzioterapia",
            description: "Odborná fyzioterapia a rehabilitácia pre liečbu zranení a zlepšenie pohyblivosti.",
            icon: <Activity className="h-12 w-12" />,
            link: "/sluzby/fyzioterapia"
          }
        ]}
      />
      
      <Testimonials />
    </>
  );
}
