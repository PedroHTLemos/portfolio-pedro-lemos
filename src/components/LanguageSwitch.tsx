import { Link, useLocation } from 'react-router-dom'
import type { Lang } from '@/data/types'
import { messages } from '@/data'

/**
 * Alterna entre a rota atual em PT e sua equivalente em EN (prefixo /en).
 * Preserva o caminho, a query e o hash.
 */
export function LanguageSwitch({ lang }: { lang: Lang }) {
  const { pathname, search, hash } = useLocation()
  const t = messages[lang]
  const other: Lang = lang === 'pt' ? 'en' : 'pt'

  const targetPath =
    lang === 'pt'
      ? pathname === '/' ? '/en' : `/en${pathname}`
      : pathname.replace(/^\/en(?=\/|$)/, '') || '/'

  return (
    <Link
      to={`${targetPath}${search}${hash}`}
      hrefLang={other === 'pt' ? 'pt-BR' : 'en'}
      lang={other === 'pt' ? 'pt-BR' : 'en'}
      aria-label={t.nav.languageSwitch}
      className="inline-flex h-9 items-center rounded-md border border-border px-3 text-sm font-medium text-fg transition-colors hover:border-accent hover:text-accent"
    >
      {other === 'pt' ? 'PT' : 'EN'}
    </Link>
  )
}
