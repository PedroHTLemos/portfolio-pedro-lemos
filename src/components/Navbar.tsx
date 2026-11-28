import { Link } from 'react-router-dom'
import { messages } from '@/data'
import type { Lang } from '@/data/types'
import { site } from '@/data/site'
import { LanguageSwitch } from '@/components/LanguageSwitch'
import { ThemeToggle } from '@/components/ThemeToggle'

export function Navbar({ lang }: { lang: Lang }) {
  const t = messages[lang]
  const home = lang === 'pt' ? '/' : '/en'

  const anchors = [
    { id: 'sobre', label: t.nav.about },
    { id: 'projetos', label: t.nav.projects },
    { id: 'experiencia', label: t.nav.experience },
    { id: 'stack', label: t.nav.stack },
    { id: 'contato', label: t.nav.contact },
  ]

  return (
    <header className="border-b border-border bg-bg">
      <div className="mx-auto flex max-w-content flex-wrap items-center justify-between gap-x-6 gap-y-3 px-4 py-4 md:px-6">
        <Link to={home} className="font-serif text-xl font-semibold text-fg">
          {site.name}
        </Link>

        <div className="flex items-center gap-2">
          <LanguageSwitch lang={lang} />
          <ThemeToggle lang={lang} />
        </div>

        <nav aria-label={t.nav.mainLabel} className="w-full md:w-auto">
          <ul className="flex flex-wrap gap-x-5 gap-y-1 text-sm text-muted">
            {anchors.map(({ id, label }) => (
              <li key={id}>
                <Link to={`${home}#${id}`} className="inline-flex py-1 hover:text-fg hover:underline underline-offset-4">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
