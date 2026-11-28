import type { ReactNode } from 'react'

export function SectionTitle({ id, eyebrow, children }: { id: string; eyebrow?: string; children: ReactNode }) {
  return (
    <>
      {eyebrow && <p className="mb-3 text-sm font-medium text-accent">{eyebrow}</p>}
      <h2 id={id} className="font-sans tracking-[-0.03em] text-3xl font-semibold leading-tight text-fg md:text-4xl">
        {children}
      </h2>
    </>
  )
}
