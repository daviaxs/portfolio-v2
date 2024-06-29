'use client'

import { Title } from '@/app/utils/Title'
import { Brazil } from '@/shared/assets/svgs/Brazil'
import { UnitedStates } from '@/shared/assets/svgs/UnitedStates'
import { Globe } from 'lucide-react'
import { ButtonChangeLanguage } from './utils/components/button-change-language'
import { useContext } from 'react'
import { LanguageContext } from '@/shared/context/LanguageContext'

export default function Settings() {
  const { changeLanguage, translations } = useContext(LanguageContext)

  return (
    <div className="flex flex-col gap-6 py-4 items-start justify-start w-full h-fit">
      <Title>{translations.settingsPage.title}</Title>

      <div className="flex flex-col justify-start items-start rounded-md w-full h-fit p-[1.2rem] gap-6 bg-grey-800">
        <div className="flex items-center justify-center gap-4">
          <Globe size={40} strokeWidth={1} />
          <h2 className="font-bold text-[2rem]">
            {translations.settingsPage.language.title}
          </h2>
        </div>

        <div className="flex flex-col gap-4 w-full">
          <ButtonChangeLanguage.Root onClick={() => changeLanguage('PTBR')}>
            <ButtonChangeLanguage.Title>Português</ButtonChangeLanguage.Title>

            <ButtonChangeLanguage.LocaleIndicator label="PT-BR">
              <Brazil />
            </ButtonChangeLanguage.LocaleIndicator>
          </ButtonChangeLanguage.Root>

          <ButtonChangeLanguage.Root onClick={() => changeLanguage('EN')}>
            <ButtonChangeLanguage.Title>Inglês</ButtonChangeLanguage.Title>

            <ButtonChangeLanguage.LocaleIndicator label="EN">
              <UnitedStates />
            </ButtonChangeLanguage.LocaleIndicator>
          </ButtonChangeLanguage.Root>
        </div>
      </div>
    </div>
  )
}
