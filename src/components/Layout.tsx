import type { ReactNode } from 'react'
import type { Lang } from '@/data/types'
import { messages } from '@/data'
import { useSeo, type SeoInput } from '@/hooks/useSeo'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { BackToTop } from '@/components/BackToTop'

export function Layout({
  lang,
  seo,
  children,
}: {
  lang: Lang
  seo: Omit<SeoInput, 'lang'>
  children: ReactNode
}) {
  const t = messages[lang]

  useSeo({ lang, ...seo })

  return (
    <div className="min-h-screen">
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-accent focus:px-4 focus:py-2 focus:text-bg"
      >
        {t.nav.skipToContent}
      </a>
      <Navbar lang={lang} />
      <main id="conteudo" tabIndex={-1} className="outline-none">
        {children}
      </main>
      <Footer lang={lang} />
      <BackToTop lang={lang} />
    </div>
  )
}
