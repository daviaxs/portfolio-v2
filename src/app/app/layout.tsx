'use client'

import { ReactNode } from 'react'
import { NavigationDesktop } from './utils/components/navigation/NavigationDesktop'
import { AnimatePresence, motion } from 'framer-motion'
import { usePathname } from 'next/navigation'
import { NavigationTablet } from './utils/components/navigation/NavigationTablet'

interface DashboardLayoutProps {
  children: ReactNode
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const pathName = usePathname()

  return (
    <motion.div
      className="flex h-full w-full overflow-hidden"
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* <NavigationDesktop /> */}
      <NavigationTablet />

      <main className="overflow-y-auto w-full h-full">
        <AnimatePresence mode="wait">
          <motion.div
            layout
            key={pathName}
            initial={{ y: 5, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -5, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </main>
    </motion.div>
  )
}
