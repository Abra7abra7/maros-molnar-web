import Image from "next/image";
import { Metadata } from "next";
import { siteConfig } from "@/lib/constants";

export const metadata: Metadata = {
  title: "O mne",
  description: "Profesionálny životopis a informácie o Marosovi Molnárovi, fitness trénerovi a fyzioterapeutovi.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-24 bg-black text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">O mne</h1>
            <p className="text-xl text-gray-300">
              Spoznajte môj príbeh, skúsenosti a prístup k fitness tréningu a fyzioterapii.
            </p>
          </div>
        </div>
      </section>

      {/* Profile Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[600px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/maros-profil.jpg"
                alt="Maros Molnár"
                fill
                className="object-cover"
              />
            </div>
            
            <div>
              <h2 className="text-3xl font-bold mb-6">Maros Molnár</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  Som profesionálny fitness tréner a fyzioterapeut s viac ako 10-ročnými skúsenosťami v oblasti športu a rehabilitácie. Moja cesta začala vlastnou transformáciou a túžbou pomáhať ostatným dosiahnuť ich ciele.
                </p>
                <p>
                  Vyštudoval som fyzioterapiu na Univerzite Komenského v Bratislave a následne som absolvoval množstvo špecializovaných kurzov a certifikácií v oblasti fitness tréningu a rehabilitácie.
                </p>
                <p>
                  Počas svojej kariéry som pracoval s rôznymi klientmi - od vrcholových športovcov až po ľudí s chronickými zdravotnými problémami. Táto rôznorodosť mi umožnila získať cenné skúsenosti a vyvinúť komplexný prístup k tréningu a rehabilitácii.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-6">Moja filozofia</h2>
            <p className="text-gray-700">
              Verím, že každý človek je jedinečný a vyžaduje individuálny prístup. Moja filozofia je založená na týchto princípoch:
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-red-600">Individuálny prístup</h3>
              <p className="text-gray-700">
                Každý klient má jedinečné potreby, ciele a obmedzenia. Preto vytváram tréningové a rehabilitačné plány na mieru pre každého jednotlivca.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-red-600">Holistický pohľad</h3>
              <p className="text-gray-700">
                Pozerám sa na človeka ako na celok. Beriem do úvahy nielen fyzické aspekty, ale aj životný štýl, stravovanie a psychickú pohodu.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-red-600">Dlhodobé výsledky</h3>
              <p className="text-gray-700">
                Zameriavam sa na dosiahnutie udržateľných výsledkov prostredníctvom zmeny životného štýlu, nie krátkodobých riešení.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Certifikácie a vzdelanie</h2>
          
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="border-l-4 border-red-600 pl-6 py-2">
              <h3 className="text-xl font-bold">Magister fyzioterapie</h3>
              <p className="text-gray-600">Univerzita Komenského v Bratislave, 2015</p>
            </div>
            
            <div className="border-l-4 border-red-600 pl-6 py-2">
              <h3 className="text-xl font-bold">Certifikovaný osobný tréner</h3>
              <p className="text-gray-600">Fitness Academy International, 2016</p>
            </div>
            
            <div className="border-l-4 border-red-600 pl-6 py-2">
              <h3 className="text-xl font-bold">Špecialista na funkčný tréning</h3>
              <p className="text-gray-600">Functional Training Institute, 2018</p>
            </div>
            
            <div className="border-l-4 border-red-600 pl-6 py-2">
              <h3 className="text-xl font-bold">Certifikát z manuálnej terapie</h3>
              <p className="text-gray-600">European Institute of Manual Therapy, 2019</p>
            </div>
            
            <div className="border-l-4 border-red-600 pl-6 py-2">
              <h3 className="text-xl font-bold">Výživa v športe</h3>
              <p className="text-gray-600">Sports Nutrition Academy, 2020</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-black text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">Začnime spolupracovať</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Ak hľadáte profesionálny prístup k fitness tréningu alebo fyzioterapii, som tu pre vás. Kontaktujte ma a dohodneme si konzultáciu.
          </p>
          <a 
            href="/kontakt" 
            className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-red-600 text-white hover:bg-red-700 h-11 rounded-md px-8"
          >
            Kontaktujte ma
          </a>
        </div>
      </section>
    </>
  );
}
