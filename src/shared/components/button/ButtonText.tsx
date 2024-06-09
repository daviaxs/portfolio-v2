import { ReactNode } from 'react'

interface ButtonTextProps {
  children: ReactNode
  variant?: 'small' | 'normal'
}

export function ButtonText({ variant = 'normal', children }: ButtonTextProps) {
  return (
    <p
      className={`font-extrabold
      ${variant === 'small' ? 'text-[1rem]' : 'text-[2rem]'}
      ${variant === 'small' ? 'max-sm:text-[0.8rem]' : 'max-sm:text-[1.5rem]'}
    `}
    >
      {children}
    </p>
  )
}
