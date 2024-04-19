'use client'

import Image from 'next/image'
import { WavingHand } from '@/shared/assets/svgs/WavingHand'
import DaviAxsDesenho from '@/shared/assets/imgs/daviaxs-desenho.png'
import { Button } from '@/shared/components/button'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { AnimatePresence, motion } from 'framer-motion'
import { Circle } from './utils/Circle'

export default function ApresentationPage() {
  const sizesCircle = [
    'w-[400px] h-[400px]',
    'w-[600px] h-[600px]',
    'w-[800px] h-[800px]',
    'w-[1000px] h-[1000px]',
    'w-[1200px] h-[1200px]',
    'w-[1400px] h-[1400px]',
    'w-[1600px] h-[1600px]',
  ]

  return (
    <AnimatePresence>
      <motion.main className="flex flex-col items-center justify-center py-[1rem] relative overflow-hidden">
        <motion.div
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center justify-center">
            <p className="font-bold text-[1.5rem] text-grey-50">Hello world</p>

            <WavingHand className="w-[2.5rem]" />
          </div>

          <h1 className="font-extrabold text-[2.5rem] text-center leading-none text-grey-50 max-md:text-[1.8rem]">
            Seja bem-vindo ao meu mundo digital!
          </h1>

          <p className="text-grey-200 font-medium text-[1rem] text-center mt-2 max-md:text-[0.7rem]">
            Explore meu portfólio, descubra meus projetos e mergulhe no mundo da
            programação comigo!
          </p>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src={DaviAxsDesenho}
            alt="davi-desenho"
            priority
            className="h-[25rem] w-auto aspect-auto max-sm:h-[18rem] mt-4"
          />
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          <Link href="/app/home">
            <Button.Root>
              <Button.Text>Continuar</Button.Text>
              <Button.Icon>
                <ArrowRight size={25} />
              </Button.Icon>
            </Button.Root>
          </Link>
        </motion.div>

        <motion.div
          className="z-[-1] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {sizesCircle.map((size, index) => (
            <Circle key={size} size={size} dashed={index % 2 === 0} />
          ))}
        </motion.div>
      </motion.main>
    </AnimatePresence>
  )
}
