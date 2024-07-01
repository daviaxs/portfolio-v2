import { Brazil } from '@/shared/assets/svgs/Brazil'
import { UnitedStates } from '@/shared/assets/svgs/UnitedStates'
import { LanguageKeys } from '@/shared/language'
import { getTranslations } from '@/shared/utils/getTranslations'

const translations = getTranslations()

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
