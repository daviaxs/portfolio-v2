'use client'

import { LogoDXAnimation } from '@/shared/components/logo-dx-animation/Logo-DX-Animation'
import { motion, AnimatePresence } from 'framer-motion'
import { LoadingProgressBar } from './utils/components/loading-progress-bar/LoadingProgressBar'
import { useContext, useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { LanguageContext } from '@/shared/context/LanguageContext'

export default function InitialPage() {
  const { translations } = useContext(LanguageContext)
  const [dalay, setDelay] = useState(1000)
  const [exit, setExit] = useState(false)
  const router = useRouter()

  setTimeout(() => {
    setDelay(0)
  }, dalay)

  useEffect(() => {
    if (dalay === 0) {
      setTimeout(() => {
        setExit(true)
      }, 1000)
    }
  }, [dalay])

  useEffect(() => {
    if (exit) {
      setTimeout(() => {
        router.push('/app/home')
      }, 600)
    }
  }, [exit, router])

  return (
    <AnimatePresence>
      {!exit && (
        <motion.main
          className="flex flex-col justify-center items-center w-full h-full overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.2 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        >
          <motion.div className="flex flex-col justify-center items-center h-fit gap-5">
            <LogoDXAnimation
              initial={{ scale: 5 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1, ease: 'easeInOut' }}
            />

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
            {translations.initialPage.createdBy}
          </p>
        </motion.main>
      )}
    </AnimatePresence>
  )
}
