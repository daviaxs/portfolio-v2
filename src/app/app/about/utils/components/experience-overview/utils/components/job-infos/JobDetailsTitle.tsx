import { ReactNode } from 'react'

interface JobTitleProps {
  children: ReactNode
}

export function JobDetailsTitle({ children }: JobTitleProps) {
  return (
    <h2 className="font-extrabold text-[1.5rem] leading-[100%]">{children}</h2>
  )
}
