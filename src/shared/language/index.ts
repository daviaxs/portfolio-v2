import { english } from './english'
import { portugueseBrazil } from './portuguese-brazil'

export const language = {
  PTBR: portugueseBrazil,
  EN: english,
}

export type LanguageKeys = keyof typeof language
export type Translation = (typeof language)[LanguageKeys]
