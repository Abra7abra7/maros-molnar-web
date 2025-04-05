'use client'

import dynamic from 'next/dynamic'
import type { ComponentType, ReactNode } from 'react'

interface ComponentImport<Props = Record<string, unknown>> {
  (): Promise<{ default: ComponentType<Props> }>
}

/**
 * Dynamicky načíta komponent s možnosťou zobraziť fallback počas načítavania
 */
export function lazyLoadComponent(importPath: ComponentImport, fallback: ReactNode = null) {
  return dynamic(() => importPath(), {
    loading: function LoadingComponent() {
      return fallback
    }
  })
}

/**
 * Predbežne načíta komponent pre rýchlejšie zobrazenie v budúcnosti
 */
export function prefetchComponent(importPath: ComponentImport) {
  // Spustí sa len v prehliadači
  if (typeof window === 'undefined') return
  
  // Načíta modul s malým oneskorením, aby neblokoval dôležitejšie operácie
  setTimeout(() => {
    importPath()
  }, 1000)
}
