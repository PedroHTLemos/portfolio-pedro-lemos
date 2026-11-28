import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import type { Lang } from '@/data/types'
import { messages } from '@/data'
import { Layout } from '@/components/Layout'
import { Hero } from '@/sections/Hero'
import { About } from '@/sections/About'
import { Projects } from '@/sections/Projects'
import { Experience } from '@/sections/Experience'
import { Stack } from '@/sections/Stack'
import { Others } from '@/sections/Others'
import { Contact } from '@/sections/Contact'
import { Reveal } from '@/components/Reveal'

export function HomePage({ lang }: { lang: Lang }) {
  const { hash } = useLocation()

  // Rolagem para a âncora ao chegar por link interno (ex.: /#projetos)
  useEffect(() => {
    if (!hash) return
    document.getElementById(hash.slice(1))?.scrollIntoView({ block: 'start' })
  }, [hash])

  const t = messages[lang].meta

  return (
    <Layout lang={lang} seo={{ title: t.title, description: t.description, ptPath: '/' }}>
      <Hero lang={lang} />
      <Reveal>
        <About lang={lang} />
      </Reveal>
      <Reveal>
        <Projects lang={lang} />
      </Reveal>
      <Reveal>
        <Experience lang={lang} />
      </Reveal>
      <Reveal>
        <Stack lang={lang} />
      </Reveal>
      <Reveal>
        <Others lang={lang} />
      </Reveal>
      <Reveal>
        <Contact lang={lang} />
      </Reveal>
    </Layout>
  )
}
