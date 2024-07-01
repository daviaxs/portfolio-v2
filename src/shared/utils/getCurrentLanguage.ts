import { LanguageKeys } from '../language'

export const getCurrentLanguage = (): LanguageKeys => {
  return (localStorage.getItem('currentLanguage') as LanguageKeys) || 'PTBR'
}
