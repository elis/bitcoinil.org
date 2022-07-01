import { ConfigProvider } from 'antd'
import * as React from 'react'
import { Helmet } from 'react-helmet'
import { FormattedMessage, IntlProvider } from 'react-intl'
import { HashRouter as Router, Route, Routes } from 'react-router-dom'
import { RecoilRoot, useRecoilState } from 'recoil'
import styled from 'styled-components'
import { phoneDevices } from '../breakpoints'
import Footer from '../Footer'
import { currentlySelectedLanguage } from '../state/state'
import Theme from '../theme'
import locales from '@bitil/locales'
import Support from '../support'
import Header from '../Header'
import { useTranslations } from '../hooks/useTranslations'
import { mainMenuItems } from '../mainMenuItems'
import { nonMenuRoutes } from '../nonMenuRoutes'
import NotARoute from '../NotARoute'
import HomePage from '../HomePage'

const BaseWrappers = ({ children }) => {
  return (
    <Router>
      <RecoilRoot>
        <React.StrictMode>
          <Theme>{children}</Theme>
        </React.StrictMode>
      </RecoilRoot>
    </Router>
  )
}

const LocaleProvider = ({ children }) => {
  const [ln, setLn] = useRecoilState(currentlySelectedLanguage)
  return (
    <ConfigProvider direction={ln.language === 'he' ? 'rtl' : 'ltr'}>
      <IntlProvider
        // @ts-ignore
        messages={locales[ln.language]}
        locale={ln.language}
        defaultLocale="en"
        onError={(err) => {
          // console.log('Error from translation:', err)
          // Here be collecting missing translations!
          // Maybe shove them back to notion or something?
        }}
      >
        {children}
      </IntlProvider>
    </ConfigProvider>
  )
}
const Content = () => {
  const intl = useTranslations()
  const { availableLanguages } = intl

  const renderRoutes = () => (
    <Routes>
      {availableLanguages.map((lang, ii) => {
        // console.log('🇬🇧', lang)
        const langCode = lang.name === 'en' ? '' : `${lang.name}/`
        return mainMenuItems.map((menuItem, i) => {
          const { submenu } = menuItem

          if (submenu) {
            return submenu.map((subMenuItem, ii) => {
              return (
                <Route
                  key={`submenu-item-${ii}`}
                  path={`/${langCode}${subMenuItem.key}`}
                  element={subMenuItem.element}
                />
              )
            })
          }

          return (
            <Route
              key={i}
              path={`/${langCode}${menuItem.key}`}
              element={menuItem.element}
            />
          )
        })
      })}

      {availableLanguages.map((lang, ii) => {
        const langCode = lang.name === 'en' ? '' : `${lang}/`

        nonMenuRoutes.map((route) => {
          return (
            <Route
              key={route.key}
              path={`/${langCode}${route.path}`}
              element={route.element}
            />
          )
        })
      })}

      {availableLanguages.map((lang, i) => {
        // console.log(lang.name)
        const base = lang.name === 'en' ? '' : lang.name
        return (
          <Route
            key={`base-route-${i}`}
            path={`${base}/`}
            element={<HomePage />}
          />
        )
      })}
      <Route path="*" element={<NotARoute />} />
    </Routes>
  )

  return (
    <>
      <Support />
      <Header />
      {renderRoutes()}
    </>
  )
}
const App = () => {
  return (
    <BaseWrappers>
      <LocaleProvider>
        <AppStyleWrap id="App">
          <Helmet>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link
              href="https://fonts.googleapis.com/css2?family=Titillium+Web:wght@200&display=swap"
              rel="stylesheet"
            />
          </Helmet>
          <div className="App">
            <Content />
          </div>
          <Footer />
        </AppStyleWrap>
      </LocaleProvider>
    </BaseWrappers>
  )
}

export default App

const AppStyleWrap = styled.div`
  font-family: 'Titillium Web', sans-serif;
  font-weight: bolder;
  letter-spacing: 0.4px;

  ${phoneDevices} {
    width: 100vw;
  }
`
