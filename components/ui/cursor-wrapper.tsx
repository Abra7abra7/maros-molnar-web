"use client";

import dynamic from "next/dynamic";

// Dynamicky importujeme AnimatedCursor, aby sa načítal len na klientskej strane
const AnimatedCursor = dynamic(
  () => import("@/components/ui/animated-cursor"),
  { ssr: false }
);

export default function CursorWrapper() {
  return <AnimatedCursor />;
}
