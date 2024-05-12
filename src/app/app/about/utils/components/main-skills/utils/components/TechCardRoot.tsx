import { ReactNode } from 'react'

interface TechCardProps {
  type: 'primary' | 'secondary'
  children: ReactNode
}

export function TechCardRoot({ type, children }: TechCardProps) {
  return (
    <div
      className={`relative w-full h-[8rem] rounded from-[#0085ff] via-[#77b2dc] via-63% to-[#ffffff00] z-0 
        ${type === 'primary' ? 'bg-gradient-to-br' : 'bg-gradient-to-tl'}
      `}
    >
      {children}
    </div>
  )
}
