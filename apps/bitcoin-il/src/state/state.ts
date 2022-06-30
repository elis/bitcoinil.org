import { atom } from 'recoil'

export interface LanguageAtomValue {
  language: string
}

export const currentlySelectedLanguage = atom<LanguageAtomValue>({
  key: 'currentlySelectedLanguage',
  default: { language: 'en' }
})

export const isBurgerMenuOpen = atom<boolean>({
  key: 'isBurgerMenuOpen',
  default: false
})
