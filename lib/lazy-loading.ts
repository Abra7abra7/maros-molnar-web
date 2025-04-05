/**
 * Utility pre lazy loading komponentov
 * Vylepšuje výkon načítavania stránky, najmä na mobilných zariadeniach
 */
'use client'

import dynamic from 'next/dynamic'
import React, { ReactNode } from 'react'

type ComponentImportFunction<P> = () => Promise<{ default: React.ComponentType<P> }>

/**
 * Lazy loading komponentov s fallback obsahom
 */
export function lazyLoadComponent<P extends object>(
  importFunction: ComponentImportFunction<P>,
  fallbackContent: ReactNode = null,
  serverSideRendering = false
) {
  const DynamicComponent = dynamic(() => importFunction(), {
    loading: () => <>{fallbackContent}</>,
    ssr: serverSideRendering
  })

  const WrappedComponent = (props: P) => (
    <React.Suspense fallback={fallbackContent}>
      <DynamicComponent {...props} />
    </React.Suspense>
  )

  return WrappedComponent
}

/**
 * Konfigurácia pre preloadovanie dôležitých komponentov
 * Preload môže byť vykonaný v momentoch nízkeho zaťaženia prehliadača
 */
export function prefetchComponent(
  importFunction: () => Promise<any>,
  lowPriority = true
): void {
  // Only run in browser
  if (typeof window === 'undefined') return

  // Try to use requestIdleCallback for low-priority loading
  if (lowPriority && typeof window.requestIdleCallback === 'function') {
    window.requestIdleCallback(() => {
      importFunction()
    })
  } else {
    // Fallback: Load with delay
    setTimeout(() => {
      importFunction()
    }, 1000)
  }
}
