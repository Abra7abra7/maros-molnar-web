/**
 * Utility pre lazy loading komponentov
 * Vylepšuje výkon načítavania stránky, najmä na mobilných zariadeniach
 */
'use client'

import dynamic from 'next/dynamic'
import { ReactNode, Suspense } from 'react'

/**
 * Lazy loading komponentov s fallback obsahom
 */
export function lazyLoadComponent<T>(
  importFunc: () => Promise<{ default: React.ComponentType<T> }>,
  fallback: ReactNode = null,
  ssr: boolean = false
) {
  const LazyComponent = dynamic(importFunc, {
    loading: () => <>{fallback}</>,
    ssr,
  })
  
  return (props: T) => (
    <Suspense fallback={fallback}>
      <LazyComponent {...props} />
    </Suspense>
  )
}

/**
 * Konfigurácia pre preloadovanie dôležitých komponentov
 * Preload môže byť vykonaný v momentoch nízkeho zaťaženia prehliadača
 */
export function prefetchComponent(
  importFunc: () => Promise<any>,
  prefetchAsLowPriority: boolean = true
) {
  if (typeof window === 'undefined') return
  
  // Plánuj načítanie počas idle času prehliadača alebo s oneskorením
  if (prefetchAsLowPriority && 'requestIdleCallback' in window) {
    // @ts-ignore - requestIdleCallback nie je v TypeScript definícii, ale funguje v moderných prehliadačoch
    window.requestIdleCallback(() => {
      importFunc()
    })
  } else {
    // Fallback: načítaj s oneskorením
    setTimeout(() => {
      importFunc()
    }, 1000)
  }
}
