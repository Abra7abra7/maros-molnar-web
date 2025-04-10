"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { navLinks } from "@/lib/constants";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,

} from "@/components/ui/navigation-menu";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-black/90 text-white shadow-md py-2"
          : "bg-transparent text-white py-4"
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link href="/" className="flex items-center" aria-label="Domovská stránka">
          <Image 
            src="/logo.png" 
            alt="Maroš Molnár Logo" 
            width={150} 
            height={50} 
            className="h-auto w-auto max-w-[120px] md:max-w-[150px]" 
            priority
            sizes="(max-width: 768px) 120px, 150px"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:block">
          <NavigationMenu>
            <NavigationMenuList>
              {navLinks.map((link) =>
                link.children ? (
                  <NavigationMenuItem key={link.href}>
                    <NavigationMenuTrigger 
                      className="text-white hover:text-red-500 hover:bg-transparent focus:bg-transparent bg-transparent"
                      onClick={() => window.location.href = link.href}
                    >
                      {link.title}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 bg-black/90">
                        {link.children.map((child) => (
                          <li key={child.href}>
                            <NavigationMenuLink asChild>
                              <Link
                                href={child.href}
                                className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-red-500 hover:text-white focus:bg-red-500 focus:text-white"
                              >
                                <div className="text-sm font-medium leading-none text-white">
                                  {child.title}
                                </div>
                                <p className="line-clamp-2 text-sm leading-snug text-gray-300">
                                  {child.description}
                                </p>
                              </Link>
                            </NavigationMenuLink>
                          </li>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                ) : (
                  <NavigationMenuItem key={link.href}>
                    <Link
                      href={link.href}
                      className="group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium text-white hover:text-red-500 hover:bg-transparent focus:bg-transparent bg-transparent"
                    >
                      {link.title}
                    </Link>
                  </NavigationMenuItem>
                )
              )}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-expanded={isMobileMenuOpen}
          aria-label={isMobileMenuOpen ? "Zavrieť menu" : "Otvoriť menu"}
          aria-controls="mobile-menu"
        >
          <span className="sr-only">{isMobileMenuOpen ? "Zavrieť menu" : "Otvoriť menu"}</span>
          {isMobileMenuOpen ? (
            <X className="h-6 w-6" aria-hidden="true" />
          ) : (
            <Menu className="h-6 w-6" aria-hidden="true" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div 
          id="mobile-menu"
          className="md:hidden bg-black/95 text-white absolute top-full left-0 right-0 p-4 animate-fadeIn shadow-lg z-50"
          role="navigation"
        >
          <nav className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <div key={link.href}>
                {link.children ? (
                  <div className="space-y-2">
                    <Link
                      href={link.href}
                      className="block font-medium text-red-500 hover:text-red-400 py-2 px-3 rounded-md transition-colors duration-200"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.title}
                    </Link>
                    <div className="pl-4 space-y-2">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block py-2 px-3 hover:text-red-500 transition-colors duration-200 rounded-md flex items-center"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {child.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    href={link.href}
                    className="block py-2 px-3 hover:text-red-500 rounded-md transition-colors duration-200"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.title}
                  </Link>
                )}
              </div>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
