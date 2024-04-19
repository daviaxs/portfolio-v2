import { HTMLAttributes, ReactNode } from 'react'

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  children: ReactNode
}

export function ButtonRoot({ children }: ButtonProps) {
  return (
    <button className="bg-blue-600 flex items-center justify-center px-6 py-2 rounded-lg gap-4 hover:bg-blue-700 transition-colors border-b-2 border-blue-800">
      {children}
    </button>
  )
}
