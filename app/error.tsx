"use client";

import { useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-4xl md:text-6xl font-bold text-red-600 mb-6">Ups! Niečo sa pokazilo</h1>
      <p className="text-xl text-gray-600 max-w-md mb-8">
        Ľutujeme, ale vyskytla sa neočakávaná chyba. Skúste stránku obnoviť alebo sa vráťte na domovskú stránku.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Button 
          onClick={reset}
          variant="outline"
          size="lg"
        >
          Skúsiť znova
        </Button>
        <Link href="/">
          <Button variant="red" size="lg">
            Späť na domovskú stránku
          </Button>
        </Link>
      </div>
    </div>
  );
}
