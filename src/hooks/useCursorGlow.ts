import { useEffect } from 'react'

export function useCursorGlow(elementId: string) {
  useEffect(() => {
    const el = document.getElementById(elementId)
    if (!el) return

    const handleMouseMove = (e: MouseEvent) => {
      el.style.left = `${e.clientX}px`
      el.style.top = `${e.clientY}px`
    }

    document.addEventListener('mousemove', handleMouseMove)
    return () => document.removeEventListener('mousemove', handleMouseMove)
  }, [elementId])
}
