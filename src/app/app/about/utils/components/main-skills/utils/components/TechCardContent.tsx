import { ReactNode } from 'react'

interface TechCardContentProps {
  children: ReactNode
}

export function TechCardContent({ children }: TechCardContentProps) {
  return (
    <div className="absolute top-[0.10rem] left-[0.10rem] right-[0.10rem] bottom-[0.10rem] bg-grey-800 rounded z-10 flex items-center justify-start gap-6 p-4">
      {children}
    </div>
  )
}
