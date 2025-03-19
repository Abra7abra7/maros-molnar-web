import Link from "next/link";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface Service {
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
}

interface ServicesOverviewProps {
  title: string;
  description: string;
  services: Service[];
}

export default function ServicesOverview({
  title,
  description,
  services,
}: ServicesOverviewProps) {
  return (
    <section className="py-16 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">{title}</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            {description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300 bg-gray-800 text-white">
              <CardHeader>
                <div className="mb-4 text-red-500">{service.icon}</div>
                <CardTitle className="text-white">{service.title}</CardTitle>
                <CardDescription className="text-gray-300">{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                {/* Content can be added here if needed */}
              </CardContent>
              <CardFooter>
                <Link href={service.link} className="w-full">
                  <Button variant="outline-red" className="w-full">
                    Zistiť viac
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
