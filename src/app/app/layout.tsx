import { ReactNode } from 'react'
import { NavigationDesktop } from './utils/components/navigation/NavigationDesktop'

interface DashboardLayoutProps {
  children: ReactNode
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="flex h-full w-full">
      <NavigationDesktop />
      {children}
    </div>
  )
}
