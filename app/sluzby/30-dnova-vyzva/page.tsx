import SectionReveal from "@/components/animations/section-reveal"
import AnimatedButton from "@/components/ui/animated-button"

export default function ThirtyDayChallengePage() {
  return (
    <div className="bg-black text-white py-20">
      <SectionReveal>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center gradient-text-red">
              30-dňová výzva
            </h1>
            
            <div className="aspect-w-16 aspect-h-9 bg-gray-800 rounded-xl overflow-hidden mb-8 relative">
              {/* Tu bude obrázok po dodaní klientom */}
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-gray-400">Obrázok bude doplnený</p>
              </div>
            </div>
            
            <p className="text-xl text-gray-200 mb-8 text-enhanced">
              30-dňová výzva je intenzívny program navrhnutý pre tých, ktorí chcú dosiahnuť 
              rýchle a viditeľné výsledky v krátkom čase. Program kombinuje tréning, 
              výživové poradenstvo a každodennú motiváciu pre maximálne výsledky.
            </p>
            
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">
              Čo získate?
            </h2>
            
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <span className="text-red-500 mr-2 text-xl">✓</span>
                <span className="text-lg text-gray-200">Personalizovaný tréningový plán na 30 dní</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2 text-xl">✓</span>
                <span className="text-lg text-gray-200">Stravovací plán šitý na mieru vašim cieľom</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2 text-xl">✓</span>
                <span className="text-lg text-gray-200">Denná podpora a motivácia</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2 text-xl">✓</span>
                <span className="text-lg text-gray-200">Sledovanie pokroku a pravidelný feedback</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2 text-xl">✓</span>
                <span className="text-lg text-gray-200">Prístup k exkluzívnej online komunite</span>
              </li>
            </ul>
            
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">
              Pre koho je program vhodný?
            </h2>
            
            <p className="text-lg text-gray-200 mb-8">
              Program je ideálny pre tých, ktorí:
            </p>
            
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <span className="text-red-500 mr-2 text-xl">•</span>
                <span className="text-lg text-gray-200">Chcú rýchlo vidieť výsledky a získať motiváciu</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2 text-xl">•</span>
                <span className="text-lg text-gray-200">Majú špecifický cieľ, na ktorý sa potrebujú pripraviť</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2 text-xl">•</span>
                <span className="text-lg text-gray-200">Hľadajú štartovací bod pre dlhodobú zmenu životného štýlu</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2 text-xl">•</span>
                <span className="text-lg text-gray-200">Potrebujú reštartovať svoje zdravé návyky</span>
              </li>
            </ul>
            
            <div className="bg-gray-900 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-bold mb-2 text-white">
                Cena: od 99€
              </h3>
              <p className="text-gray-300">
                Presná cena závisí od individuálnych potrieb a požiadaviek. Kontaktujte nás pre nezáväznú konzultáciu.
              </p>
            </div>
            
            <div className="mt-12 text-center">
              <AnimatedButton href="/kontakt" variant="primary" size="lg">
                Chcem začať 30-dňovú výzvu
              </AnimatedButton>
            </div>
          </div>
        </div>
      </SectionReveal>
    </div>
  )
}
