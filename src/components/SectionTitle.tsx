import type { ReactNode } from 'react'

export function SectionTitle({ id, eyebrow, children }: { id: string; eyebrow?: string; children: ReactNode }) {
  return (
    <>
      {eyebrow && <p className="mb-3 text-sm font-medium text-accent">{eyebrow}</p>}
      <h2 id={id} className="font-serif text-3xl font-medium leading-tight text-fg md:text-4xl">
        {children}
      </h2>
    </>
  )
}
