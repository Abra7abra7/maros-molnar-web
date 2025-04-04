import SectionReveal from "@/components/animations/section-reveal"
import AnimatedButton from "@/components/ui/animated-button"

export default function IndividualTrainingPage() {
  return (
    <div className="bg-black text-white py-20">
      <SectionReveal>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center gradient-text-red">
              Individuálny tréning
            </h1>
            
            <div className="aspect-w-16 aspect-h-9 bg-gray-800 rounded-xl overflow-hidden mb-8 relative">
              {/* Tu bude obrázok po dodaní klientom */}
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-gray-400">Obrázok bude doplnený</p>
              </div>
            </div>
            
            <p className="text-xl text-gray-200 mb-8 text-enhanced">
              Individuálny tréning je navrhnutý presne pre vaše potreby, ciele a možnosti. 
              S osobným prístupom a tréningovým programom na mieru dosiahnete výsledky 
              efektívnejšie a bezpečnejšie ako pri akomkoľvek inom type tréningu.
            </p>
            
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">
              Prečo zvoliť individuálny tréning?
            </h2>
            
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <span className="text-red-500 mr-2 text-xl">✓</span>
                <span className="text-lg text-gray-200">Tréningový plán vytvorený presne pre vaše potreby a ciele</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2 text-xl">✓</span>
                <span className="text-lg text-gray-200">Osobná pozornosť a vedenie počas každého tréningu</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2 text-xl">✓</span>
                <span className="text-lg text-gray-200">Dôraz na správnu techniku a bezpečnosť</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2 text-xl">✓</span>
                <span className="text-lg text-gray-200">Flexibilný rozvrh tréningov podľa vašich časových možností</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2 text-xl">✓</span>
                <span className="text-lg text-gray-200">Rýchlejšie a efektívnejšie výsledky vďaka personalizovanému prístupu</span>
              </li>
            </ul>
            
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">
              Druhy individuálnych tréningov
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gray-900 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-2 text-white">Silový tréning</h3>
                <p className="text-gray-300">
                  Zameraný na budovanie sily a svalovej hmoty pomocou cvikov s vlastnou váhou, 
                  činkami a posilňovacími strojmi.
                </p>
              </div>
              
              <div className="bg-gray-900 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-2 text-white">Funkčný tréning</h3>
                <p className="text-gray-300">
                  Zlepšuje celkovú kondíciu, stabilitu a mobilitu pomocou 
                  funkčných pohybových vzorov.
                </p>
              </div>
              
              <div className="bg-gray-900 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-2 text-white">HIIT tréning</h3>
                <p className="text-gray-300">
                  Vysokointenzívny intervalový tréning pre rýchle spaľovanie 
                  kalórií a zlepšenie kondície.
                </p>
              </div>
              
              <div className="bg-gray-900 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-2 text-white">Rehabilitačný tréning</h3>
                <p className="text-gray-300">
                  Špeciálne cvičenia zamerané na obnovu po zranení alebo 
                  riešenie chronických problémov.
                </p>
              </div>
            </div>
            
            <div className="bg-gray-900 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-bold mb-2 text-white">
                Cena: od 35€ / hodina
              </h3>
              <p className="text-gray-300">
                K dispozícii sú aj zvýhodnené balíky na 5, 10 alebo 20 tréningov. Presné ceny a podmienky vám radi poskytneme na osobnej konzultácii.
              </p>
            </div>
            
            <div className="mt-12 text-center">
              <AnimatedButton href="/kontakt" variant="primary" size="lg">
                Rezervovať tréning
              </AnimatedButton>
            </div>
          </div>
        </div>
      </SectionReveal>
    </div>
  )
}
