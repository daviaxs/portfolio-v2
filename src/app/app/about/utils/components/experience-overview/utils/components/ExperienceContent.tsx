import { ReactNode } from 'react'

interface ExperienceContentProps {
  children: ReactNode
}

export function ExperienceContent({ children }: ExperienceContentProps) {
  return <div className="flex items-start justify-start gap-5">{children}</div>
}
