import { ReactNode } from 'react'

interface SkillsCardTechTextProps {
  children: ReactNode
}

export function SkillsCardTechText({ children }: SkillsCardTechTextProps) {
  return <p className="font-bold text-[1.2rem]">{children}</p>
}
