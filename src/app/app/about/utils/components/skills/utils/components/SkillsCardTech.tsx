import { ReactNode } from 'react'

interface SkillsCardTechProps {
  children: ReactNode
}

export function SkillsCardTech({ children }: SkillsCardTechProps) {
  return (
    <div className="bg-grey-600 w-full p-4 rounded-md flex items-center justify-start gap-4">
      {children}
    </div>
  )
}
