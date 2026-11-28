export type Lang = 'pt' | 'en'

export interface NumberEvidence {
  value: string
  label: string
  /** Texto que identifica a fonte, mostrado junto ao número */
  sourceLabel: string
  /** Link para a seção que comprova o número */
  sourceHref: string
}

export type ProjectStatus = 'product' | 'portfolio' | 'freelance'

export type Evidence =
  | { type: 'image'; src: string; alt: string; caption: string }
  | { type: 'flow'; title: string; steps: string[] }

export interface CaseStudy {
  problem: string
  decisions: { title: string; text: string }[]
  numbers: NumberEvidence[]
  evidence: Evidence[]
  limitations: string[]
}

export interface Project {
  slug: string
  status: ProjectStatus
  title: string
  period: string
  problem: string
  built: string
  decision: string
  metric: NumberEvidence
  stack: string[]
  /** Nota de contexto exibida no card e na página (ex.: marca fictícia) */
  note?: string
  repoUrl?: string
  readmeUrl?: string
  liveUrl?: string
  caseStudy?: CaseStudy
}

export interface Experience {
  id: string
  period: string
  role: string
  company: string
  location?: string
  current?: boolean
  points: string[]
}

export interface StackGroup {
  label: string
  items: string[]
}

export interface Stack {
  used: StackGroup[]
  known: StackGroup
  academic: StackGroup
  studying: StackGroup
}

export interface OtherProject {
  title: string
  description: string
  tags: string[]
}

export interface Messages {
  lang: Lang
  meta: {
    title: string
    description: string
    ogLocale: string
  }
  nav: {
    home: string
    projects: string
    experience: string
    stack: string
    about: string
    contact: string
    languageSwitch: string
    themeToLight: string
    themeToDark: string
    skipToContent: string
    location: string
    mainLabel: string
    newTab: string
  }
  hero: {
    name: string
    role: string
    positioning: string
    seeking: string
    ctaProjects: string
    ctaContact: string
    ctaCv: string
    ctaGithub: string
    ctaLinkedin: string
  }
  about: {
    title: string
    paragraphs: string[]
    education: string
    english: string
  }
  projects: {
    title: string
    intro: string
    statusLabels: Record<ProjectStatus, string>
    labels: { problem: string; built: string; decision: string; metric: string; stack: string; period: string; caseStudy: string; repo: string; readme: string; live: string }
    items: Project[]
  }
  experience: {
    title: string
    intro: string
    current: string
    items: Experience[]
  }
  stack: {
    title: string
    intro: string
    groups: Stack
    labels: { used: string; known: string; academic: string; studying: string }
  }
  others: {
    title: string
    intro: string
    items: OtherProject[]
  }
  contact: {
    title: string
    intro: string
    labels: { email: string; linkedin: string; github: string; location: string }
    location: string
  }
  caseStudy: {
    back: string
    problemTitle: string
    decisionsTitle: string
    numbersTitle: string
    evidenceTitle: string
    limitationsTitle: string
    flowLabel: string
    readmeCta: string
    repoCta: string
    notFound: string
    notFoundLink: string
  }
  footer: {
    role: string
    rights: string
  }
}
