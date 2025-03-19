import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { services } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Služby",
  description: "Prehľad služieb, ktoré ponúka Maros Molnár - fitness tréning a fyzioterapia.",
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-24 bg-black text-white">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: "url('/images/services-bg.jpg')" }}
        />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Moje služby</h1>
            <p className="text-xl text-gray-300">
              Ponúkam profesionálne služby v oblasti fitness tréningu a fyzioterapie. Každý klient je pre mňa jedinečný a vyžaduje individuálny prístup.
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Fitness Training */}
            <div className="bg-white rounded-lg shadow-xl overflow-hidden">
              <div className="relative h-80">
                <Image
                  src="/images/fitness-service.jpg"
                  alt="Fitness tréning"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8">
                <h2 className="text-3xl font-bold mb-4">{services.fitness.title}</h2>
                <p className="text-gray-700 mb-6">
                  {services.fitness.description}
                </p>
                <div className="space-y-4 mb-8">
                  {services.fitness.features.slice(0, 3).map((feature, index) => (
                    <div key={index} className="flex items-start">
                      <div className="bg-red-600 text-white p-1 rounded-full mr-3 mt-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold">{feature.title}</h3>
                        <p className="text-sm text-gray-600">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <Link href="/sluzby/fitness">
                  <Button variant="red" className="w-full">
                    Viac informácií
                  </Button>
                </Link>
              </div>
            </div>
            
            {/* Physiotherapy */}
            <div className="bg-white rounded-lg shadow-xl overflow-hidden">
              <div className="relative h-80">
                <Image
                  src="/images/physio-service.jpg"
                  alt="Fyzioterapia"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8">
                <h2 className="text-3xl font-bold mb-4">{services.physio.title}</h2>
                <p className="text-gray-700 mb-6">
                  {services.physio.description}
                </p>
                <div className="space-y-4 mb-8">
                  {services.physio.features.slice(0, 3).map((feature, index) => (
                    <div key={index} className="flex items-start">
                      <div className="bg-red-600 text-white p-1 rounded-full mr-3 mt-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold">{feature.title}</h3>
                        <p className="text-sm text-gray-600">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <Link href="/sluzby/fyzioterapia">
                  <Button variant="red" className="w-full">
                    Viac informácií
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Cenník služieb</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Fitness Pricing */}
            <div>
              <h3 className="text-2xl font-bold mb-6 text-center">Fitness tréning</h3>
              <div className="space-y-4">
                {services.fitness.features.map((feature, index) => (
                  <Card key={index} className="border-none shadow-md">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="py-2">
                      <p className="text-2xl font-bold text-red-600">{feature.price}</p>
                    </CardContent>
                    <CardFooter className="pt-2">
                      <CardDescription>{feature.description}</CardDescription>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </div>
            
            {/* Divider for desktop */}
            <div className="hidden lg:block">
              <div className="h-full w-px bg-gray-300 mx-auto"></div>
            </div>
            
            {/* Divider for mobile/tablet */}
            <div className="block lg:hidden h-px w-full bg-gray-300 my-8 md:col-span-2"></div>
            
            {/* Physiotherapy Pricing */}
            <div className="md:col-span-2 lg:col-span-1">
              <h3 className="text-2xl font-bold mb-6 text-center">Fyzioterapia</h3>
              <div className="space-y-4">
                {services.physio.features.map((feature, index) => (
                  <Card key={index} className="border-none shadow-md">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="py-2">
                      <p className="text-2xl font-bold text-red-600">{feature.price}</p>
                    </CardContent>
                    <CardFooter className="pt-2">
                      <CardDescription>{feature.description}</CardDescription>
                    </CardFooter>
                  </Card>
                ))}
              </div>
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
