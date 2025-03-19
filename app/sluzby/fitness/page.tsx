import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { services } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Fitness Tréning",
  description: "Individuálne tréningové plány a osobný tréning pre dosiahnutie vašich fitness cieľov.",
};

export default function FitnessPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-24 bg-black text-white">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: "url('/images/fitness-bg.jpg')" }}
        />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{services.fitness.title}</h1>
            <p className="text-xl text-gray-300">
              {services.fitness.description}
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Moje služby</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.fitness.features.map((feature, index) => (
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
            <div>
              <h2 className="text-3xl font-bold mb-6">Môj prístup k tréningu</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  Môj prístup k fitness tréningu je založený na vedeckých poznatkoch a dlhoročných skúsenostiach. Verím, že každý človek je jedinečný a vyžaduje individuálny prístup.
                </p>
                <p>
                  Pri tvorbe tréningového plánu beriem do úvahy vaše ciele, aktuálnu kondíciu, zdravotný stav a časové možnosti. Tréningový plán pravidelne upravujem podľa vašich pokrokov a spätnej väzby.
                </p>
                <p>
                  Kladiem dôraz na správnu techniku cvičenia, postupnú progresiu a dlhodobú udržateľnosť. Mojím cieľom nie je len dosiahnuť krátkodobé výsledky, ale naučiť vás, ako si udržať zdravie a kondíciu po celý život.
                </p>
              </div>
            </div>
            
            <div className="relative h-[500px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/fitness-approach.jpg"
                alt="Fitness tréning"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Výsledky mojich klientov</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg group">
              <Image
                src="/images/pred-po-1.jpg"
                alt="Pred a po transformácia"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div className="p-6 text-white">
                  <h3 className="text-xl font-bold">Peter, 35 rokov</h3>
                  <p>-15 kg za 3 mesiace</p>
                </div>
              </div>
            </div>
            
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg group">
              <Image
                src="/images/pred-po-2.jpg"
                alt="Pred a po transformácia"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div className="p-6 text-white">
                  <h3 className="text-xl font-bold">Jana, 28 rokov</h3>
                  <p>Zvýšenie svalovej hmoty a sily</p>
                </div>
              </div>
            </div>
            
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg group">
              <Image
                src="/images/pred-po-3.jpg"
                alt="Pred a po transformácia"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div className="p-6 text-white">
                  <h3 className="text-xl font-bold">Martin, 42 rokov</h3>
                  <p>Zlepšenie kondície a flexibility</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Často kladené otázky</h2>
          
          <div className="max-w-3xl mx-auto space-y-8">
            <div>
              <h3 className="text-xl font-bold mb-2">Ako často by som mal trénovať?</h3>
              <p className="text-gray-700">
                Frekvencia tréningov závisí od vašich cieľov, aktuálnej kondície a časových možností. Pre väčšinu ľudí odporúčam 3-4 tréningy týždenne s dostatočným časom na regeneráciu.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-2">Potrebujem špeciálne vybavenie?</h3>
              <p className="text-gray-700">
                Nie, tréningový plán prispôsobím vybaveniu, ktoré máte k dispozícii. Môžeme pracovať s vlastnou váhou tela, základným vybavením domácej posilňovne alebo plne vybavenou komerčnou posilňovňou.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-2">Ako dlho trvá, kým uvidím výsledky?</h3>
              <p className="text-gray-700">
                Prvé zmeny môžete pociťovať už po 2-3 týždňoch pravidelného tréningu. Viditeľné fyzické zmeny sa zvyčajne objavia po 4-8 týždňoch, v závislosti od intenzity tréningu, stravovania a genetických predpokladov.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-2">Poskytujete aj poradenstvo v oblasti výživy?</h3>
              <p className="text-gray-700">
                Áno, súčasťou mojich služieb je aj základné poradenstvo v oblasti výživy. Pre komplexnejšie výživové plány spolupracujem s certifikovanými výživovými poradcami.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-black text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">Pripravený začať?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Kontaktujte ma a dohodneme si úvodnú konzultáciu, počas ktorej preberieme vaše ciele a možnosti spolupráce.
          </p>
          <Link href="/kontakt">
            <Button variant="red" size="lg">
              Kontaktujte ma
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
}
