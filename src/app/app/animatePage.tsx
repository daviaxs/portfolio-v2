'use client'

import { motion } from 'framer-motion'

export function AnimatePage({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ ease: 'easeInOut', duration: 0.5 }}
      className="overflow-hidden w-full h-full flex"
    >
      {children}
    </motion.div>
  )
}
