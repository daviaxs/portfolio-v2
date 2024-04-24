import { ReactNode } from 'react'
import { AnimatePage } from './animatePage'
import { Navigation } from './utils/components/navigation/Navigation'

interface DashboardLayoutProps {
  children: ReactNode
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <AnimatePage>
      <Navigation />

      {children}
    </AnimatePage>
  )
}
