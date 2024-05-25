import { ReactNode } from 'react'
import './SkillsCard.style.css'

interface SkillsCardTechsProps {
  children: ReactNode
}

export function SkillsCardTechs({ children }: SkillsCardTechsProps) {
  return (
    <div className="flex flex-col gap-2 items-center justify-start w-full TechsScroll pr-4">
      {children}
    </div>
  )
}
