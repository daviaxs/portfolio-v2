'use client'

import { ReactNode, createContext, useState, useEffect } from 'react'
import { language, LanguageKeys, Translation } from '../language'

interface LanguageContextType {
  changeLanguage: (language: LanguageKeys) => void
  currentLanguage: LanguageKeys
  translations: Translation
}

export const LanguageContext = createContext({} as LanguageContextType)

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [currentLanguage, setCurrentLanguage] = useState<LanguageKeys>('PTBR')
  const [translations, setTranslations] = useState<Translation>(
    language[currentLanguage],
  )

  useEffect(() => {
    const languageStorage = window.localStorage.getItem(
      'language',
    ) as LanguageKeys

    if (languageStorage) {
      setCurrentLanguage(languageStorage)
      setTranslations(language[languageStorage])
    }
  }, [])

  const changeLanguage = (lang: LanguageKeys) => {
    const changedLanguage = language[lang]
    setCurrentLanguage(lang)
    setTranslations(changedLanguage)
    window.localStorage.setItem('language', lang)
  }

  return (
    <LanguageContext.Provider
      value={{ currentLanguage, changeLanguage, translations }}
    >
      {children}
    </LanguageContext.Provider>
  )
}
