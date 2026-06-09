// ─── TYPES ─────────────────────────────────────────────────────────────────

export interface Project {
  id: string
  title: string
  description: string
  tags: string[]
  icon: string
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
  emoji: string
  color: 'purple' | 'green' | 'blue' | 'amber' | 'pink' | 'gray'
  items: string[]
}

export interface ContactLink {
  id: string
  label: string
  value: string
  icon: string
  href: string
}

// ─── SITE META ──────────────────────────────────────────────────────────────

export const siteMeta = {
  name: 'Pedro Torisu',
  role: 'Full Stack Developer',
  tagline: 'Node.js · Java · React · TypeScript',
  location: 'São João del-Rei, MG · Brasil',
  email: 'pedrohenriquetlemos@gmail.com',
  linkedinUrl: 'https://www.linkedin.com/in/pedrotorisulemos/',
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
  'Desde 2023 atuo como <strong>freelancer Full Stack</strong>, desenvolvendo soluções sob medida para clientes: refatorações, sistemas de gestão e APIs REST — sempre com foco em qualidade, arquitetura limpa e resultado mensurável.',
  'Fui <strong>Diretor de Projetos na Empresa Júnior Linked/UFSJ</strong>, coordenando 32 projetos web com taxa de aprovação acima de 90%. Aprendi a traduzir requisitos de negócio em soluções técnicas viáveis. Inglês C1 — confortável em documentações, PRs e times multiculturais.',
]

export const aboutSkillGroups = [
  {
    color: 'node' as const,
    skills: ['Node.js', 'TypeScript', 'Express', 'NestJS'],
  },
  {
    color: 'java' as const,
    skills: ['Java', 'Spring Boot', 'Spring MVC'],
  },
  {
    color: 'default' as const,
    skills: ['React', 'Next.js', 'Angular'],
  },
  {
    color: 'infra' as const,
    skills: ['Docker', 'AWS Lambda', 'CI/CD', 'SQL Server'],
  },
]

// ─── PROJECTS ───────────────────────────────────────────────────────────────

export const projects: Project[] = [
  {
    id: 'stealth-saas',
    title: 'Plataforma SaaS de Planejamento com IA',
    description:
      'Sistema completo de travel planning alimentado por IA generativa. O usuário descreve a viagem em linguagem natural e recebe roteiro dia a dia com logística, cálculo de rotas e pedágios — construído do zero como produto SaaS com múltiplos planos de assinatura.',
    tags: ['React + Vite', 'Node.js', 'PostgreSQL / PostGIS', 'Gemini 2.5', 'OSRM', 'Stripe', 'Supabase', 'Vertex AI'],
    icon: '🗺️',
    featured: true,
    color: 'purple',
    liveUrl: 'https://amillan.com.br',
    privateRepo: true,
    stealth: true,
    statusLabel: 'Em desenvolvimento',
    stats: [
      { value: '5.5k', label: 'cidades no autocomplete' },
      { value: '966', label: 'pedágios mapeados' },
      { value: '4', label: 'planos via Stripe' },
    ],
  },
  {
    id: 'legacy-refactor',
    title: 'Refatoração Full-Stack de Sistema Legado',
    description:
      'Assumi um sistema com alto débito técnico (React + SQL Server) e o reestruturei do zero: eliminei 60% dos componentes acoplados, separei as camadas corretamente e melhorei o carregamento em ~35%. Entrega sem downtime, com documentação das decisões arquiteturais.',
    tags: ['React', 'SQL Server', 'Clean Architecture', 'Freelance', '2023'],
    icon: '🔄',
    color: 'green',
  },
  {
    id: 'supplier-system',
    title: 'Sistema de Gestão Empresa–Fornecedor',
    description:
      'API REST completa com Java (Spring Boot) + Angular: autenticação JWT, CRUD completo, testes unitários e banco relacional normalizado. SOLID e Clean Architecture aplicados do início ao fim.',
    tags: ['Java', 'Spring Boot', 'Angular', 'JWT', 'Acadêmico'],
    icon: '🏢',
    color: 'blue',
    githubUrl: '#',
  },
  {
    id: 'alexa-app',
    title: 'App Mobile + Alexa Skill (TCC)',
    description:
      'Aplicativo Android (Java) integrado a uma Alexa Skill (Node.js): integração de sistemas heterogêneos com arquitetura orientada a eventos e UX por voz. Repositório privado por restrição acadêmica.',
    tags: ['Android', 'Java', 'Node.js', 'Alexa SDK', 'TCC'],
    icon: '🎙️',
    color: 'pink',
    privateRepo: true,
  },
  {
    id: 'dti-apis',
    title: 'APIs REST — dti digital',
    description:
      'APIs RESTful com Node.js + TypeScript para sistemas corporativos de médio porte. Zero downtime em 1 ano de estágio, queries otimizadas (−40% no tempo de resposta) e CI/CD reduzindo deploy de 45 min para 8 min.',
    tags: ['Node.js', 'TypeScript', 'Docker', 'SQL Server', 'Corporativo'],
    icon: '⚡',
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
      'Desenvolvimento de sistemas web sob demanda para clientes de diferentes segmentos — do levantamento de requisitos à entrega em produção.',
      'Refatoração de sistemas legados com React + SQL Server: eliminação de débito técnico, separação de camadas e melhoria de performance.',
      'Construção de APIs REST com Node.js/TypeScript e Java (Spring Boot), com foco em Clean Architecture e boas práticas.',
      'Gestão autônoma de projetos, prazos e comunicação direta com clientes — experiência que complementa a visão técnica com visão de produto.',
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
      'Desenvolvi e mantive <strong>APIs REST com Node.js + TypeScript</strong> para sistemas corporativos de médio porte — zero downtime ao longo de todo o estágio.',
      'Otimizei queries SQL Server com profiling e índices compostos — <strong>redução de ~40% no tempo de resposta</strong> de relatórios financeiros críticos.',
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
      'Implantei padrão de <strong>componentização React e Clean Code</strong> — onboarding de novos membros reduziu de 3 semanas para 5 dias.',
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
    emoji: '🟣',
    color: 'purple',
    items: ['Node.js', 'TypeScript', 'Express', 'NestJS', 'APIs REST', 'JWT', 'SOLID'],
  },
  {
    id: 'java',
    label: 'Java',
    emoji: '☕',
    color: 'amber',
    items: ['Java 8+', 'Spring Boot', 'Spring MVC', 'Design Patterns', 'Clean Arch'],
  },
  {
    id: 'frontend',
    label: 'Front-end',
    emoji: '⚛️',
    color: 'green',
    items: ['React', 'Next.js', 'Angular', 'JavaScript ES6+', 'HTML5 / CSS3'],
  },
  {
    id: 'cloud',
    label: 'Cloud & Infra',
    emoji: '☁️',
    color: 'blue',
    items: ['Docker', 'CI/CD', 'AWS Lambda', 'API Gateway', 'SNS / SQS', 'Linux'],
  },
  {
    id: 'data',
    label: 'Dados',
    emoji: '🗄️',
    color: 'pink',
    items: ['SQL Server', 'MySQL', 'PostgreSQL', 'MongoDB'],
  },
  {
    id: 'practices',
    label: 'Práticas',
    emoji: '🛠️',
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
    icon: '✉️',
    href: 'mailto:pedrohenriquetlemos@gmail.com',
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    value: 'https://www.linkedin.com/in/pedrotorisulemos/',
    icon: '💼',
    href: 'https://linkedin.com/in/pedro-torisu',
  },
  {
    id: 'github',
    label: 'GitHub',
    value: 'https://github.com/PedroHTLemos',
    icon: '🐙',
    href: 'https://github.com/PedroHTLemos',
  },
  {
    id: 'location',
    label: 'Localização',
    value: 'São João del-Rei, MG · Brasil',
    icon: '📍',
    href: '#',
  },
]