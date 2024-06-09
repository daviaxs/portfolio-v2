import { ReactNode } from 'react'

interface ButtonIconProps {
  children: ReactNode
  color?: 'blue' | 'violet'
}

export function ButtonIcon({ color = 'blue', children }: ButtonIconProps) {
  return (
    <div
      className={`rounded p-[5px]
        ${color === 'blue' ? 'bg-blue-700' : 'bg-violet-700'}
  `}
    >
      {children}
    </div>
  )
}
