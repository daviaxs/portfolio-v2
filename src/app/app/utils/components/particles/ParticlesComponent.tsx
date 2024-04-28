'use client'

import { motion } from 'framer-motion'
import Particles from './Particles'

export function ParticlesComponent() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: 'easeInOut', duration: 2 }}
    >
      <Particles />
    </motion.main>
  )
}
