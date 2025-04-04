import SectionReveal from "@/components/animations/section-reveal"
import AnimatedButton from "@/components/ui/animated-button"

export default function PremenaPage() {
  return (
    <div className="bg-black text-white py-20">
      <SectionReveal>
        <div className="container mx-auto px-4 text-center mb-16">
          {/* Tu bude logo Premena po jeho dodaní klientom */}
          <div className="h-20 w-48 mx-auto mb-8 bg-gray-800 flex items-center justify-center">
            <span className="text-gray-500 text-sm">Logo Premena</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Transformácie, ktoré menia životy
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Pozrite si príbehy ľudí, ktorí sa rozhodli zmeniť svoj životný štýl a dosiahli neuveriteľné výsledky.
          </p>
        </div>
        
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Zástupné miesto pre transformácie - budú pridané reálne neskôr */}
            <div className="bg-gray-900 rounded-lg overflow-hidden">
              <div className="flex flex-col sm:flex-row">
                <div className="flex-1 aspect-w-4 aspect-h-5 bg-gray-800 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-gray-600">Pred</span>
                  </div>
                </div>
                <div className="flex-1 aspect-w-4 aspect-h-5 bg-gray-700 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-gray-600">Po</span>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Peter, 34</h3>
                <p className="text-red-500 font-semibold mb-2">-15 kg za 60 dní</p>
                <p className="text-gray-300">Peter začal s našim 60-dňovým programom po rokoch sedavého zamestnania. Za dva mesiace sa mu podarilo zhodiť 15 kg a výrazne zlepšiť svoju kondíciu.</p>
              </div>
            </div>
            
            <div className="bg-gray-900 rounded-lg overflow-hidden">
              <div className="flex flex-col sm:flex-row">
                <div className="flex-1 aspect-w-4 aspect-h-5 bg-gray-800 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-gray-600">Pred</span>
                  </div>
                </div>
                <div className="flex-1 aspect-w-4 aspect-h-5 bg-gray-700 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-gray-600">Po</span>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Jana, 28</h3>
                <p className="text-red-500 font-semibold mb-2">-8 kg za 30 dní</p>
                <p className="text-gray-300">Jana sa rozhodla pre našu 30-dňovú výzvu. Za mesiac sa jej podarilo nielen zhodiť 8 kg, ale aj výrazne spevniť problémové partie.</p>
              </div>
            </div>
          </div>
          
          <div className="mt-16 text-center">
            <AnimatedButton href="/kontakt" variant="primary" size="lg">
              Začnite svoju premenu
            </AnimatedButton>
          </div>
        </div>
      </SectionReveal>
    </div>
  )
}
