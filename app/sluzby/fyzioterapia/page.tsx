import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { services } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Fyzioterapia",
  description: "Odborná fyzioterapia a rehabilitácia pre liečbu zranení a zlepšenie pohyblivosti.",
};

export default function PhysioPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-24 bg-black text-white">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: "url('/images/services/physiotherapy-1.jpg')" }}
        />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{services.physio.title}</h1>
            <p className="text-xl text-gray-300">
              {services.physio.description}
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-black text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-white">Moje služby</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.physio.features.map((feature, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300 bg-gray-800 border-gray-700 text-white">
                <CardHeader>
                  <CardTitle>{feature.title}</CardTitle>
                  <CardDescription className="text-gray-300">{feature.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold text-red-600">{feature.price}</p>
                </CardContent>
                <CardFooter>
                  <Link href="/kontakt" className="w-full">
                    <Button variant="red" className="w-full">
                      Mám záujem
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-16 bg-black text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/services/physiotherapy-2.jpg"
                alt="Fyzioterapia"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6 text-white">Môj prístup k fyzioterapii</h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  Môj prístup k fyzioterapii je založený na dôkladnej diagnostike a individuálnom prístupe ku každému pacientovi. Verím, že každý človek je jedinečný a vyžaduje personalizovanú liečbu.
                </p>
                <p>
                  Pred začiatkom terapie vykonávam komplexné vyšetrenie, ktoré zahŕňa analýzu držania tela, rozsahu pohybu, svalovej sily a ďalších faktorov. Na základe týchto informácií vytvorím liečebný plán, ktorý je prispôsobený vašim potrebám.
                </p>
                <p>
                  Počas terapie kombinujem rôzne techniky, vrátane manuálnej terapie, cvičení a edukácie pacienta, aby som dosiahol najlepšie výsledky.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specializations Section */}
      <section className="py-16 bg-black text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-white">Moje špecializácie</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Liečba bolesti chrbta",
                description: "Špecializujem sa na diagnostiku a liečbu bolestí chrbta, vrátane problémov s platničkami, svalovou dysbalanciou a poruchami držania tela."
              },
              {
                title: "Športová rehabilitácia",
                description: "Pomáham športovcom po zraneniach vrátiť sa späť k ich aktivitám. Zameriavam sa na obnovu funkcie, sily a prevenciu opakovaných zranení."
              },
              {
                title: "Manuálna terapia",
                description: "Využívam rôzne techniky manuálnej terapie na uvoľnenie svalového napätia, zlepšenie kĺbovej pohyblivosti a zmiernenie bolesti."
              },
              {
                title: "Pooperačná rehabilitácia",
                description: "Pomáham klientom po operáciách pohybového aparátu obnoviť funkciu, silu a pohyblivosť prostredníctvom cielenej rehabilitácie."
              },
              {
                title: "Neurologická rehabilitácia",
                description: "Pracujem s klientmi s neurologickými problémami na zlepšení ich pohybových schopností, koordinácie a celkovej kvality života."
              },
              {
                title: "Prevencia zranení",
                description: "Navrhujem preventívne programy na predchádzanie zraneniam, najmä pre športovcov a ľudí s náročným povolaním."
              }
            ].map((condition, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-700">
                <h3 className="text-xl font-bold mb-3 text-white">{condition.title}</h3>
                <p className="text-gray-300">{condition.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-black text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-white">Ako prebieha terapia</h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline */}
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-red-600 transform md:translate-x-px"></div>
              
              {/* Steps */}
              <div className="space-y-12">
                {/* Step 1 */}
                <div className="relative grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                  <div className="md:text-right md:pr-12 pl-12 md:pl-0 relative">
                    <div className="hidden md:block absolute right-0 top-5 w-4 h-4 rounded-full bg-red-600 transform translate-x-2 border-2 border-red-700"></div>
                    <div className="md:hidden absolute left-0 top-5 w-4 h-4 rounded-full bg-red-600 transform -translate-x-2 border-2 border-red-700"></div>
                    <h3 className="text-xl font-bold mb-2 text-white">1. Úvodná konzultácia</h3>
                    <p className="text-gray-300">
                      Počas prvého stretnutia sa zoznámime s vašimi problémami, zdravotnou históriou a očakávaniami. Vykonám komplexné vyšetrenie na identifikáciu príčin vašich ťažkostí.
                    </p>
                  </div>
                  <div className="hidden md:block"></div>
                </div>
                
                {/* Step 2 */}
                <div className="relative grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                  <div className="hidden md:block"></div>
                  <div className="md:pl-12 pl-12 relative">
                    <div className="hidden md:block absolute left-0 top-5 w-4 h-4 rounded-full bg-red-600 transform -translate-x-2 border-2 border-red-700"></div>
                    <div className="md:hidden absolute left-0 top-5 w-4 h-4 rounded-full bg-red-600 transform -translate-x-2 border-2 border-red-700"></div>
                    <h3 className="text-xl font-bold mb-2 text-white">2. Stanovenie plánu</h3>
                    <p className="text-gray-300">
                      Na základe výsledkov vyšetrenia vytvorím individuálny rehabilitačný plán, ktorý zahŕňa manuálne techniky, cvičenia a odporúčania pre domácu starostlivosť.
                    </p>
                  </div>
                </div>
                
                {/* Step 3 */}
                <div className="relative grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                  <div className="md:text-right md:pr-12 pl-12 md:pl-0 relative">
                    <div className="hidden md:block absolute right-0 top-5 w-4 h-4 rounded-full bg-red-600 transform translate-x-2 border-2 border-red-700"></div>
                    <div className="md:hidden absolute left-0 top-5 w-4 h-4 rounded-full bg-red-600 transform -translate-x-2 border-2 border-red-700"></div>
                    <h3 className="text-xl font-bold mb-2 text-white">3. Terapeutické sedenia</h3>
                    <p className="text-gray-300">
                      Počas terapeutických sedení využívam rôzne techniky na zmiernenie vašich ťažkostí a zlepšenie funkcie. Každé sedenie je prispôsobené vašim aktuálnym potrebám a pokroku.
                    </p>
                  </div>
                  <div className="hidden md:block"></div>
                </div>
                
                {/* Step 4 */}
                <div className="relative grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                  <div className="hidden md:block"></div>
                  <div className="md:pl-12 pl-12 relative">
                    <div className="hidden md:block absolute left-0 top-5 w-4 h-4 rounded-full bg-red-600 transform -translate-x-2 border-2 border-red-700"></div>
                    <div className="md:hidden absolute left-0 top-5 w-4 h-4 rounded-full bg-red-600 transform -translate-x-2 border-2 border-red-700"></div>
                    <h3 className="text-xl font-bold mb-2 text-white">4. Domáce cvičenia</h3>
                    <p className="text-gray-300">
                      Dôležitou súčasťou terapie sú domáce cvičenia, ktoré vám pomôžu udržať a zlepšiť výsledky dosiahnuté počas terapeutických sedení. Poskytujem jasné inštrukcie a demonštrácie cvikov.
                    </p>
                  </div>
                </div>
                
                {/* Step 5 */}
                <div className="relative grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                  <div className="md:text-right md:pr-12 pl-12 md:pl-0 relative">
                    <div className="hidden md:block absolute right-0 top-5 w-4 h-4 rounded-full bg-red-600 transform translate-x-2 border-2 border-red-700"></div>
                    <div className="md:hidden absolute left-0 top-5 w-4 h-4 rounded-full bg-red-600 transform -translate-x-2 border-2 border-red-700"></div>
                    <h3 className="text-xl font-bold mb-2 text-white">5. Sledovanie pokroku</h3>
                    <p className="text-gray-300">
                      Pravidelne hodnotíme váš pokrok a podľa potreby upravujeme terapeutický plán. Cieľom je nielen zbaviť vás aktuálnych ťažkostí, ale aj predchádzať ich návratu v budúcnosti.
                    </p>
                  </div>
                  <div className="hidden md:block"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-black text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6 text-white">Potrebujete fyzioterapiu?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-300">
            Neodkladajte riešenie vašich zdravotných problémov. Kontaktujte ma a spoločne nájdeme cestu k vášmu zotaveniu a lepšej kvalite života.
          </p>
          <Link href="/kontakt">
            <Button variant="red" size="lg">
              Objednať konzultáciu
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
}
