import { LanguageKeys, Translation, language } from '../language'

export const getCurrentLanguage = (): LanguageKeys => {
  if (typeof window !== 'undefined') {
    return (localStorage.getItem('currentLanguage') as LanguageKeys) || 'PTBR'
  }
  return 'PTBR'
}

export const getTranslations = (): Translation => {
  const currentLanguage = getCurrentLanguage()
  return language[currentLanguage]
}
