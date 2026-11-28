import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { messages } from '@/data'
import type { Lang } from '@/data/types'
import { useScrolled } from '@/hooks/useScrolled'
import { useActiveSection } from '@/hooks/useActiveSection'
import { LanguageSwitch } from '@/components/LanguageSwitch'
import { ThemeToggle } from '@/components/ThemeToggle'

export function Navbar({ lang }: { lang: Lang }) {
  const t = messages[lang]
  const home = lang === 'pt' ? '/' : '/en'
  const { pathname } = useLocation()
  const isHome = pathname === home

  const anchors = [
    { id: 'sobre', label: t.nav.about },
    { id: 'projetos', label: t.nav.projects },
    { id: 'experiencia', label: t.nav.experience },
    { id: 'stack', label: t.nav.stack },
    { id: 'contato', label: t.nav.contact },
  ]

  const scrolled = useScrolled()
  const activeId = useActiveSection(isHome ? anchors.map((a) => a.id) : [])
  const [open, setOpen] = useState(false)

  // Indicador sublinhado que desliza entre os itens do menu
  const listRef = useRef<HTMLUListElement>(null)
  const linkRefs = useRef<Record<string, HTMLAnchorElement | null>>({})
  const [bar, setBar] = useState({ left: 0, width: 0, visible: false })
  const [resizeTick, setResizeTick] = useState(0)

  useLayoutEffect(() => {
    const el = activeId ? linkRefs.current[activeId] : null
    if (!el) {
      setBar((b) => ({ ...b, visible: false }))
      return
    }
    setBar({ left: el.offsetLeft, width: el.offsetWidth, visible: true })
  }, [activeId, lang, resizeTick])

  useEffect(() => {
    const onResize = () => setResizeTick((n) => n + 1)
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  // Fecha o menu mobile com Esc e ao trocar de página
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  useEffect(() => setOpen(false), [pathname])

  return (
    <header
      className={`sticky top-0 z-40 border-b transition-[box-shadow,border-color,background-color,backdrop-filter] duration-200 ${
        scrolled
          ? 'border-border bg-bg/80 backdrop-blur-md shadow-[0_1px_12px_rgb(0_0_0/0.4)]'
          : 'border-transparent bg-bg'
      }`}
    >
      <div className="mx-auto flex max-w-content items-center justify-between gap-4 px-4 py-3 md:px-6">
        <Link to={home} className="font-mono text-base font-semibold tracking-tight text-fg">
          pedro<span className="text-accent">.</span>torisu
        </Link>

        <div className="flex items-center gap-2">
          <nav aria-label={t.nav.mainLabel} className="hidden md:block">
            <ul ref={listRef} className="relative flex gap-x-6 text-sm">
              {anchors.map(({ id, label }) => {
                const isActive = activeId === id
                return (
                  <li key={id}>
                    <Link
                      ref={(el) => {
                        linkRefs.current[id] = el
                      }}
                      to={`${home}#${id}`}
                      aria-current={isActive ? 'location' : undefined}
                      className={`inline-flex py-2 lowercase transition-colors duration-200 hover:text-fg ${isActive ? 'text-fg' : 'text-muted'}`}
                    >
                      {label}
                    </Link>
                  </li>
                )
              })}
              <span
                aria-hidden="true"
                className="pointer-events-none absolute bottom-0 h-0.5 rounded-full bg-accent transition-[transform,width,opacity] duration-300 ease-out"
                style={{
                  transform: `translateX(${bar.left}px)`,
                  width: bar.width,
                  opacity: bar.visible ? 1 : 0,
                }}
              />
            </ul>
          </nav>

          <div className="flex items-center gap-2 md:border-l md:border-border md:pl-4">
            <LanguageSwitch lang={lang} />
            <ThemeToggle lang={lang} />
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="menu-mobile"
              aria-label={open ? t.nav.menuClose : t.nav.menuOpen}
              className="flex h-9 w-9 items-center justify-center rounded-md border border-border text-muted transition-colors hover:border-accent hover:text-accent md:hidden"
            >
              {open ? <X size={18} aria-hidden="true" /> : <Menu size={18} aria-hidden="true" />}
            </button>
          </div>
        </div>
      </div>

      <div
        id="menu-mobile"
        className={`grid transition-[grid-template-rows,opacity,visibility] duration-300 ease-out md:hidden ${
          open ? 'visible grid-rows-[1fr] opacity-100' : 'invisible grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden">
          <nav aria-label={t.nav.mainLabel} className="border-t border-border px-4 py-3">
            <ul className="flex flex-col">
              {anchors.map(({ id, label }) => (
                <li key={id}>
                  <Link
                    to={`${home}#${id}`}
                    onClick={() => setOpen(false)}
                    className="block py-3 text-base lowercase text-fg transition-colors hover:text-accent"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}
