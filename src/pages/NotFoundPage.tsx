import { Link } from 'react-router-dom'
import { messages, site } from '@/data'
import { Layout } from '@/components/Layout'

export function NotFoundPage() {
  const t = messages.pt.caseStudy

  return (
    <Layout lang="pt" seo={{ title: `Página não encontrada · ${site.name}`, description: messages.pt.meta.description, ptPath: '/' }}>
      <section className="mx-auto max-w-content px-4 py-24 md:px-6">
        <h1 className="font-serif text-3xl font-medium text-fg">{t.notFound}</h1>
        <Link to="/" className="link mt-6 inline-block">
          {t.notFoundLink}
        </Link>
      </section>
    </Layout>
  )
}
