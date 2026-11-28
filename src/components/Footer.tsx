import type { Lang } from '@/data/types'
import { messages, site } from '@/data'

export function Footer({ lang }: { lang: Lang }) {
  const t = messages[lang].footer
  const year = new Date().getFullYear()

  return (
    <footer className="mt-24 border-t border-border">
      <div className="mx-auto flex max-w-content flex-wrap justify-between gap-2 px-4 py-8 text-sm text-muted md:px-6">
        <span>
          © {year} {site.name}. {t.rights}
        </span>
        <span>{t.role}</span>
      </div>
    </footer>
  )
}
