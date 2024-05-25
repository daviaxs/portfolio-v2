import { ReactNode } from 'react'

interface SkillsCardHeaderProps {
  children: ReactNode
}

export function SkillsCardHeader({ children }: SkillsCardHeaderProps) {
  return (
    <div className="flex flex-col items-center justify-center gap-2">
      {children}
    </div>
  )
}
