'use client'

import { LogoDXAnimation } from '@/shared/components/logo-dx-animation/Logo-DX-Animation'
import { motion } from 'framer-motion'
import { LoadingProgressBar } from './utils/components/loading-progress-bar/LoadingProgressBar'
import { useState } from 'react'

export default function InitialPage() {
  const [dalay, setDelay] = useState(1000)

  setTimeout(() => {
    setDelay(0)
  }, dalay)

  return (
    <motion.main
      className="flex flex-col justify-center items-center w-full h-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.div className="flex flex-col justify-center items-center h-fit gap-5">
        <LogoDXAnimation />

        <LoadingProgressBar
          style={{
            opacity: dalay === 0 ? 1 : 0,
            transition: 'opacity 2s',
          }}
        />
      </motion.div>

      <p
        className="absolute bottom-4"
        style={{
          opacity: dalay === 0 ? 1 : 0,
          transition: 'opacity 1s',
        }}
      >
        © Criado por Davi Alves - 2024
      </p>
    </motion.main>
  )
}
