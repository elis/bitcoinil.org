import * as React from 'react'
import { useNavigate } from 'react-router-dom'
import { useRecoilState } from 'recoil'
import locales from '@bitil/locales'

import { currentlySelectedLanguage } from '../state/state'

export const useTranslations = () => {
  const [ln, setLn] = useRecoilState(currentlySelectedLanguage)
  const [locale, setLocale] = React.useState('en')
  const navigate = useNavigate()
  const translatedMessages = locales

  const customNavigate = (path: string, newLang?: string) => {
    console.log(path)
    if (newLang === 'en') {
      navigate(path.substring(3))
    } else {
      navigate(`${newLang}${path}`)
    }
  }

  React.useEffect(() => {
    if (ln.language === 'he') setLocale('il')
    setLocale(ln.language)
  }, [ln.language])

  const availableLanguages = [
    { name: 'en', icon: '🇬🇧', locale: 'en' },
    { name: 'he', icon: '🇮🇱', locale: 'il' }
  ]

  return {
    language: ln,
    setLanguage: setLn,
    availableLanguages,
    locale,
    customNavigate,
    translatedMessages
  }
}
