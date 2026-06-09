import { useState } from 'react'
import { siteMeta } from '@/data/portfolio'

const navLinks = [
  { href: '#sobre', label: 'Sobre' },
  { href: '#projetos', label: 'Projetos' },
  { href: '#experiencia', label: 'Experiência' },
  { href: '#stack', label: 'Stack' },
  { href: '#contato', label: 'Contato' },
]

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const handleNavClick = (href: string) => {
    const el = document.querySelector(href)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
    setMenuOpen(false)
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 h-[70px] flex items-center justify-between px-5 md:px-20 bg-bg/70 backdrop-blur-xl border-b border-border-subtle">
      {/* Logo */}
      <a
        href="#"
        className="font-syne font-extrabold text-xl tracking-tight text-text-1"
        onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
      >
        Pedro Torisu<span className="text-accent">.</span>
      </a>

      {/* Desktop links */}
      <ul className="hidden md:flex gap-9 list-none">
        {navLinks.map(({ href, label }) => (
          <li key={href}>
            <button
              onClick={() => handleNavClick(href)}
              className="text-sm text-text-2 font-normal tracking-wide hover:text-text-1 transition-colors duration-200 relative group bg-transparent border-0 cursor-pointer"
            >
              {label}
              <span className="absolute -bottom-1 left-0 right-0 h-px bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-200" />
            </button>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <a
        href={`mailto:${siteMeta.email}`}
        className="hidden md:inline-flex px-5 py-2 bg-accent text-white rounded-lg text-sm font-medium hover:bg-accent/85 hover:-translate-y-px transition-all duration-200"
      >
        Vamos conversar →
      </a>

      {/* Mobile menu button */}
      <button
        className="flex md:hidden flex-col gap-[5px] bg-transparent border-0 cursor-pointer p-2"
        aria-label="Menu"
        onClick={() => setMenuOpen((v) => !v)}
      >
        <span className={`w-[22px] h-[1.5px] bg-text-1 block transition-all duration-200 ${menuOpen ? 'rotate-45 translate-y-[6.5px]' : ''}`} />
        <span className={`w-[22px] h-[1.5px] bg-text-1 block transition-all duration-200 ${menuOpen ? 'opacity-0' : ''}`} />
        <span className={`w-[22px] h-[1.5px] bg-text-1 block transition-all duration-200 ${menuOpen ? '-rotate-45 -translate-y-[6.5px]' : ''}`} />
      </button>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="absolute top-[70px] left-0 right-0 bg-bg-2/95 backdrop-blur-xl border-b border-border-subtle p-6 flex flex-col gap-4 md:hidden">
          {navLinks.map(({ href, label }) => (
            <button
              key={href}
              onClick={() => handleNavClick(href)}
              className="text-left text-base text-text-2 hover:text-text-1 transition-colors bg-transparent border-0 cursor-pointer"
            >
              {label}
            </button>
          ))}
          <a
            href={`mailto:${siteMeta.email}`}
            className="mt-2 inline-flex justify-center px-5 py-3 bg-accent text-white rounded-lg text-sm font-medium"
          >
            Vamos conversar →
          </a>
        </div>
      )}
    </nav>
  )
}
