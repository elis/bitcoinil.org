import { atom } from 'recoil'

export interface LanguageAtomValue {
  language: string
}

export const currentlySelectedLanguage = atom<LanguageAtomValue>({
  key: 'currentlySelectedLanguage',
  default: { language: 'asdhjkasdhkajshdkjash' }
})
