import { ReactNode } from 'react'

interface JobTagsProps {
  children: ReactNode
}

export function JobTags({ children }: JobTagsProps) {
  return (
    <div className="flex flex-wrap items-start justify-start gap-2">
      {children}
    </div>
  )
}
