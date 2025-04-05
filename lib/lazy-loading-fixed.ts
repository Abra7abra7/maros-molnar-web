'use client';

import dynamic from 'next/dynamic';
import React from 'react';

// Simple dynamic import with no JSX in the code
export const lazyLoadComponent = (importPath, fallback = null) => {
  return dynamic(() => importPath(), {
    loading: function LoadingComponent() {
      return fallback;
    }
  });
};

// Simple prefetch function with no complex types
export const prefetchComponent = (importPath) => {
  if (typeof window === 'undefined') return;
  
  setTimeout(() => {
    importPath();
  }, 1000);
};
