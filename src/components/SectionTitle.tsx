import type { ReactNode } from 'react'

export function SectionTitle({ id, children }: { id: string; children: ReactNode }) {
  return (
    <h2 id={id} className="font-serif text-3xl font-medium leading-tight text-fg md:text-4xl">
      {children}
    </h2>
  )
}
