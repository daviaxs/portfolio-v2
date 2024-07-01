import { LanguageKeys, Translation, language } from '../language'

export const getCurrentLanguage = (): LanguageKeys => {
  return (localStorage.getItem('currentLanguage') as LanguageKeys) || 'PTBR'
}

export const getTranslations = (): Translation => {
  const currentLanguage = getCurrentLanguage()
  return language[currentLanguage]
}
