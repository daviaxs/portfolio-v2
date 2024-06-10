import { ReactNode } from 'react'

interface ProjectCardContentProps {
  children: ReactNode
}

export function ProjectCardContent({ children }: ProjectCardContentProps) {
  return (
    <div className="flex flex-col gap-4 items-start justify-start max-md:items-center">
      {children}
    </div>
  )
}
