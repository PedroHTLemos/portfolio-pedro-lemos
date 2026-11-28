import { useEffect, useState } from 'react'

/**
 * Retorna o id da seção que ocupa a parte alta da tela (scrollspy).
 * Ao chegar ao fim da página, retorna a última seção.
 */
export function useActiveSection(ids: string[]) {
  const [active, setActive] = useState<string>('')
  const key = ids.join('|')

  useEffect(() => {
    const list = key ? key.split('|') : []
    if (list.length === 0) return

    let frame = 0
    const compute = () => {
      frame = 0
      const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4
      if (atBottom) {
        setActive(list[list.length - 1])
        return
      }
      const line = window.innerHeight * 0.35
      let current = ''
      for (const id of list) {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top <= line) current = id
      }
      setActive(current)
    }
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(compute)
    }

    compute()
    window.addEventListener('scroll', schedule, { passive: true })
    window.addEventListener('resize', schedule)
    return () => {
      window.removeEventListener('scroll', schedule)
      window.removeEventListener('resize', schedule)
      if (frame) cancelAnimationFrame(frame)
    }
  }, [key])

  return active
}
