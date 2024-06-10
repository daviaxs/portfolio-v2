import { ReactNode } from 'react'

interface ProjectCardContentProps {
  children: ReactNode
}

export function ProjectCardContent({ children }: ProjectCardContentProps) {
  return (
    <div className="flex flex-col gap-2 items-start justify-start">
      {children}
    </div>
  )
}
