'use client'

import dynamic from 'next/dynamic'
import type { ComponentType, ReactNode } from 'react'

/**
 * Vytvorí dynamicky načítaný komponent
 */
export function lazyLoadComponent<T = {}>(  
  importFunc: () => Promise<{ default: ComponentType<T> }>,
  loadingComponent: ReactNode = null
) {
  return dynamic(importFunc, {
    loading: () => <>{loadingComponent}</>,
  })
}

/**
 * Predbežne načíta komponent
 */
export function prefetchComponent(
  importFunc: () => Promise<any>
): void {
  if (typeof window === 'undefined') return
  
  setTimeout(() => {
    importFunc()
  }, 1000)
}
