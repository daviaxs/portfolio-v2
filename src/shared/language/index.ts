import { Brazil } from '../assets/svgs/Brazil'
import { UnitedStates } from '../assets/svgs/UnitedStates'
import { english } from './english'
import { portugueseBrazil } from './portuguese-brazil'

export const language = {
  PTBR: portugueseBrazil,
  EN: english,
}

export type LanguageKeys = keyof typeof language
export type Translation = (typeof language)[LanguageKeys]

export const languageOptions: Array<{
  key: LanguageKeys
  languageTitle: string
  languageIcon: React.ComponentType
  localeLabel: string
}> = [
  {
    key: 'PTBR',
    languageTitle: 'Português',
    languageIcon: Brazil,
    localeLabel: 'PT-BR',
  },
  {
    key: 'EN',
    languageTitle: 'Inglês',
    languageIcon: UnitedStates,
    localeLabel: 'EN',
  },
]
