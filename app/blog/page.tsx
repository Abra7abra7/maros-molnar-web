import SectionReveal from "@/components/animations/section-reveal"
import AnimatedButton from "@/components/ui/animated-button"

export default function BlogPage() {
  return (
    <div className="bg-black text-white py-20">
      <SectionReveal>
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            Blog
          </h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Zástupné miesto pre blogové príspevky - budú pridané neskôr */}
            <div className="bg-gray-900 rounded-lg overflow-hidden">
              <div className="aspect-w-16 aspect-h-9 bg-gray-800 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-gray-600 text-lg">Obrázok článku</span>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-400 text-sm mb-2">4. Apríl 2025</p>
                <h3 className="text-xl font-bold mb-2">Ako začať s fitness tréningom</h3>
                <p className="text-gray-300 mb-4">Sprievodca pre začiatočníkov, ktorí chcú začať svoj fitness journey.</p>
                <a href="#" className="text-red-500 font-medium hover:underline">Čítať viac</a>
              </div>
            </div>
            
            <div className="bg-gray-900 rounded-lg overflow-hidden">
              <div className="aspect-w-16 aspect-h-9 bg-gray-800 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-gray-600 text-lg">Obrázok článku</span>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-400 text-sm mb-2">28. Marec 2025</p>
                <h3 className="text-xl font-bold mb-2">Najčastejšie chyby pri cvičení</h3>
                <p className="text-gray-300 mb-4">Vyhnite sa týmto chybám, ktoré môžu spomaliť váš pokrok.</p>
                <a href="#" className="text-red-500 font-medium hover:underline">Čítať viac</a>
              </div>
            </div>
            
            <div className="bg-gray-900 rounded-lg overflow-hidden">
              <div className="aspect-w-16 aspect-h-9 bg-gray-800 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-gray-600 text-lg">Obrázok článku</span>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-400 text-sm mb-2">15. Marec 2025</p>
                <h3 className="text-xl font-bold mb-2">Stravovanie a jeho vplyv na tréning</h3>
                <p className="text-gray-300 mb-4">Ako správne stravovanie môže zlepšiť vaše výsledky.</p>
                <a href="#" className="text-red-500 font-medium hover:underline">Čítať viac</a>
              </div>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <AnimatedButton href="/blog/kategorie" variant="primary">
              Všetky kategórie
            </AnimatedButton>
          </div>
        </div>
      </SectionReveal>
    </div>
  )
}
