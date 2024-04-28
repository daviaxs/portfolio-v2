import { ReactNode } from 'react'
import { AnimatePage } from './animatePage'
import { Navigation } from './utils/components/navigation/Navigation'
import { ParticlesComponent } from './utils/components/particles/ParticlesComponent'

interface DashboardLayoutProps {
  children: ReactNode
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <AnimatePage>
      <Navigation />

      {children}

      <ParticlesComponent />
    </AnimatePage>
  )
}
