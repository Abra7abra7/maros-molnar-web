import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4 bg-black">
      <h1 className="text-6xl md:text-9xl font-bold text-red-600">404</h1>
      <h2 className="text-3xl md:text-4xl font-bold mt-6 mb-8 text-white">Stránka nenájdená</h2>
      <p className="text-xl text-gray-300 max-w-md mb-8">
        Ľutujeme, ale stránka, ktorú hľadáte, neexistuje alebo bola odstránená.
      </p>
      <Link href="/">
        <Button variant="red" size="lg">
          Späť na domovskú stránku
        </Button>
      </Link>
    </div>
  );
}
