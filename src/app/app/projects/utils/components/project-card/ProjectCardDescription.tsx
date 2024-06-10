import { ReactNode } from 'react'

interface ProjectCardDescriptionProps {
  children: ReactNode
}

export function ProjectCardDescription({
  children,
}: ProjectCardDescriptionProps) {
  return <p className="text-grey-100 font-semibold leading-tight">{children}</p>
}
