import { Metadata } from "next";
import { siteConfig } from "@/lib/constants";
import ContactForm from "@/components/sections/contact-form";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Kontakt",
  description: "Kontaktujte Marosa Molnára pre konzultáciu alebo objednanie služieb fitness tréningu a fyzioterapie.",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-24 bg-black text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Kontakt</h1>
            <p className="text-xl text-gray-300">
              Máte otázky alebo záujem o moje služby? Neváhajte ma kontaktovať.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold mb-8">Kontaktné informácie</h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-red-600 mr-4 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Telefón</h3>
                    <p className="text-gray-700">
                      <a 
                        href={`tel:${siteConfig.links.phone}`}
                        className="hover:text-red-600 transition-colors"
                      >
                        {siteConfig.links.phone}
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-red-600 mr-4 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Email</h3>
                    <p className="text-gray-700">
                      <a 
                        href={`mailto:${siteConfig.links.email}`}
                        className="hover:text-red-600 transition-colors"
                      >
                        {siteConfig.links.email}
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-red-600 mr-4 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Adresa</h3>
                    <p className="text-gray-700">
                      Fitness Centrum XYZ<br />
                      Hlavná 123<br />
                      851 01 Bratislava
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Clock className="h-6 w-6 text-red-600 mr-4 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Otváracie hodiny</h3>
                    <div className="text-gray-700">
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
                <h3 className="text-lg font-semibold mb-4">Sledujte ma</h3>
                <div className="flex space-x-4">
                  <a
                    href={siteConfig.links.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-200 hover:bg-red-600 hover:text-white transition-colors p-3 rounded-full"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                  </a>
                  <a
                    href={siteConfig.links.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-200 hover:bg-red-600 hover:text-white transition-colors p-3 rounded-full"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Kde ma nájdete</h2>
          
          <div className="h-[500px] rounded-lg overflow-hidden shadow-lg">
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
        </div>
      </section>
    </>
  );
}
