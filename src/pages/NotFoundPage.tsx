import { Link } from 'react-router-dom'
import { messages } from '@/data'
import { Layout } from '@/components/Layout'

export function NotFoundPage() {
  const t = messages.pt.caseStudy

  return (
    <Layout lang="pt">
      <section className="mx-auto max-w-content px-4 py-24 md:px-6">
        <h1 className="font-serif text-3xl font-medium text-fg">{t.notFound}</h1>
        <Link to="/" className="link mt-6 inline-block">
          {t.notFoundLink}
        </Link>
      </section>
    </Layout>
  )
}
