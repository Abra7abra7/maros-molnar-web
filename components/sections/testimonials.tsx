"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { testimonials } from "@/lib/constants";

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Čo hovoria klienti</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Prečítajte si skúsenosti mojich klientov a ich príbehy úspechu
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative min-h-[300px]">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-1000 flex flex-col items-center ${
                  index === activeIndex ? "opacity-100" : "opacity-0 pointer-events-none"
                }`}
              >
                <div className="mb-6 relative w-20 h-20 rounded-full overflow-hidden border-2 border-red-500">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <blockquote className="text-xl italic text-center mb-6 text-white">
                  "{testimonial.text}"
                </blockquote>
                <p className="font-bold text-red-500">{testimonial.name}</p>
              </div>
            ))}
          </div>

          {/* Dots navigation */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === activeIndex ? "bg-red-500" : "bg-gray-600"
                }`}
                aria-label={`Testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
