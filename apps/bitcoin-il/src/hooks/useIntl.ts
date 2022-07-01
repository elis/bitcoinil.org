import { AvailableLanguage } from './../Interfaces'
import * as React from 'react'
import { useNavigate } from 'react-router-dom'
import { useRecoilState, useRecoilValue } from 'recoil'

import { Messages } from '../Interfaces'
import { currentlySelectedLanguage } from '../state/state'
import { messages_en } from '../translations/en'
import { messages_he } from '../translations/he'

export const useIntl = () => {
  const [language] = useRecoilState(currentlySelectedLanguage)
  const [locale, setLocale] = React.useState('en')
  const navigate = useNavigate()

  const navigateWithLanguageChange = (path: string, newLang?: string) => {
    if (newLang === 'en') {
      navigate(path.substring(3))
    } else {
      navigate(`${newLang}${path}`)
    }
  }

  const messages: Messages = {
    he: messages_he,
    en: messages_en
  }

  React.useEffect(() => {
    if (language.language === 'he') setLocale('il')
    setLocale(language.language)
  }, [language.language])

  const availableLanguages: AvailableLanguage[] = [
    { name: 'en', icon: '🇬🇧', locale: 'en', longName: 'English' },
    { name: 'he', icon: '🇮🇱', locale: 'il', longName: 'עִברִית' }
  ]
  return {
    messages,
    availableLanguages,
    locale,
    navigateWithLanguageChange
  }
}
