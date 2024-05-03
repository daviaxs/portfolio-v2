'use client'

import { useWindowWidth } from '@/shared/hooks/useWindowWidth'
import { motion } from 'framer-motion'
import { usePathname } from 'next/navigation'

export default function Template({ children }: { children: React.ReactNode }) {
  const pathName = usePathname()
  const { width } = useWindowWidth()

  return (
    <motion.main
      key={pathName}
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ ease: 'easeInOut', duration: 0.5 }}
      className={`overflow-y-auto w-full h-full z-10 ${width <= 976 ? 'px-[2rem]' : 'px-[3rem]'} ${width <= 976 ? 'pb-[6rem]' : ''}`}
    >
      {children}
    </motion.main>
  )
}
