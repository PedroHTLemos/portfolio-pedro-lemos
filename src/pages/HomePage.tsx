import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import type { Lang } from '@/data/types'
import { Layout } from '@/components/Layout'
import { Hero } from '@/sections/Hero'

export function HomePage({ lang }: { lang: Lang }) {
  const { hash } = useLocation()

  // Rolagem para a âncora ao chegar por link interno (ex.: /#projetos)
  useEffect(() => {
    if (!hash) return
    document.getElementById(hash.slice(1))?.scrollIntoView({ block: 'start' })
  }, [hash])

  return (
    <Layout lang={lang}>
      <Hero lang={lang} />
    </Layout>
  )
}
