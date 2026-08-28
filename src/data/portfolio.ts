// ─── TYPES ─────────────────────────────────────────────────────────────────

export interface Project {
  id: string
  title: string
  description: string
  tags: string[]
  icon: string          // Lucide icon name
  featured?: boolean
  color?: 'purple' | 'green' | 'blue' | 'pink'
  githubUrl?: string
  liveUrl?: string
  privateRepo?: boolean
  stealth?: boolean
  statusLabel?: string
  stats?: { value: string; label: string }[]
}

export interface Experience {
  id: string
  period: string
  role: string
  company: string
  location: string
  points: string[]
  tags: string[]
  current?: boolean
}

export interface StackCategory {
  id: string
  label: string
  icon: string          // Lucide icon name
  color: 'purple' | 'green' | 'blue' | 'amber' | 'pink' | 'gray'
  items: string[]
}

export interface ContactLink {
  id: string
  label: string
  value: string
  icon: string          // Lucide icon name
  href: string
}

// ─── SITE META ──────────────────────────────────────────────────────────────

export const siteMeta = {
  name: 'Pedro Torisu',
  role: 'Full Stack Developer',
  tagline: 'Node.js · Java · React · TypeScript',
  location: 'São João del-Rei, MG · Brasil',
  email: 'pedrohenriquetlemos@gmail.com',
  linkedinUrl: 'https://linkedin.com/in/pedrotorisulemos',
  githubUrl: 'https://github.com/PedroHTLemos',
  cvUrl: '#',
  available: true,
}

// ─── HERO STATS ─────────────────────────────────────────────────────────────

export const heroStats = [
  { value: '1', suffix: '+', label: 'ano em produção' },
  { value: '32', suffix: '+', label: 'projetos entregues' },
  { value: 'C', suffix: '1', label: 'inglês avançado' },
]

// ─── ABOUT ──────────────────────────────────────────────────────────────────

export const aboutParagraphs = [
  'Sou desenvolvedor Full Stack com formação em <strong>Ciência da Computação pela UFSJ</strong> (conclusão em 2026) e experiência real em produção. Trabalhei na <strong>dti digital</strong>, uma das maiores consultorias de tecnologia do Brasil, entregando APIs críticas com zero downtime.',
  'Desde 2023 atuo como <strong>freelancer Full Stack</strong>, desenvolvendo soluções sob medida para clientes: refatorações, sistemas de gestão e APIs REST, sempre com foco em qualidade, arquitetura limpa e resultado mensurável.',
  'Fui <strong>Diretor de Projetos na Empresa Júnior Linked/UFSJ</strong>, coordenando 32 projetos web com taxa de aprovação acima de 90%. Aprendi a traduzir requisitos de negócio em soluções técnicas viáveis. Inglês C1: confortável em documentações, PRs e times multiculturais.',
]


// ─── PROJECTS ───────────────────────────────────────────────────────────────

export const projects: Project[] = [
  {
    id: 'amillan',
    title: 'Amillan · SaaS de Planejamento de Viagens com IA',
    description:
      'Plataforma SaaS brasileira de planejamento de viagens com IA: o usuário descreve a viagem em linguagem natural e recebe um roteiro completo dia a dia (hospedagem, atrações, logística, cálculo de rotas e estimativa de pedágios) integrado a plataformas de reserva. Três fluxos de geração (chat com IA, Road Trip com estimativa de combustível/pedágios via 966 postos indexados em PostGIS, e descoberta de destino por IA), roteamento real via OSRM + PostGIS e roteador de modelo de IA por plano (Gemini 2.5 Flash / DeepSeek com fallback automático). Inclui pagamentos via Stripe, painéis Business e Concierge, app mobile via Capacitor e conformidade com a LGPD.',
    tags: ['React + Vite', 'TypeScript', 'Tailwind CSS', 'Node.js + Express', 'PostgreSQL / PostGIS', 'Prisma', 'Gemini 2.5 + DeepSeek', 'OSRM + Leaflet', 'Stripe', 'Capacitor'],
    icon: 'Map',
    featured: true,
    color: 'purple',
    liveUrl: 'https://amillan.com.br',
  },
  {
    id: 'high-performance-patterns',
    title: 'API Gateway · High-Performance Patterns',
    description:
      'Serviço de API Gateway com FastAPI e Redis, priorizando profundidade de infraestrutura e corretude algorítmica em vez de lógica de CRUD. Rate limiting configurável entre Fixed Window e Sliding Window Log, cache-aside com lock distribuído anti-stampede e benchmark com k6: cache HIT ~14ms vs MISS ~270ms, ~19x de speedup em steady-state.',
    tags: ['FastAPI', 'Redis', 'Python 3.12', 'Docker', 'Rate Limiting', 'ASGI Middleware', 'k6'],
    icon: 'Gauge',
    color: 'blue',
    githubUrl: 'https://github.com/PedroHTLemos/high-performance-patterns-fastapi',
  },
  {
    id: 'async-task-hub',
    title: 'AsyncTask Hub · Processamento Assíncrono de Imagens',
    description:
      'API assíncrona de processamento de imagens com foco em padrões de infraestrutura de produção: fila distribuída via Celery, idempotência por hash SHA-256, Dead Letter Queue e graceful shutdown sem perda de tarefas em restart. Rate limiting por IP e suíte de testes automatizados com Pytest cobrindo upload, idempotência, status e ambos os caminhos de falha da DLQ.',
    tags: ['FastAPI', 'Celery', 'Redis', 'PostgreSQL', 'SQLAlchemy', 'Pillow', 'Flower', 'Pytest'],
    icon: 'Images',
    color: 'green',
    githubUrl: 'https://github.com/PedroHTLemos/async-task-hub',
  },
  {
    id: 'legacy-refactor',
    title: 'Redesign & Internacionalização · Site Institucional B2B',
    description:
      'Redesign completo de site institucional para indústria B2B, migrando de refatoração pontual para reconstrução ampla: novo layout responsivo em todas as páginas, sistema de tradução próprio em português, inglês e espanhol (substituindo tradução automática do navegador) com rotas dedicadas por idioma, e tradução de catálogo com 82 produtos, segmentos, departamentos e materiais de download. Painel administrativo próprio com CRUD de conteúdo, gestão de mensagens de contato e aba de revisão de traduções com exportação/importação via CSV. Corrigi também SEO multilíngue (meta tags por idioma), bug intermitente que expunha chaves de tradução em produção, e perda de idioma na navegação interna do catálogo.',
    tags: ['Next.js 15', 'TypeScript', 'Node.js + Express', 'Supabase / PostgreSQL', 'next-i18next', 'Chakra UI', 'Framer Motion', 'Freelance', '2026'],
    icon: 'Globe2',
    color: 'green',
  },
  {
    id: 'supplier-system',
    title: 'Sistema de Gestão Empresa–Fornecedor',
    description:
      'API REST completa com Java (Spring Boot) + Angular: autenticação JWT, CRUD completo, testes unitários e banco relacional normalizado. SOLID e Clean Architecture aplicados do início ao fim.',
    tags: ['Java', 'Spring Boot', 'Angular', 'JWT', 'Acadêmico'],
    icon: 'Building2',
    color: 'blue',
    githubUrl: '#',
  },
  {
    id: 'alexa-app',
    title: 'App Mobile + Alexa Skill (TCC)',
    description:
      'Aplicativo Android (Java) integrado a uma Alexa Skill (Node.js): integração de sistemas heterogêneos com arquitetura orientada a eventos e UX por voz. Repositório privado por restrição acadêmica.',
    tags: ['Android', 'Java', 'Node.js', 'Alexa SDK', 'TCC'],
    icon: 'Mic',
    color: 'pink',
    privateRepo: true,
  },
  {
    id: 'dti-apis',
    title: 'APIs REST · dti digital',
    description:
      'APIs RESTful com Node.js + TypeScript para sistemas corporativos de médio porte. Zero downtime em 1 ano de estágio, queries otimizadas (−40% no tempo de resposta) e CI/CD reduzindo deploy de 45 min para 8 min.',
    tags: ['Node.js', 'TypeScript', 'Docker', 'SQL Server', 'Corporativo'],
    icon: 'Zap',
    color: 'purple',
  },
]

// ─── EXPERIENCE ─────────────────────────────────────────────────────────────

export const experiences: Experience[] = [
  {
    id: 'freelancer',
    period: 'Abr 2023 – presente',
    role: 'Desenvolvedor Full Stack Freelancer',
    company: 'Autônomo',
    location: 'Remoto',
    current: true,
    points: [
      'Desenvolvimento de sistemas web sob demanda para clientes de diferentes segmentos: do levantamento de requisitos à entrega em produção.',
      'Refatoração de sistemas legados com React + SQL Server: eliminação de débito técnico, separação de camadas e melhoria de performance.',
      'Construção de APIs REST com Node.js/TypeScript e Java (Spring Boot), com foco em Clean Architecture e boas práticas.',
      'Gestão autônoma de projetos, prazos e comunicação direta com clientes, experiência que complementa a visão técnica com visão de produto.',
    ],
    tags: ['Node.js', 'React', 'Java', 'Spring Boot', 'SQL Server', 'TypeScript'],
  },
  {
    id: 'dti',
    period: 'Abr 2022 – Abr 2023',
    role: 'Estagiário de Desenvolvimento de Software',
    company: 'dti digital',
    location: 'Belo Horizonte, MG',
    points: [
      'Desenvolvi e mantive <strong>APIs REST com Node.js + TypeScript</strong> para sistemas corporativos de médio porte: zero downtime ao longo de todo o estágio.',
      'Otimizei queries SQL Server com profiling e índices compostos: <strong>redução de ~40% no tempo de resposta</strong> de relatórios financeiros críticos.',
      'Automatizei pipeline CI/CD com Docker, <strong>reduzindo deploy manual de 45 min para menos de 8 min</strong> e aumentando frequência de entregas do time.',
      'Conduzi <strong>+50 code reviews</strong> em Scrum, elevando cobertura de testes do time de 62% para 81%.',
    ],
    tags: ['Node.js', 'TypeScript', 'SQL Server', 'Docker', 'CI/CD', 'Scrum'],
  },
  {
    id: 'linked',
    period: 'Ago 2019 – Jan 2022',
    role: 'Diretor de Projetos',
    company: 'Linked – Empresa Júnior UFSJ',
    location: 'São João del-Rei, MG',
    points: [
      'Coordenei entrega de <strong>32 projetos web</strong> (React + APIs REST) com taxa de aprovação acima de 90%, liderando equipes de até 6 desenvolvedores.',
      'Implantei padrão de <strong>componentização React e Clean Code</strong>: onboarding de novos membros reduziu de 3 semanas para 5 dias.',
      'Atuei como interface técnica com clientes, <strong>traduzindo requisitos de negócio</strong> em soluções viáveis e priorizando entregas por impacto.',
    ],
    tags: ['React', 'APIs REST', 'Liderança', 'Clean Code', 'Kanban'],
  },
]

// ─── STACK ──────────────────────────────────────────────────────────────────

export const stackCategories: StackCategory[] = [
  {
    id: 'backend',
    label: 'Back-end',
    icon: 'Server',
    color: 'purple',
    items: ['Node.js', 'TypeScript', 'Express', 'NestJS', 'FastAPI', 'Python', 'Celery', 'APIs REST', 'JWT', 'SOLID'],
  },
  {
    id: 'java',
    label: 'Java',
    icon: 'Coffee',
    color: 'amber',
    items: ['Java 8+', 'Spring Boot', 'Spring MVC', 'Design Patterns', 'Clean Arch'],
  },
  {
    id: 'frontend',
    label: 'Front-end',
    icon: 'Monitor',
    color: 'green',
    items: ['React', 'Vite', 'Next.js', 'Angular', 'TypeScript', 'Tailwind CSS', 'Capacitor'],
  },
  {
    id: 'ai-geo',
    label: 'IA & Geo',
    icon: 'Brain',
    color: 'pink',
    items: ['Gemini 2.5 Flash', 'Vertex AI', 'DeepSeek', 'PostGIS', 'OSRM', 'Leaflet', 'Nominatim'],
  },
  {
    id: 'saas',
    label: 'SaaS & Integrações',
    icon: 'Layers',
    color: 'blue',
    items: ['Stripe', 'Supabase', 'Resend', 'Prisma ORM', 'PostgreSQL', 'MongoDB'],
  },
  {
    id: 'cloud',
    label: 'Cloud & Infra',
    icon: 'Cloud',
    color: 'blue',
    items: ['Docker', 'CI/CD', 'GitHub Actions', 'AWS Lambda', 'Vercel', 'Render'],
  },
  {
    id: 'data',
    label: 'Dados',
    icon: 'Database',
    color: 'pink',
    items: ['SQL Server', 'MySQL', 'PostgreSQL', 'MongoDB', 'Redis', 'Prisma'],
  },
  {
    id: 'practices',
    label: 'Práticas',
    icon: 'GitBranch',
    color: 'gray',
    items: ['TDD', 'Code Review', 'Scrum', 'Kanban', 'Git / GitHub', 'Clean Code'],
  },
]

// ─── CONTACT ────────────────────────────────────────────────────────────────

export const contactLinks: ContactLink[] = [
  {
    id: 'email',
    label: 'Email',
    value: 'pedrohenriquetlemos@gmail.com',
    icon: 'Mail',
    href: 'mailto:pedrohenriquetlemos@gmail.com',
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    value: 'linkedin.com/in/pedro-torisu',
    icon: 'Linkedin',
    href: 'https://linkedin.com/in/pedrotorisulemos',
  },
  {
    id: 'github',
    label: 'GitHub',
    value: 'github.com/PedroHTLemos',
    icon: 'Github',
    href: 'https://github.com/PedroHTLemos',
  },
  {
    id: 'location',
    label: 'Localização',
    value: 'São João del-Rei, MG · Brasil',
    icon: 'MapPin',
    href: '#',
  },
]