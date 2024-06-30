'use client'

import { TypeScript } from '@/shared/assets/svgs/TypeScript'
import { TechCard } from './utils/components'
import { ReactIcon } from '@/shared/assets/svgs/React'
import { Title } from '@/app/utils/Title'
import { LanguageContext } from '@/shared/context/LanguageContext'
import { useContext } from 'react'

export function MainSkills() {
  const { translations } = useContext(LanguageContext)

  return (
    <div className="flex flex-col gap-6 items-start justify-start w-full h-fit">
      <Title>{translations.aboutPage.mainSkills.title}</Title>

      <div className="w-full flex items-center justify-between gap-4 max-md:flex-col">
        <TechCard.Root type="primary">
          <TechCard.Content>
            <TechCard.Img blurColor="#007ACC">
              <TypeScript />
            </TechCard.Img>

            <TechCard.Texts
              title="TypeScript"
              description={
                translations.aboutPage.mainSkills.techs.typescript.description
              }
            />
          </TechCard.Content>
        </TechCard.Root>

        <TechCard.Root type="secondary">
          <TechCard.Content>
            <TechCard.Img blurColor="#00D8FF">
              <ReactIcon />
            </TechCard.Img>

            <TechCard.Texts
              title="React"
              description={
                translations.aboutPage.mainSkills.techs.react.description
              }
            />
          </TechCard.Content>
        </TechCard.Root>
      </div>
    </div>
  )
}
