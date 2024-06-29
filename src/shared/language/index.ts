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
  title: string
  icon: React.ComponentType
  localeLabel: string
}> = [
  { key: 'PTBR', title: 'Português', icon: Brazil, localeLabel: 'PT-BR' },
  { key: 'EN', title: 'Inglês', icon: UnitedStates, localeLabel: 'EN' },
]
