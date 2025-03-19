import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface AboutSectionProps {
  title: string;
  description: string;
  imageSrc: string;
  ctaText?: string;
  ctaLink?: string;
}

export default function AboutSection({
  title,
  description,
  imageSrc,
  ctaText,
  ctaLink,
}: AboutSectionProps) {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative h-[500px] rounded-lg overflow-hidden shadow-xl">
            <Image
              src={imageSrc}
              alt={title}
              fill
              className="object-cover"
            />
          </div>
          
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">{title}</h2>
            <div className="text-gray-300 space-y-4">
              {description.split('\n\n').map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
            
            {ctaText && ctaLink && (
              <div className="mt-8">
                <Link href={ctaLink}>
                  <Button variant="red">
                    {ctaText}
                  </Button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
