import { ReactNode } from 'react'
import { NavigationDesktop } from './utils/components/navigation/NavigationDesktop'

interface DashboardLayoutProps {
  children: ReactNode
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="flex h-full w-full overflow-hidden">
      <NavigationDesktop />

      <main className="overflow-y-auto w-full h-full">{children}</main>
    </div>
  )
}
