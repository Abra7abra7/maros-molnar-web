"use client";

import { useCallback } from "react";
import AnimatedButton from "@/components/ui/animated-button";

export default function BackToTopButton() {
  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <AnimatedButton href="#" variant="primary" onClick={scrollToTop}>
      Späť hore
    </AnimatedButton>
  );
}
