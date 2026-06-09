# Pedro Torisu — Portfolio

Portfólio pessoal desenvolvido em React + TypeScript + Tailwind CSS + Vite.

## 🚀 Como rodar

```bash
npm install
npm run dev
```

Acesse em `http://localhost:5173`

## 🏗️ Build para produção

```bash
npm run build
npm run preview
```

## 📁 Estrutura

```
src/
├── data/
│   └── portfolio.ts        # ← TODO o conteúdo do site (textos, projetos, stack, etc.)
├── hooks/
│   ├── useScrollReveal.ts  # Animação de entrada ao scrollar
│   └── useCursorGlow.ts    # Efeito de brilho que segue o cursor
├── components/
│   ├── Navbar.tsx          # Navegação fixa com smooth scroll
│   ├── SectionHeader.tsx   # Header reutilizável de seção
│   ├── BackgroundEffects.tsx # Orbs, noise e cursor glow
│   └── Footer.tsx
├── sections/
│   ├── HeroSection.tsx     # Hero com código animado e stats
│   ├── AboutSection.tsx    # Sobre mim + cards de experiência
│   ├── ProjectsSection.tsx # Grid de projetos
│   ├── ExperienceSection.tsx # Timeline de experiência
│   ├── StackSection.tsx    # Tech stack em cards
│   └── ContactSection.tsx  # Links de contato + formulário
├── App.tsx
├── main.tsx
└── index.css               # Tailwind + estilos base
```

## ✏️ Como atualizar conteúdo

**Todo o conteúdo fica em `src/data/portfolio.ts`.**

### Adicionar um projeto novo
```ts
// src/data/portfolio.ts
export const projects: Project[] = [
  // ...existentes...
  {
    id: 'meu-novo-projeto',
    title: 'Nome do Projeto',
    description: 'Descrição do que foi feito...',
    tags: ['React', 'Node.js', 'PostgreSQL'],
    icon: '🚀',
    color: 'green',           // purple | green | blue | pink
    githubUrl: 'https://github.com/...',
    liveUrl: 'https://...',
    featured: false,          // true para ocupar linha inteira
  },
]
```

### Atualizar links sociais
```ts
export const siteMeta = {
  linkedinUrl: 'https://linkedin.com/in/pedro-torisu',
  githubUrl: 'https://github.com/pedro-torisu',
  cvUrl: '/pedro-torisu-cv.pdf', // coloque o CV na pasta public/
}
```

### Formulário de contato
O formulário atualmente abre o cliente de e-mail padrão (`mailto:`).
Para um formulário real, edite `ContactSection.tsx` e substitua o `handleSubmit` por:
- **EmailJS** (gratuito, sem backend): https://emailjs.com
- **Formspree** (gratuito até 50 envios/mês): https://formspree.io

## 🌐 Deploy

### Vercel (recomendado — gratuito)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Arraste a pasta dist/ para https://app.netlify.com/drop
```

### GitHub Pages
```bash
# No vite.config.ts, adicione: base: '/nome-do-repo/'
npm run build
# Configure GitHub Pages para usar a branch gh-pages ou pasta dist/
```
