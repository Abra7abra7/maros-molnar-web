'use client';

import dynamic from 'next/dynamic';
import type { ComponentType, ReactNode } from 'react';

type ComponentImport<Props = Record<string, unknown>> = () => Promise<{ default: ComponentType<Props> }>;

// Simple dynamic import with no JSX in the code
export const lazyLoadComponent = (importPath: ComponentImport, fallback: ReactNode = null) => {
  return dynamic(() => importPath(), {
    loading: function LoadingComponent() {
      return fallback;
    }
  });
};

// Simple prefetch function with no complex types
export const prefetchComponent = (importPath: ComponentImport) => {
  if (typeof window === 'undefined') return;
  
  setTimeout(() => {
    importPath();
  }, 1000);
};
