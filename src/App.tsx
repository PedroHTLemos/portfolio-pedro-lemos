import { useEffect } from 'react'
import { BackgroundEffects } from '@/components/BackgroundEffects'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { HeroSection } from '@/sections/HeroSection'
import { AboutSection } from '@/sections/AboutSection'
import { ProjectsSection } from '@/sections/ProjectsSection'
import { ExperienceSection } from '@/sections/ExperienceSection'
import { StackSection } from '@/sections/StackSection'
import { ContactSection } from '@/sections/ContactSection'
import { useCursorGlow } from '@/hooks/useCursorGlow'

export default function App() {
  useCursorGlow('cursor-glow')

  // Active nav highlight on scroll
  useEffect(() => {
    const sections = document.querySelectorAll('section[id]')
    const navLinks = document.querySelectorAll('nav a[href^="#"], nav button[data-href]')

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            navLinks.forEach((link) => {
              const href = link.getAttribute('href') ?? link.getAttribute('data-href')
              if (href === `#${entry.target.id}`) {
                link.classList.add('text-text-1')
                link.classList.remove('text-text-2')
              } else {
                link.classList.remove('text-text-1')
                link.classList.add('text-text-2')
              }
            })
          }
        })
      },
      { threshold: 0.4 }
    )

    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  return (
    <div className="relative min-h-screen">
      <BackgroundEffects />
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ExperienceSection />
        <StackSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
