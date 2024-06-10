import { ReactNode } from 'react'

interface ProjectCardTechsProps {
  children: ReactNode
}

export function ProjectCardTechs({ children }: ProjectCardTechsProps) {
  return <div className="flex flex-wrap gap-2">{children}</div>
}
