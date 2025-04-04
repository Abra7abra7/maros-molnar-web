import SectionReveal from "@/components/animations/section-reveal"
import AnimatedButton from "@/components/ui/animated-button"

export default function SixtyDayChallengePage() {
  return (
    <div className="bg-black text-white py-20">
      <SectionReveal>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center gradient-text-red">
              60-dňová výzva
            </h1>
            
            <div className="aspect-w-16 aspect-h-9 bg-gray-800 rounded-xl overflow-hidden mb-8 relative">
              {/* Tu bude obrázok po dodaní klientom */}
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-gray-400">Obrázok bude doplnený</p>
              </div>
            </div>
            
            <p className="text-xl text-gray-200 mb-8 text-enhanced">
              60-dňová výzva je komplexný transformačný program, ktorý vám pomôže dosiahnuť 
              dlhodobé a udržateľné výsledky. Tento program je navrhnutý pre tých, ktorí chcú 
              nielen zmeniť svoju fyzickú kondíciu, ale aj vybudovať pevné základy pre 
              celoživotný zdravý životný štýl.
            </p>
            
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">
              Komplexný program zahŕňa
            </h2>
            
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <span className="text-red-500 mr-2 text-xl">✓</span>
                <span className="text-lg text-gray-200">Úvodná konzultácia a stanovenie cieľov</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2 text-xl">✓</span>
                <span className="text-lg text-gray-200">Personalizovaný tréningový plán na 60 dní s postupnou progresiou</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2 text-xl">✓</span>
                <span className="text-lg text-gray-200">Komplexný výživový plán vrátane receptov a nákupného zoznamu</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2 text-xl">✓</span>
                <span className="text-lg text-gray-200">Pravidelné týždenné konzultácie a úpravy programu</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2 text-xl">✓</span>
                <span className="text-lg text-gray-200">Detailné sledovanie pokroku a merania</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2 text-xl">✓</span>
                <span className="text-lg text-gray-200">Plán pre udržanie výsledkov po skončení programu</span>
              </li>
            </ul>
            
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">
              Výhody 60-dňovej výzvy
            </h2>
            
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <span className="text-red-500 mr-2 text-xl">•</span>
                <span className="text-lg text-gray-200">Dlhodobé a udržateľné výsledky</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2 text-xl">•</span>
                <span className="text-lg text-gray-200">Postupná adaptácia organizmu na zmeny</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2 text-xl">•</span>
                <span className="text-lg text-gray-200">Vybudovanie trvalých zdravých návykov</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2 text-xl">•</span>
                <span className="text-lg text-gray-200">Komplexná zmena životného štýlu</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2 text-xl">•</span>
                <span className="text-lg text-gray-200">Intenzívnejšia podpora a dlhodobé vedenie</span>
              </li>
            </ul>
            
            <div className="bg-gray-900 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-bold mb-2 text-white">
                Cena: od 149€ / mesiac
              </h3>
              <p className="text-gray-300">
                Celková cena za 60-dňový program závisí od individuálnych potrieb a požiadaviek. Kontaktujte nás pre nezáväznú konzultáciu.
              </p>
            </div>
            
            <div className="mt-12 text-center">
              <AnimatedButton href="/kontakt" variant="primary" size="lg">
                Začať 60-dňovú transformáciu
              </AnimatedButton>
            </div>
          </div>
        </div>
      </SectionReveal>
    </div>
  )
}
