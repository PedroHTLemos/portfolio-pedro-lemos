import {
  siAngular,
  siCelery,
  siCloudflarepages,
  siDeepseek,
  siDjango,
  siDocker,
  siExpress,
  siFastapi,
  siFlyway,
  siGithubactions,
  siGooglegemini,
  siJavascript,
  siJest,
  siK6,
  siLeaflet,
  siMongodb,
  siMysql,
  siNestjs,
  siNextdotjs,
  siNodedotjs,
  siOpenjdk,
  siPostgresql,
  siPrisma,
  siPytest,
  siPython,
  siReact,
  siReactquery,
  siRedis,
  siRender,
  siResend,
  siSentry,
  siSpringboot,
  siStripe,
  siSupabase,
  siTailwindcss,
  siTypescript,
  siVercel,
  siVite,
  siVitest,
  siZod,
  siCapacitor,
} from 'simple-icons'

type SimpleIcon = { path: string; title: string }

/** Ícones por nome exibido no stack (self-hosted, vindos do pacote simple-icons). */
const icons: Record<string, SimpleIcon> = {
  'Node.js': siNodedotjs,
  TypeScript: siTypescript,
  Express: siExpress,
  Zod: siZod,
  Python: siPython,
  FastAPI: siFastapi,
  Celery: siCelery,
  Java: siOpenjdk,
  'Spring Boot': siSpringboot,
  React: siReact,
  'Next.js': siNextdotjs,
  Vite: siVite,
  Angular: siAngular,
  JavaScript: siJavascript,
  'TanStack Query': siReactquery,
  'Tailwind CSS': siTailwindcss,
  Capacitor: siCapacitor,
  PostgreSQL: siPostgresql,
  PostGIS: siPostgresql,
  Prisma: siPrisma,
  Supabase: siSupabase,
  MySQL: siMysql,
  Redis: siRedis,
  Flyway: siFlyway,
  Vitest: siVitest,
  Jest: siJest,
  Pytest: siPytest,
  k6: siK6,
  Docker: siDocker,
  'GitHub Actions': siGithubactions,
  Render: siRender,
  Vercel: siVercel,
  'Cloudflare Pages': siCloudflarepages,
  Sentry: siSentry,
  Stripe: siStripe,
  Resend: siResend,
  NestJS: siNestjs,
  MongoDB: siMongodb,
  Django: siDjango,
  'Gemini (Vertex AI)': siGooglegemini,
  'DeepSeek API': siDeepseek,
  Leaflet: siLeaflet,
}

export function techIcon(name: string): SimpleIcon | undefined {
  return icons[name]
}

/** Ícone de tecnologia em SVG, na cor de destaque. Decorativo: o nome segue no texto. */
export function TechIcon({ name }: { name: string }) {
  const icon = techIcon(name)
  if (!icon) return null
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" className="h-3.5 w-3.5 shrink-0 fill-current text-muted transition-colors duration-200 group-hover:text-accent">
      <path d={icon.path} />
    </svg>
  )
}
