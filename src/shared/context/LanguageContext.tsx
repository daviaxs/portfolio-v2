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
  const [currentLanguage, setCurrentLanguage] = useState<LanguageKeys>(() => {
    return (localStorage.getItem('currentLanguage') as LanguageKeys) || 'PTBR'
  })

  const [translations, setTranslations] = useState<Translation>(
    language[currentLanguage],
  )

  useEffect(() => {
    setTranslations(language[currentLanguage])

    localStorage.setItem('currentLanguage', currentLanguage)
  }, [currentLanguage])

  const changeLanguage = (lang: LanguageKeys) => {
    setCurrentLanguage(lang)
  }

  return (
    <LanguageContext.Provider
      value={{ currentLanguage, changeLanguage, translations }}
    >
      {children}
    </LanguageContext.Provider>
  )
}
