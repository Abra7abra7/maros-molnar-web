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
          style={{ backgroundImage: "url('/images/physio-bg.jpg')" }}
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
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Moje služby</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.physio.features.map((feature, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <CardTitle>{feature.title}</CardTitle>
                  <CardDescription>{feature.description}</CardDescription>
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
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl font-bold mb-6">Môj prístup k fyzioterapii</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  Ako fyzioterapeut sa zameriavam na komplexnú diagnostiku a liečbu pohybového aparátu. Každého klienta vnímam ako jedinečnú osobnosť s individuálnymi potrebami a problémami.
                </p>
                <p>
                  Pri prvom stretnutí vykonám dôkladné vyšetrenie, ktoré zahŕňa analýzu držania tela, pohybových stereotypov a funkčných testov. Na základe výsledkov vytvorím individuálny rehabilitačný plán.
                </p>
                <p>
                  Využívam kombináciu manuálnych techník, cvičení a edukácie pacienta. Mojím cieľom nie je len odstrániť aktuálne ťažkosti, ale aj identifikovať a riešiť ich príčinu, aby sa problémy neopakovali.
                </p>
              </div>
            </div>
            
            <div className="relative h-[500px] rounded-lg overflow-hidden shadow-xl order-1 md:order-2">
              <Image
                src="/images/physio-approach.jpg"
                alt="Fyzioterapia"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Specializations Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Moje špecializácie</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-bold mb-4 text-red-600">Liečba bolesti chrbta</h3>
              <p className="text-gray-700">
                Špecializujem sa na diagnostiku a liečbu bolestí chrbta, vrátane problémov s platničkami, svalovou dysbalanciou a poruchami držania tela.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-bold mb-4 text-red-600">Športová rehabilitácia</h3>
              <p className="text-gray-700">
                Pomáham športovcom po zraneniach vrátiť sa späť k ich aktivitám. Zameriavam sa na obnovu funkcie, sily a prevenciu opakovaných zranení.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-bold mb-4 text-red-600">Manuálna terapia</h3>
              <p className="text-gray-700">
                Využívam rôzne techniky manuálnej terapie na uvoľnenie svalového napätia, zlepšenie kĺbovej pohyblivosti a zmiernenie bolesti.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-bold mb-4 text-red-600">Pooperačná rehabilitácia</h3>
              <p className="text-gray-700">
                Pomáham klientom po operáciách pohybového aparátu obnoviť funkciu, silu a pohyblivosť prostredníctvom cielenej rehabilitácie.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-bold mb-4 text-red-600">Neurologická rehabilitácia</h3>
              <p className="text-gray-700">
                Pracujem s klientmi s neurologickými problémami na zlepšení ich pohybových schopností, koordinácie a celkovej kvality života.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-bold mb-4 text-red-600">Prevencia zranení</h3>
              <p className="text-gray-700">
                Navrhujem preventívne programy na predchádzanie zraneniam, najmä pre športovcov a ľudí s náročným povolaním.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Ako prebieha terapia</h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline */}
              <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-red-600 transform md:translate-x-px"></div>
              
              {/* Steps */}
              <div className="space-y-12">
                <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                  <div className="md:text-right md:pr-12">
                    <div className="hidden md:block absolute right-0 top-5 w-3 h-3 rounded-full bg-red-600 transform translate-x-1.5"></div>
                    <h3 className="text-xl font-bold mb-2">1. Úvodná konzultácia</h3>
                    <p className="text-gray-700">
                      Počas prvého stretnutia sa zoznámime s vašimi problémami, zdravotnou históriou a očakávaniami. Vykonám komplexné vyšetrenie na identifikáciu príčin vašich ťažkostí.
                    </p>
                  </div>
                  <div className="md:hidden w-3 h-3 rounded-full bg-red-600 absolute left-0 top-5"></div>
                  <div></div>
                </div>
                
                <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                  <div className="md:hidden"></div>
                  <div className="md:pl-12">
                    <div className="hidden md:block absolute left-0 top-5 w-3 h-3 rounded-full bg-red-600 transform -translate-x-1.5"></div>
                    <h3 className="text-xl font-bold mb-2">2. Stanovenie plánu</h3>
                    <p className="text-gray-700">
                      Na základe výsledkov vyšetrenia vytvorím individuálny rehabilitačný plán, ktorý zahŕňa manuálne techniky, cvičenia a odporúčania pre domácu starostlivosť.
                    </p>
                  </div>
                  <div className="md:hidden w-3 h-3 rounded-full bg-red-600 absolute left-0 top-5"></div>
                </div>
                
                <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                  <div className="md:text-right md:pr-12">
                    <div className="hidden md:block absolute right-0 top-5 w-3 h-3 rounded-full bg-red-600 transform translate-x-1.5"></div>
                    <h3 className="text-xl font-bold mb-2">3. Terapeutické sedenia</h3>
                    <p className="text-gray-700">
                      Počas terapeutických sedení využívam rôzne techniky na zmiernenie vašich ťažkostí a zlepšenie funkcie. Každé sedenie je prispôsobené vašim aktuálnym potrebám a pokroku.
                    </p>
                  </div>
                  <div className="md:hidden w-3 h-3 rounded-full bg-red-600 absolute left-0 top-5"></div>
                  <div></div>
                </div>
                
                <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                  <div className="md:hidden"></div>
                  <div className="md:pl-12">
                    <div className="hidden md:block absolute left-0 top-5 w-3 h-3 rounded-full bg-red-600 transform -translate-x-1.5"></div>
                    <h3 className="text-xl font-bold mb-2">4. Domáce cvičenia</h3>
                    <p className="text-gray-700">
                      Dôležitou súčasťou terapie sú domáce cvičenia, ktoré vám pomôžu udržať a zlepšiť výsledky dosiahnuté počas terapeutických sedení. Poskytujem jasné inštrukcie a demonštrácie cvikov.
                    </p>
                  </div>
                  <div className="md:hidden w-3 h-3 rounded-full bg-red-600 absolute left-0 top-5"></div>
                </div>
                
                <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                  <div className="md:text-right md:pr-12">
                    <div className="hidden md:block absolute right-0 top-5 w-3 h-3 rounded-full bg-red-600 transform translate-x-1.5"></div>
                    <h3 className="text-xl font-bold mb-2">5. Sledovanie pokroku</h3>
                    <p className="text-gray-700">
                      Pravidelne hodnotíme váš pokrok a podľa potreby upravujeme terapeutický plán. Cieľom je nielen zbaviť vás aktuálnych ťažkostí, ale aj predchádzať ich návratu v budúcnosti.
                    </p>
                  </div>
                  <div className="md:hidden w-3 h-3 rounded-full bg-red-600 absolute left-0 top-5"></div>
                  <div></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-black text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">Potrebujete fyzioterapiu?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
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
