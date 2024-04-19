import { ReactNode } from 'react'

interface ButtonIconProps {
  children: ReactNode
}

export function ButtonIcon({ children }: ButtonIconProps) {
  return <div className="bg-blue-700 rounded p-[5px]">{children}</div>
}
