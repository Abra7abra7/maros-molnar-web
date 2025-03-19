import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Extrémne Premeny | Maros Molnár",
  description: "Príbehy úspešných klientov, ktorí dosiahli výrazné zmeny v ich fyzickej kondícii a zdraví vďaka spolupráci s Marošom Molnárom.",
};

export default function ExtremnePremenPage() {
  return (
    <main className="pt-16">
      {/* Hero Section */}
      <section className="relative bg-black text-white py-20 md:py-32">
        <div className="absolute inset-0 z-0 opacity-30 overflow-hidden">
          <div className="relative w-full h-[130%] -mt-20">
            <Image
              src="/images/transformation-hero.jpg"
              alt="Extrémne premeny"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
              Extrémne Premeny
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-300">
              Inšpiratívne príbehy ľudí, ktorí zmenili svoj život a dosiahli výnimočné výsledky v chudnutí a zlepšení zdravia.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild className="bg-red-600 hover:bg-red-700 text-white">
                <Link href="/kontakt">Začať svoju premenu</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-black text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-white">Skutočné príbehy, skutočné výsledky</h2>
            <p className="text-lg mb-8 text-gray-300">
              Každá z týchto premien je výsledkom tvrdej práce, odhodlania a profesionálneho vedenia. Tieto príbehy dokazujú, že s tým správnym prístupom a podporou je možné dosiahnuť aj tie najambicióznejšie ciele.
            </p>
          </div>
        </div>
      </section>

      {/* Transformation Stories */}
      <section className="py-16 bg-black text-white">
        <div className="container mx-auto px-4">
          {/* Story 1 */}
          <div className="mb-24">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="relative rounded-lg overflow-hidden">
                <Image
                  src="/images/pred-po-1.jpeg"
                  alt="Michal - pred a po"
                  width={800}
                  height={600}
                  className="w-full h-auto object-contain"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4 text-white">Michal, -35 kg za 10 mesiacov</h3>
                <p className="text-gray-300 mb-6">
                  "Celý život som bojoval s nadváhou, ale nikdy som nemal dostatok motivácie a správne vedenia. Keď som stretol Maroša, všetko sa zmenilo. Jeho individuálny prístup, odborné znalosti a neustála podpora mi pomohli nielen schudnúť, ale aj zmeniť svoj životný štýl. Dnes sa cítim zdravší, silnejší a plný energie."
                </p>
                <div className="space-y-4 text-gray-300">
                  <div className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    <p>Začiatočná váha: 115 kg</p>
                  </div>
                  <div className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    <p>Súčasná váha: 80 kg</p>
                  </div>
                  <div className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    <p>Kľúčové faktory: Pravidelný tréning 3x týždenne, úprava stravy, postupné budovanie zdravých návykov</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Story 2 */}
          <div className="mb-24">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center md:flex-row-reverse">
              <div className="md:order-2 relative rounded-lg overflow-hidden">
                <Image
                  src="/images/pred-po-2.jpeg"
                  alt="Jana - pred a po"
                  width={800}
                  height={600}
                  className="w-full h-auto object-contain"
                />
              </div>
              <div className="md:order-1">
                <h3 className="text-2xl font-bold mb-4 text-white">Jana, -28 kg za 8 mesiacov</h3>
                <p className="text-gray-300 mb-6">
                  "Po druhom tehotenstve som sa nevedela zbaviť nadbytočných kilogramov. Vyskúšala som rôzne diéty, ale výsledky boli len dočasné. Maroš mi pomohol pochopiť, že nejde len o chudnutie, ale o celkovú zmenu životného štýlu. Naučil ma, ako sa správne stravovať a cvičiť tak, aby som dosiahla trvalé výsledky. Dnes sa cítim sebavedomejšie a mám oveľa viac energie na moje deti."
                </p>
                <div className="space-y-4 text-gray-300">
                  <div className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    <p>Začiatočná váha: 92 kg</p>
                  </div>
                  <div className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    <p>Súčasná váha: 64 kg</p>
                  </div>
                  <div className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    <p>Kľúčové faktory: Kombinácia silového a kardio tréningu, vyvážená strava, pravidelný spánkový režim</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Story 3 */}
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="relative rounded-lg overflow-hidden">
                <Image
                  src="/images/pred-po-3.jpeg"
                  alt="Peter - pred a po"
                  width={800}
                  height={600}
                  className="w-full h-auto object-contain"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4 text-white">Peter, -42 kg za 14 mesiacov</h3>
                <p className="text-gray-300 mb-6">
                  "Moja práca v IT sektore znamenala sedavý životný štýl a nezdravé stravovacie návyky. S váhou 130 kg som mal zdravotné problémy a nízku sebadôveru. Maroš mi vytvoril tréningový a stravovací plán, ktorý som dokázal dodržiavať aj popri náročnej práci. Jeho prístup bol profesionálny, ale zároveň ľudský. Pochopil moje obmedzenia a pomohol mi prekonať všetky prekážky. Dnes mám 88 kg, žiadne zdravotné problémy a konečne sa cítim dobre vo svojom tele."
                </p>
                <div className="space-y-4 text-gray-300">
                  <div className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    <p>Začiatočná váha: 130 kg</p>
                  </div>
                  <div className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    <p>Súčasná váha: 88 kg</p>
                  </div>
                  <div className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    <p>Kľúčové faktory: Postupné zvyšovanie fyzickej aktivity, eliminácia spracovaných potravín, pravidelné konzultácie</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="py-16 bg-black text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center text-white">Môj prístup k extrémnym premenám</h2>
            
            <div className="space-y-8">
              <div className="bg-black p-6 rounded-lg border border-gray-800">
                <h3 className="text-xl font-bold mb-4 text-white">1. Individuálny prístup</h3>
                <p className="text-gray-300">
                  Každý človek je jedinečný, preto vytváram tréningové a stravovacie plány na mieru podľa vašich potrieb, možností a cieľov. Neexistuje univerzálny recept na úspech - to, čo funguje pre jedného, nemusí fungovať pre druhého.
                </p>
              </div>
              
              <div className="bg-black p-6 rounded-lg border border-gray-800">
                <h3 className="text-xl font-bold mb-4 text-white">2. Postupné zmeny</h3>
                <p className="text-gray-300">
                  Verím v postupné a udržateľné zmeny. Radikálne diéty a extrémne tréningy môžu priniesť rýchle výsledky, ale tie sú často dočasné a môžu poškodiť vaše zdravie. Mojím cieľom je pomôcť vám vybudovať zdravé návyky, ktoré vydržia celý život.
                </p>
              </div>
              
              <div className="bg-black p-6 rounded-lg border border-gray-800">
                <h3 className="text-xl font-bold mb-4 text-white">3. Komplexný prístup</h3>
                <p className="text-gray-300">
                  Skutočná transformácia zahŕňa viac než len cvičenie a diétu. Pracujeme aj na vašom spánkovom režime, manažmente stresu a celkovom životnom štýle. Len komplexný prístup prinesie trvalé výsledky.
                </p>
              </div>
              
              <div className="bg-black p-6 rounded-lg border border-gray-800">
                <h3 className="text-xl font-bold mb-4 text-white">4. Neustála podpora</h3>
                <p className="text-gray-300">
                  Na ceste za vašou premenou nie ste sami. Poskytujem pravidelnú podporu, motiváciu a poradenstvo. Spoločne prekonáme všetky prekážky a dosiahneme vaše ciele.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-black text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-white">Často kladené otázky</h2>
          
          <div className="max-w-3xl mx-auto space-y-8">
            <div>
              <h3 className="text-xl font-bold mb-2 text-white">Ako rýchlo môžem očakávať výsledky?</h3>
              <p className="text-gray-300">
                Rýchlosť výsledkov závisí od mnohých faktorov vrátane vašej východiskovej váhy, metabolizmu, genetiky a toho, ako dôsledne dodržiavate tréningový a stravovací plán. Väčšina klientov začína vidieť prvé výsledky po 2-4 týždňoch, výraznejšie zmeny prichádzajú po 2-3 mesiacoch.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-2 text-white">Budem musieť držať prísnu diétu?</h3>
              <p className="text-gray-300">
                Nejde o "diétu" v tradičnom zmysle, ale o zmenu stravovacích návykov. Naučím vás, ako sa stravovať zdravo a vyvážene bez pocitu obmedzenia. Plán bude zahŕňať aj vaše obľúbené jedlá, len v upravenej forme a množstve.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-2 text-white">Čo ak mám zdravotné obmedzenia?</h3>
              <p className="text-gray-300">
                Pred začatím programu je dôležité konzultovať svoj zdravotný stav s lekárom. Následne prispôsobím tréningový a stravovací plán vašim zdravotným obmedzeniam. Bezpečnosť a zdravie sú vždy na prvom mieste.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-2 text-white">Ako často budem musieť cvičiť?</h3>
              <p className="text-gray-300">
                Optimálna frekvencia tréningov je 3-4x týždenne, ale začneme na úrovni, ktorá je pre vás zvládnuteľná. Postupne budeme intenzitu a frekvenciu zvyšovať. Dôležitá je konzistencia, nie extrémna intenzita.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-black text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6 text-white">Pripravený na svoju vlastnú premenu?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-300">
            Nezáleží na tom, koľko kilogramov potrebujete zhodiť alebo aké prekážky ste doteraz mali. Spoločne môžeme dosiahnuť váš cieľ.
          </p>
          <Button asChild className="bg-red-600 hover:bg-red-700 text-white">
            <Link href="/kontakt">Kontaktujte ma</Link>
          </Button>
        </div>
      </section>
    </main>
  );
}
