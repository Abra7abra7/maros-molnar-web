import { Metadata } from "next";
import { siteConfig } from "@/lib/constants";
import ContactForm from "@/components/sections/contact-form";
import { Mail, Phone, MapPin, Clock, Instagram, Facebook } from "lucide-react";
import SectionReveal from "@/components/animations/section-reveal";
import ParallaxEffect from "@/components/animations/parallax-effect";
import ScrollProgress from "@/components/ui/scroll-progress";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Kontakt",
  description: "Kontaktujte Marosa Molnára pre konzultáciu alebo objednanie služieb fitness tréningu a fyzioterapie.",
};

export default function ContactPage() {
  return (
    <>
      <ScrollProgress showPercentage />
      
      {/* Hero Section */}
      <section className="relative py-24 bg-black text-white overflow-hidden">
        <ParallaxEffect speed={-0.3} className="absolute inset-0">
          <div className="w-full h-[120%] relative">
            <Image
              src="/images/services/fitness-training-1.jpg"
              alt="Contact Background"
              fill
              className="object-cover opacity-30"
              priority
            />
          </div>
        </ParallaxEffect>
        <div className="container mx-auto px-4 relative z-10">
          <SectionReveal>
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Kontakt</h1>
              <p className="text-xl mb-8">
                Máte otázky alebo záujem o moje služby? Neváhajte ma kontaktovať.
                Rád vám poskytnem všetky potrebné informácie a pomôžem vám dosiahnuť vaše ciele.
              </p>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-black text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <SectionReveal direction="left">
              <div>
                <h2 className="text-3xl font-bold mb-8 text-white">Kontaktné informácie</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start group hover:bg-gray-800 p-4 rounded-lg transition-colors">
                    <div className="bg-red-600 text-white p-3 rounded-full mr-4 group-hover:scale-110 transition-transform">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1 text-white">Telefón</h3>
                      <p className="text-gray-300">
                        <a 
                          href={`tel:${siteConfig.links.phone}`}
                          className="hover:text-red-500 transition-colors"
                        >
                          {siteConfig.links.phone}
                        </a>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start group hover:bg-gray-800 p-4 rounded-lg transition-colors">
                    <div className="bg-red-600 text-white p-3 rounded-full mr-4 group-hover:scale-110 transition-transform">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1 text-white">Email</h3>
                      <p className="text-gray-300">
                        <a 
                          href={`mailto:${siteConfig.links.email}`}
                          className="hover:text-red-500 transition-colors"
                        >
                          {siteConfig.links.email}
                        </a>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start group hover:bg-gray-800 p-4 rounded-lg transition-colors">
                    <div className="bg-red-600 text-white p-3 rounded-full mr-4 group-hover:scale-110 transition-transform">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1 text-white">Adresa</h3>
                      <p className="text-gray-300">
                        Fitness Centrum XYZ<br />
                        Hlavná 123<br />
                        851 01 Bratislava
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start group hover:bg-gray-800 p-4 rounded-lg transition-colors">
                    <div className="bg-red-600 text-white p-3 rounded-full mr-4 group-hover:scale-110 transition-transform">
                      <Clock className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1 text-white">Otváracie hodiny</h3>
                      <div className="text-gray-300">
                        <div className="grid grid-cols-2 gap-2">
                          <span>Pondelok - Piatok:</span>
                          <span>8:00 - 20:00</span>
                          <span>Sobota:</span>
                          <span>9:00 - 16:00</span>
                          <span>Nedeľa:</span>
                          <span>Zatvorené</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-12">
                  <h3 className="text-lg font-semibold mb-4 text-white">Sledujte ma</h3>
                  <div className="flex space-x-4">
                    <a
                      href={siteConfig.links.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gray-200 hover:bg-red-600 hover:text-white transition-colors p-3 rounded-full hover:scale-110 transform duration-200"
                      aria-label="Instagram"
                    >
                      <Instagram size={24} />
                    </a>
                    <a
                      href={siteConfig.links.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gray-200 hover:bg-red-600 hover:text-white transition-colors p-3 rounded-full hover:scale-110 transform duration-200"
                      aria-label="Facebook"
                    >
                      <Facebook size={24} />
                    </a>
                  </div>
                </div>
              </div>
            </SectionReveal>
            
            {/* Contact Form */}
            <SectionReveal direction="right">
              <ContactForm />
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-black text-white">
        <div className="container mx-auto px-4">
          <SectionReveal>
            <h2 className="text-3xl font-bold mb-8 text-center text-white">Kde ma nájdete</h2>
          </SectionReveal>
          
          <SectionReveal direction="up">
            <div className="h-[500px] rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              {/* Replace with actual Google Maps iframe */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2661.9731924621015!2d17.107099776537924!3d48.14512294766784!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476c8946168a2b27%3A0x684d2b4024572d41!2sBratislava!5e0!3m2!1sen!2ssk!4v1710842000000!5m2!1sen!2ssk"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-black text-white">
        <div className="container mx-auto px-4">
          <SectionReveal>
            <h2 className="text-3xl font-bold mb-12 text-center text-white">Často kladené otázky</h2>
          </SectionReveal>
          
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                question: "Ako prebieha prvá konzultácia?",
                answer: "Prvá konzultácia trvá približne 60 minút. Počas nej sa zoznámime, prediskutujeme vaše ciele, zdravotný stav a predchádzajúce skúsenosti s cvičením. Na základe toho vytvoríme individuálny plán."
              },
              {
                question: "Potrebujem mať predchádzajúce skúsenosti s cvičením?",
                answer: "Nie, moje služby sú vhodné pre všetky úrovne skúseností - od úplných začiatočníkov až po pokročilých. Tréningový plán prispôsobím vašim aktuálnym schopnostiam."
              },
              {
                question: "Ako často by som mal trénovať?",
                answer: "Frekvencia tréningov závisí od vašich cieľov, časových možností a aktuálnej kondície. Väčšina klientov dosahuje dobré výsledky pri 2-3 tréningoch týždenne."
              },
              {
                question: "Poskytujete aj výživové poradenstvo?",
                answer: "Áno, súčasťou mojich služieb je aj základné výživové poradenstvo. Pre komplexný výživový plán spolupracujem s certifikovanými výživovými poradcami."
              }
            ].map((faq, index) => (
              <SectionReveal key={index} direction="right" delay={0.1 * index}>
                <div className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                  <h3 className="text-xl font-bold mb-3 text-red-600">{faq.question}</h3>
                  <p className="text-gray-300">{faq.answer}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
          
          <SectionReveal>
            <div className="text-center mt-12">
              <p className="text-lg mb-6">Máte ďalšie otázky? Neváhajte ma kontaktovať.</p>
            </div>
          </SectionReveal>
        </div>
      </section>
    </>
  );
}
