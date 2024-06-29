import { ReactNode } from 'react'

interface ButtonLocaleIndicatorProps {
  children: ReactNode
  label: string
}

export function ButtonLocaleIndicator({
  label,
  children,
}: ButtonLocaleIndicatorProps) {
  return (
    <div className="flex items-center justify-center gap-2">
      <span className="font-bold text-grey-200">{label}</span>
      {children}
    </div>
  )
}
