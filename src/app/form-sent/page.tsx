'use client'

import { Button } from '@/shared/components/button'
import { Title } from '../utils/Title'
import { Undo2 } from 'lucide-react'
import Link from 'next/link'
import { AnimatePage } from '../app/animatePage'
import { LanguageContext } from '@/shared/context/LanguageContext'
import { useContext } from 'react'

export default function FormSent() {
  const { translations } = useContext(LanguageContext)

  return (
    <AnimatePage>
      <main className="flex flex-col items-center justify-center gap-4 w-full h-full">
        <div>
          <Title className="text-center">
            {translations.formSentPage.title}
          </Title>

          <p className="font-bold text-[1.2rem] text-center text-grey-100 max-sm:text-[1rem]">
            {translations.formSentPage.description.part1} <br />
            {translations.formSentPage.description.part2}
          </p>
        </div>

        <Link href={`${process.env.WEB_SITE_URL}/app/home`}>
          <Button.Root>
            <Button.Text>{translations.formSentPage.buttonBack}</Button.Text>
            <Button.Icon>
              <Undo2 color="#fff" size={25} />
            </Button.Icon>
          </Button.Root>
        </Link>
      </main>
    </AnimatePage>
  )
}
