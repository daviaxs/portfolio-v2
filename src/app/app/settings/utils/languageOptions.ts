import { Brazil } from '@/shared/assets/svgs/Brazil'
import { UnitedStates } from '@/shared/assets/svgs/UnitedStates'
import { LanguageKeys, language } from '@/shared/language'
import { getCurrentLanguage } from '@/shared/utils/getCurrentLanguage'

const currentLanguage = getCurrentLanguage()
const translations = language[currentLanguage]

export const languageOptions: Array<{
  key: LanguageKeys
  languageTitle: string
  languageIcon: React.ComponentType
  localeLabel: string
}> = [
  {
    key: 'PTBR',
    languageTitle: translations.settingsPage.language.options.portuguese,
    languageIcon: Brazil,
    localeLabel: 'PT-BR',
  },
  {
    key: 'EN',
    languageTitle: translations.settingsPage.language.options.english,
    languageIcon: UnitedStates,
    localeLabel: 'EN',
  },
]
