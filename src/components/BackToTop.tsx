import { ArrowUp } from 'lucide-react'
import { useEffect, useState } from 'react'
import type { Lang } from '@/data/types'
import { messages } from '@/data'

/** Aparece depois de rolar a página e volta ao topo ao ser acionado */
export function BackToTop({ lang }: { lang: Lang }) {
  const [visible, setVisible] = useState(false)
  const label = messages[lang].nav.backToTop

  useEffect(() => {
    const update = () => setVisible(window.scrollY > 600)
    update()
    window.addEventListener('scroll', update, { passive: true })
    return () => window.removeEventListener('scroll', update)
  }, [])

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label={label}
      title={label}
      className={`fixed bottom-6 right-6 z-40 flex h-11 w-11 items-center justify-center rounded-full border border-border bg-surface text-fg shadow-md transition-[opacity,transform,visibility,border-color,color] duration-200 hover:border-accent hover:text-accent ${
        visible ? 'visible translate-y-0 opacity-100' : 'invisible translate-y-2 opacity-0'
      }`}
    >
      <ArrowUp size={18} aria-hidden="true" />
    </button>
  )
}
