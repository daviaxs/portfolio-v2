import { ReactNode } from 'react'

interface ExperienceCardRootProps {
  children: ReactNode
}

export function ExperienceCardRoot({ children }: ExperienceCardRootProps) {
  return (
    <div className="flex items-start justify-start gap-2 bg-grey-800 border border-grey-500 w-full rounded px-4 py-2">
      {children}
    </div>
  )
}
