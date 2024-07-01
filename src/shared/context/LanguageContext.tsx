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
  const [translations, setTranslations] = useState<Translation>(language.PTBR)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const savedLanguage = localStorage.getItem(
      'currentLanguage',
    ) as LanguageKeys
    if (savedLanguage && language[savedLanguage]) {
      setCurrentLanguage(savedLanguage)
      setTranslations(language[savedLanguage])
    }
    setIsLoading(false)
  }, [])

  useEffect(() => {
    if (!isLoading) {
      localStorage.setItem('currentLanguage', currentLanguage)
      setTranslations(language[currentLanguage])
    }
  }, [currentLanguage, isLoading])

  const changeLanguage = (lang: LanguageKeys) => {
    setCurrentLanguage(lang)
  }

  if (isLoading) {
    return (
      <div className="w-full h-full flex items-center justify-center font-bold text-[2rem]">
        Loading...
      </div>
    )
  }

  return (
    <LanguageContext.Provider
      value={{ currentLanguage, changeLanguage, translations }}
    >
      {children}
    </LanguageContext.Provider>
  )
}
