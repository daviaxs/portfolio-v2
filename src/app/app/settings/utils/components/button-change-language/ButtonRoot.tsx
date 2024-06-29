import { HTMLAttributes, ReactNode } from 'react'

interface ButtonRootProps extends HTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  className?: string
}

export function ButtonRoot({ className, children, ...props }: ButtonRootProps) {
  return (
    <button
      className={`flex items-center justify-between bg-grey-700 rounded-md p-4 cursor-pointer ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}
