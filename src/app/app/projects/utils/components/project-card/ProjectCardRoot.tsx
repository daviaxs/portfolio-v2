import { ReactNode } from 'react'

interface ProjectCardRootProps {
  children: ReactNode
}

export function ProjectCardRoot({ children }: ProjectCardRootProps) {
  return (
    <div className="flex items-start justify-start px-4 py-3 gap-4 w-full h-fit bg-grey-900 border border-grey-500 rounded-lg">
      {children}
    </div>
  )
}
