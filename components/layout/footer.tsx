import Link from "next/link";
import { siteConfig, navLinks } from "@/lib/constants";
import { Instagram, Facebook, Mail, Phone } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Footer({ className }: { className?: string }) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={cn("bg-black text-white py-8 sm:py-12", className)} role="contentinfo" aria-label="Pätička stránky">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {/* Logo and Description */}
          <div>
            <Link href="/" className="text-xl sm:text-2xl font-bold" aria-label="Domáca stránka Maroš Molnár">
              Maroš Molnár
            </Link>
            <p className="mt-3 sm:mt-4 text-sm sm:text-base text-gray-400 max-w-xs">
              {siteConfig.description}
            </p>
            <div className="flex space-x-4 mt-4 sm:mt-6">
              <a
                href={siteConfig.links.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-red-500 transition-colors p-2 rounded-full hover:bg-gray-800/50"
                aria-label="Sledujte ma na Instagrame"
              >
                <Instagram className="h-5 w-5 sm:h-6 sm:w-6" />
                <span className="sr-only">Instagram</span>
              </a>
              <a
                href={siteConfig.links.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-red-500 transition-colors p-2 rounded-full hover:bg-gray-800/50"
                aria-label="Sledujte ma na Facebooku"
              >
                <Facebook className="h-5 w-5 sm:h-6 sm:w-6" />
                <span className="sr-only">Facebook</span>
              </a>
              <a
                href={`mailto:${siteConfig.links.email}`}
                className="text-gray-400 hover:text-red-500 transition-colors p-2 rounded-full hover:bg-gray-800/50"
                aria-label="Kontaktujte ma emailom"
              >
                <Mail className="h-5 w-5 sm:h-6 sm:w-6" />
                <span className="sr-only">Email</span>
              </a>
              <a
                href={`tel:${siteConfig.links.phone}`}
                className="text-gray-400 hover:text-red-500 transition-colors p-2 rounded-full hover:bg-gray-800/50"
                aria-label="Zavolajte mi"
              >
                <Phone className="h-5 w-5 sm:h-6 sm:w-6" />
                <span className="sr-only">Telefón</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Rýchle odkazy</h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-red-500 transition-colors"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Kontaktné informácie</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-red-500" />
                <a
                  href={`tel:${siteConfig.links.phone}`}
                  className="hover:text-red-500 transition-colors"
                >
                  {siteConfig.links.phone}
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-red-500" />
                <a
                  href={`mailto:${siteConfig.links.email}`}
                  className="hover:text-red-500 transition-colors"
                >
                  {siteConfig.links.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center text-gray-500">
          <p className="flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-4 text-xs sm:text-sm">
            <span>&copy; {currentYear} {siteConfig.name}. Všetky práva vyhradené.</span>
            <span className="hidden sm:inline">|</span>
            <Link href="/ochrana-osobnych-udajov" className="hover:text-red-500 transition-colors">Ochrana osobných údajov</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
