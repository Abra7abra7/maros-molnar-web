import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import SectionReveal from "@/components/animations/section-reveal";
import ParallaxEffect from "@/components/animations/parallax-effect";
import ScrollProgress from "@/components/ui/scroll-progress";

export const metadata: Metadata = {
  title: "Profesionálni športovci | Maros Molnár",
  description: "Spolupráca s vrcholovými športovcami z NHL, profesionálnymi futbalistami, tenistami a ďalšími športovcami.",
};

export default function ProfessionalAthletesPage() {
  return (
    <main className="pt-16">
      <ScrollProgress showPercentage />
      
      {/* Hero Section */}
      <section className="relative bg-black text-white py-20 md:py-32">
        <div className="absolute inset-0 z-0 opacity-30">
          <Image
            src="/images/pro-athletes-hero.jpg"
            alt="Profesionálni športovci"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <SectionReveal>
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
                Profesionálni športovci
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-300">
                Spolupráca s vrcholovými športovcami z NHL, profesionálnymi futbalistami, tenistami a ďalšími elitami športového sveta.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild className="bg-red-600 hover:bg-red-700 text-white">
                  <Link href="/kontakt">Kontaktujte ma</Link>
                </Button>
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-black text-white">
        <div className="container mx-auto px-4">
          <SectionReveal>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6 text-white">Spolupráca s elitou</h2>
              <p className="text-lg mb-8 text-gray-300">
                Ako certifikovaný fitness tréner a fyzioterapeut s dlhoročnými skúsenosťami mám tú česť spolupracovať s profesionálnymi športovcami z rôznych disciplín. Moja práca zahŕňa komplexnú starostlivosť o ich fyzickú kondíciu, prevenciu zranení a rehabilitáciu.
              </p>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Sports Categories */}
      <section className="py-16 bg-black text-white">
        <div className="container mx-auto px-4">
          <SectionReveal>
            <h2 className="text-3xl font-bold mb-12 text-center text-white">Športové kategórie</h2>
          </SectionReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* Hockey */}
            <SectionReveal direction="left">
              <div className="relative">
                <div className="aspect-video rounded-lg overflow-hidden mb-6">
                  <Image
                    src="/images/hockey-athletes.jpg"
                    alt="Hokejisti"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">Hokej (NHL)</h3>
                <p className="text-gray-300 mb-6">
                  Spolupracujem s hokejistami z NHL a európskych líg na zlepšení ich výkonu, rýchlosti a sily. Hokej vyžaduje špecifickú kombináciu explozívnej sily, vytrvalosti a flexibility, ktorú pomáham športovcom rozvíjať prostredníctvom špecializovaných tréningových programov.
                </p>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    <p>Tréning explozívnej sily a rýchlosti</p>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    <p>Prevencia zranení špecifických pre hokej</p>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    <p>Rehabilitácia po zraneniach ramien, kolien a bedier</p>
                  </li>
                </ul>
              </div>
            </SectionReveal>
            
            {/* Football */}
            <SectionReveal direction="right">
              <div className="relative">
                <div className="aspect-video rounded-lg overflow-hidden mb-6">
                  <Image
                    src="/images/football-athletes.jpg"
                    alt="Futbalisti"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">Futbal</h3>
                <p className="text-gray-300 mb-6">
                  S profesionálnymi futbalistami pracujem na zlepšení ich vytrvalosti, agility a sily dolných končatín. Futbal vyžaduje komplexnú fyzickú pripravenosť a schopnosť rýchlej regenerácie, čo sú oblasti, na ktoré sa v tréningových programoch zameriavam.
                </p>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    <p>Rozvoj vytrvalosti a agility</p>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    <p>Posilňovanie dolných končatín a core</p>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    <p>Prevencia a rehabilitácia zranení kolien a členkov</p>
                  </li>
                </ul>
              </div>
            </SectionReveal>
            
            {/* Tennis */}
            <SectionReveal direction="left">
              <div className="relative">
                <div className="aspect-video rounded-lg overflow-hidden mb-6">
                  <Image
                    src="/images/tennis-athletes.jpg"
                    alt="Tenisti"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">Tenis</h3>
                <p className="text-gray-300 mb-6">
                  Tenisti potrebujú špecifickú kombináciu výbušnosti, vytrvalosti a stability. Moje tréningové programy pre profesionálnych tenistov sa zameriavajú na rozvoj rotačnej sily, stabilitu ramien a prevenciu zranení, ktoré sú v tenise časté.
                </p>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    <p>Rozvoj rotačnej sily a stability</p>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    <p>Prevencia zranení ramien a lakťov</p>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    <p>Tréning výbušnosti a rýchlych zmien smeru</p>
                  </li>
                </ul>
              </div>
            </SectionReveal>
            
            {/* Basketball/Volleyball */}
            <SectionReveal direction="right">
              <div className="relative">
                <div className="aspect-video rounded-lg overflow-hidden mb-6">
                  <Image
                    src="/images/basketball-athletes.jpg"
                    alt="Basketbalisti a volejbalisti"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">Basketbal a volejbal</h3>
                <p className="text-gray-300 mb-6">
                  Basketbalisti a volejbalisti potrebujú výnimočnú vertikálnu výbušnosť, stabilitu a koordináciu. Moje tréningové programy sa zameriavajú na rozvoj výskoku, sily hornej časti tela a prevenciu zranení typických pre tieto športy.
                </p>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    <p>Tréning vertikálneho výskoku a výbušnosti</p>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    <p>Stabilizácia ramien a prevencia zranení</p>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    <p>Rozvoj koordinácie a rovnováhy</p>
                  </li>
                </ul>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-black text-white">
        <div className="container mx-auto px-4">
          <SectionReveal>
            <h2 className="text-3xl font-bold mb-12 text-center text-white">Služby pre profesionálnych športovcov</h2>
          </SectionReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <SectionReveal direction="up" delay={0.1}>
              <div className="bg-gray-900 p-8 rounded-lg h-full">
                <h3 className="text-xl font-bold mb-4 text-white">Výkonnostný tréning</h3>
                <p className="text-gray-300 mb-6">
                  Individuálne navrhnuté tréningové programy zamerané na zlepšenie špecifických aspektov výkonu relevantných pre daný šport. Využívam najnovšie metódy a technológie na monitorovanie a optimalizáciu tréningu.
                </p>
                <p className="text-xl font-bold text-red-600">od 80€ / hodina</p>
              </div>
            </SectionReveal>
            
            <SectionReveal direction="up" delay={0.2}>
              <div className="bg-gray-900 p-8 rounded-lg h-full">
                <h3 className="text-xl font-bold mb-4 text-white">Prevencia zranení</h3>
                <p className="text-gray-300 mb-6">
                  Komplexné programy zamerané na identifikáciu a nápravu svalových dysbalancií, zlepšenie mobility a stability kĺbov, a posilnenie oblastí náchylných na zranenia v danom športe.
                </p>
                <p className="text-xl font-bold text-red-600">od 70€ / hodina</p>
              </div>
            </SectionReveal>
            
            <SectionReveal direction="up" delay={0.3}>
              <div className="bg-gray-900 p-8 rounded-lg h-full">
                <h3 className="text-xl font-bold mb-4 text-white">Športová rehabilitácia</h3>
                <p className="text-gray-300 mb-6">
                  Špecializovaná rehabilitácia po zraneniach zameraná na rýchly a bezpečný návrat k športovej aktivite. Kombinácia manuálnych techník, cvičení a moderných rehabilitačných metód.
                </p>
                <p className="text-xl font-bold text-red-600">od 75€ / hodina</p>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-black text-white">
        <div className="container mx-auto px-4">
          <SectionReveal>
            <h2 className="text-3xl font-bold mb-12 text-center text-white">Čo hovoria športovci</h2>
          </SectionReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <SectionReveal direction="up" delay={0.1}>
              <div className="bg-gray-900 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                    <Image
                      src="/images/athlete-1.jpg"
                      alt="Športovec"
                      width={48}
                      height={48}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">Tomáš K.</h3>
                    <p className="text-sm text-gray-400">NHL hokejista</p>
                  </div>
                </div>
                <p className="text-gray-300 italic">
                  "Maroš mi pomohol zotaviť sa po vážnom zranení ramena, ktoré ohrozovalo moju kariéru. Jeho prístup k rehabilitácii a následnej kondičnej príprave bol kľúčový pre môj návrat na ľad. Teraz som silnejší a výkonnejší než predtým."
                </p>
              </div>
            </SectionReveal>
            
            <SectionReveal direction="up" delay={0.2}>
              <div className="bg-gray-900 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                    <Image
                      src="/images/athlete-2.jpg"
                      alt="Športovec"
                      width={48}
                      height={48}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">Martin S.</h3>
                    <p className="text-sm text-gray-400">Profesionálny futbalista</p>
                  </div>
                </div>
                <p className="text-gray-300 italic">
                  "Spolupráca s Marošom mi pomohla výrazne zlepšiť moju výbušnosť a vytrvalosť. Jeho tréningové metódy sú inovatívne a prispôsobené presne mojim potrebám. Oceňujem jeho profesionalitu a komplexný prístup k tréningu."
                </p>
              </div>
            </SectionReveal>
            
            <SectionReveal direction="up" delay={0.3}>
              <div className="bg-gray-900 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                    <Image
                      src="/images/athlete-3.jpg"
                      alt="Športovec"
                      width={48}
                      height={48}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">Lucia M.</h3>
                    <p className="text-sm text-gray-400">Profesionálna tenistka</p>
                  </div>
                </div>
                <p className="text-gray-300 italic">
                  "Maroš mi pomohol vyriešiť chronické problémy s lakťom, ktoré ma trápili roky. Jeho kombinácia fyzioterapie a cieleného posilňovania mi umožnila hrať bez bolesti a zlepšiť môj výkon na kurte. Odporúčam ho každému športovcovi."
                </p>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-black text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-white">Často kladené otázky</h2>
          
          <div className="max-w-3xl mx-auto space-y-8">
            <div>
              <h3 className="text-xl font-bold mb-2 text-white">Ako prebieha prvé stretnutie?</h3>
              <p className="text-gray-300">
                Prvé stretnutie zahŕňa komplexné zhodnotenie vašej fyzickej kondície, identifikáciu silných a slabých stránok, diskusiu o vašich cieľoch a špecifických požiadavkách vášho športu. Na základe tohto hodnotenia vytvoríme individuálny tréningový plán.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-2 text-white">Pracujete aj so športovcami mimo Slovenska?</h3>
              <p className="text-gray-300">
                Áno, spolupracujem so športovcami z rôznych krajín. V závislosti od vašich potrieb môžeme dohodnúť osobné konzultácie, online tréningy alebo kombináciu oboch prístupov.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-2 text-white">Ako dlho trvá rehabilitácia po športovom zranení?</h3>
              <p className="text-gray-300">
                Dĺžka rehabilitácie závisí od typu a závažnosti zranenia. Vytváram individuálne rehabilitačné plány s cieľom umožniť bezpečný návrat k športu v čo najkratšom čase, bez kompromisov v oblasti zdravia a prevencie opakovaného zranenia.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-2 text-white">Ponúkate aj služby pre športové tímy?</h3>
              <p className="text-gray-300">
                Áno, poskytujem služby aj pre športové tímy vrátane skupinových tréningov, workshopov o prevencii zranení a individuálnych konzultácií pre členov tímu. Kontaktujte ma pre vytvorenie ponuky šitej na mieru potrebám vášho tímu.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-black text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6 text-white">Posúvajte svoje limity</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-300">
            Či už ste profesionálny športovec hľadajúci zlepšenie výkonu, alebo sa zotavujete po zranení, som tu, aby som vám pomohol dosiahnuť vaše ciele.
          </p>
          <Button asChild className="bg-red-600 hover:bg-red-700 text-white">
            <Link href="/kontakt">Kontaktujte ma</Link>
          </Button>
        </div>
      </section>
    </main>
  );
}
