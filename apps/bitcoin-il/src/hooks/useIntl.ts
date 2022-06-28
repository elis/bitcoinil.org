import * as React from 'react'
import { useNavigate } from 'react-router-dom'
import { useRecoilValue } from 'recoil'

import { Messages } from '../Interfaces'
import { currentlySelectedLanguage } from '../state/state'
import { messages_en } from '../translations/en'
import { messages_he } from '../translations/he'

export const useIntl = () => {
  const [language, setLanguage] = React.useState('en')
  const [locale, setLocale] = React.useState('en')
  const atomLang = useRecoilValue(currentlySelectedLanguage)
  const navigate = useNavigate()

  const customNavigate = (path: string, newLang?: string) => {
    if (newLang === 'en') {
      navigate(path.substring(3))
    } else {
      navigate(`/${newLang}/${path}`)
    }
  }

  const messages: Messages = {
    he: messages_he,
    en: messages_en
  }

  React.useEffect(() => {
    if (language === 'he') setLocale('il')
    setLocale(language)
  }, [language])

  const availableLanguages = [
    { name: 'en', icon: '🇬🇧', locale: 'en' },
    { name: 'he', icon: '🇮🇱', locale: 'il' }
  ]
  return {
    language,
    setLanguage,
    messages,
    availableLanguages,
    locale,
    customNavigate
  }
}
