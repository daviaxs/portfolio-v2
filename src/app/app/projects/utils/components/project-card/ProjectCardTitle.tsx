import { ReactNode } from 'react'

interface ProjectCardTitleProps {
  children: ReactNode
}

export function ProjectCardTitle({ children }: ProjectCardTitleProps) {
  return (
    <h2 className="font-extrabold text-[1.8rem] leading-[100%]">{children}</h2>
  )
}
