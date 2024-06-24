import { ReactNode } from 'react'

interface InputRoot {
  children: ReactNode
}

export function InputRoot({ children }: InputRoot) {
  return (
    <div className="flex items-center justify-start bg-grey-800 border border-grey-500 w-full h-[3.5rem] rounded-md p-[0.625rem] gap-2 focus-within:outline outline-1 outline-violet-400">
      {children}
    </div>
  )
}
