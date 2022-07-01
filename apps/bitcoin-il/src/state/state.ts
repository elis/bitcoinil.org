import { atom } from 'recoil'
import { LanguageAtomValue } from '../Interfaces'

export const currentlySelectedLanguage = atom<LanguageAtomValue>({
  key: 'currentlySelectedLanguage',
  default: { language: 'en' }
})

export const isBurgerMenuOpen = atom<boolean>({
  key: 'isBurgerMenuOpen',
  default: false
})
