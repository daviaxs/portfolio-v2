import { ReactNode } from 'react'

interface SkillsCardHeaderTitleProps {
  children: ReactNode
}

export function SkillsCardHeaderTitle({
  children,
}: SkillsCardHeaderTitleProps) {
  return <h4 className="font-bold text-[1.5rem] leading-[100%]">{children}</h4>
}
