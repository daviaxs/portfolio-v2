'use client'

import { Title } from '@/app/utils/Title'
import { Globe } from 'lucide-react'
import { ButtonChangeLanguage } from './utils/components/button-change-language'
import { useContext } from 'react'
import { LanguageContext } from '@/shared/context/LanguageContext'
import { LanguageKeys } from '@/shared/language'
import { languageOptions } from './utils/languageOptions'

export default function Settings() {
  const { changeLanguage, translations, currentLanguage } =
    useContext(LanguageContext)

  function updateLanguage(key: LanguageKeys) {
    changeLanguage(key)
    window.location.reload()
  }

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
          {languageOptions.map(
            ({
              key,
              languageTitle,
              localeLabel,
              languageIcon: LanguageIcon,
            }) => {
              return (
                <ButtonChangeLanguage.Root
                  key={key}
                  onClick={
                    currentLanguage === key
                      ? undefined
                      : () => updateLanguage(key)
                  }
                  className={
                    currentLanguage === key
                      ? 'outline outline-1 outline-green-400'
                      : ''
                  }
                >
                  <ButtonChangeLanguage.Title>
                    {languageTitle}
                  </ButtonChangeLanguage.Title>

                  <ButtonChangeLanguage.LocaleIndicator label={localeLabel}>
                    <LanguageIcon />
                  </ButtonChangeLanguage.LocaleIndicator>
                </ButtonChangeLanguage.Root>
              )
            },
          )}
        </div>
      </div>
    </div>
  )
}
