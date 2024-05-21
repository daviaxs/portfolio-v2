import { ReactNode } from 'react'

interface JobDescriptionProps {
  children: ReactNode
}

export function JobDescription({ children }: JobDescriptionProps) {
  return (
    <div className="leading-tight font-normal text-[0.8rem]">{children}</div>
  )
}
