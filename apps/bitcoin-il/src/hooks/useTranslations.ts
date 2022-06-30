import * as React from 'react'
import { useNavigate } from 'react-router-dom'

export const useTranslations = () => {
  const [language, setLanguage] = React.useState('en')
  const [locale, setLocale] = React.useState('en')
  const navigate = useNavigate()

  const customNavigate = (path: string, newLang?: string) => {
    console.log(path)
    if (newLang === 'en') {
      navigate(path.substring(3))
    } else {
      navigate(`${newLang}${path}`)
    }
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
    availableLanguages,
    locale,
    customNavigate
  }
}
