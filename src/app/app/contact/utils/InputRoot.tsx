import { ReactNode } from 'react'

interface InputRoot {
  children: ReactNode
  className?: string
}

export function InputRoot({ children }: InputRoot) {
  return (
    <div
      className={
        'flex items-start justify-start bg-grey-800 border border-grey-500 w-full h-fit rounded-md p-[0.625rem] gap-2 focus-within:outline outline-1 outline-violet-400'
      }
    >
      {children}
    </div>
  )
}
