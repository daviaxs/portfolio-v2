import { ReactNode } from 'react'

interface SkillsCardTechProps {
  children: ReactNode
}

export function SkillsCardTech({ children }: SkillsCardTechProps) {
  return (
    <div className="bg-grey-600 w-full min-h-[4rem] max-h-[4rem] p-4 rounded-md flex items-center justify-start gap-4">
      {children}
    </div>
  )
}
