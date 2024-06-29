import { HTMLAttributes, ReactNode } from 'react'

interface ButtonRootProps extends HTMLAttributes<HTMLButtonElement> {
  children: ReactNode
}

export function ButtonRoot({ children, ...props }: ButtonRootProps) {
  return (
    <button
      className="flex items-center justify-between bg-grey-700 rounded-md p-4 cursor-pointer"
      {...props}
    >
      {children}
    </button>
  )
}
