import { ReactNode } from 'react'

interface ButtonTitleProps {
  children: ReactNode
}

export function ButtonTitle({ children }: ButtonTitleProps) {
  return <h4 className="font-bold text-[1.2rem]">{children}</h4>
}
