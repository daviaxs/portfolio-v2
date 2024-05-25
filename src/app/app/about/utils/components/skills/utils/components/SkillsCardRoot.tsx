import { ReactNode } from 'react'

interface SkillsCardProps {
  children: ReactNode
}

export function SkillsCardRoot({ children }: SkillsCardProps) {
  return (
    <div
      className={`relative w-full h-[40rem] rounded from-[#0085ff] via-[#a143ff] via-36% to-[#ff8383] bg-gradient-to-br z-0`}
    >
      <div className="absolute top-[0.10rem] left-[0.10rem] right-[0.10rem] bottom-[0.10rem] bg-grey-800 rounded z-10 flex flex-col items-center justify-start gap-6 p-4">
        {children}
      </div>
    </div>
  )
}
