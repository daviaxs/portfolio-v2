import { ReactNode } from 'react'

interface ButtonTextProps {
  children: ReactNode
}

export function ButtonText({ children }: ButtonTextProps) {
  return (
    <p className="font-extrabold text-[2rem] max-sm:text-[1.5rem]">
      {children}
    </p>
  )
}
