import { ReactNode } from 'react'

interface TitleProps {
  children: ReactNode
}

export function Title({ children }: TitleProps) {
  return (
    <h2 className="font-extrabold text-[2rem] max-sm:text-[1.5rem] max-sm:text-center w-full">
      {children}
    </h2>
  )
}
