import { ReactNode } from 'react'

interface JobTagsProps {
  children: ReactNode
}

export function JobTags({ children }: JobTagsProps) {
  return <div className="flex items-start justify-start gap-2">{children}</div>
}
