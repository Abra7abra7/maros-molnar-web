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
        <div className="absolute inset-0">
          <Image
            src="/images/services/fitness-training-1.jpg"
            alt="Fitness Training Background"
            fill
            className="object-cover opacity-30"
            priority
          />
        </div>
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
      <section className="py-16 bg-black text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-white">Moje služby</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.fitness.features.map((feature, index) => (
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

      {/* Benefits */}
      <section className="py-16 bg-black text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-white">Výhody fitness tréningu</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Zlepšenie fyzickej kondície",
                description: "Pravidelný tréning zvyšuje vašu silu, vytrvalosť a flexibilitu, čo vedie k lepšej celkovej kondícii."
              },
              {
                title: "Redukcia hmotnosti",
                description: "Kombinácia kardio tréningu a silového tréningu je efektívny spôsob, ako spáliť kalórie a redukovať telesný tuk."
              },
              {
                title: "Prevencia zranení",
                description: "Správne vykonávané cvičenia posilňujú svaly, kĺby a kosti, čím znižujú riziko zranení v každodennom živote."
              },
              {
                title: "Zlepšenie mentálneho zdravia",
                description: "Cvičenie uvoľňuje endorfíny, ktoré zlepšujú náladu a znižujú stres, úzkosť a depresiu."
              }
            ].map((benefit, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-700">
                <h3 className="text-xl font-bold mb-3 text-white">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="py-16 bg-black text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-white">Môj prístup k fitness tréningu</h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  Môj prístup k fitness tréningu je založený na individuálnych potrebách a cieľoch každého klienta. Verím, že neexistuje univerzálny tréningový plán, ktorý by vyhovoval všetkým.
                </p>
                <p>
                  Pred začiatkom tréningu vykonávam dôkladnú analýzu vašej fyzickej kondície, zdravotného stavu a cieľov. Na základe týchto informácií vytvorím tréningový plán, ktorý je prispôsobený presne vám.
                </p>
                <p>
                  Počas tréningu sa zameriavam nielen na dosiahnutie vašich cieľov, ale aj na správnu techniku cvičenia, aby ste predišli zraneniam a maximalizovali efektivitu tréningu.
                </p>
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/services/fitness-training-2.jpg"
                alt="Fitness tréning"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-16 bg-black text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-white">Výsledky mojich klientov</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg group">
              <Image
                src="/images/pred-po-1.jpeg"
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
                src="/images/pred-po-2.jpeg"
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
                src="/images/pred-po-3.jpeg"
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
      <section className="py-16 bg-black text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-white">Často kladené otázky</h2>
          
          <div className="max-w-3xl mx-auto space-y-8">
            <div>
              <h3 className="text-xl font-bold mb-2 text-white">Ako často by som mal trénovať?</h3>
              <p className="text-gray-300">
                Frekvencia tréningov závisí od vašich cieľov, aktuálnej kondície a časových možností. Pre väčšinu ľudí odporúčam 3-4 tréningy týždenne s dostatočným časom na regeneráciu.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-2 text-white">Potrebujem špeciálne vybavenie?</h3>
              <p className="text-gray-300">
                Nie, tréningový plán prispôsobím vybaveniu, ktoré máte k dispozícii. Môžeme pracovať s vlastnou váhou tela, základným vybavením domácej posilňovne alebo plne vybavenou komerčnou posilňovňou.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-2 text-white">Ako dlho trvá, kým uvidím výsledky?</h3>
              <p className="text-gray-300">
                Prvé zmeny môžete pociťovať už po 2-3 týždňoch pravidelného tréningu. Viditeľné fyzické zmeny sa zvyčajne objavia po 4-8 týždňoch, v závislosti od intenzity tréningu, stravovania a genetických predpokladov.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-2 text-white">Poskytujete aj poradenstvo v oblasti výživy?</h3>
              <p className="text-gray-300">
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
