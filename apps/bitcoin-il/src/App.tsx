import locales from '@bitil/locales'
import '@djitsu/themes/dist/themes/main-theme/main-theme-main-light.css'
import 'antd/dist/antd.css' // or 'antd/dist/antd.less'
import * as React from 'react'
import { Helmet } from 'react-helmet'
import { IntlProvider } from 'react-intl'
import { Route, Routes } from 'react-router-dom'
import styled from 'styled-components'
import { phoneDevices } from './breakpoints'
import Footer from './Footer'
import Header from './Header'
import HomePage from './HomePage'
import { mainMenuItems } from './mainMenuItems'
import { nonMenuRoutes } from './nonMenuRoutes'
import Support from './support'
import Theme from './themes'
import { useIntl } from './hooks/useIntl'
import { RecoilRoot } from 'recoil'
import { useRecoilState, useSetRecoilState } from 'recoil'
import { currentlySelectedLanguage } from './state/state'

const suppressErrors = true
// const supressErrors = false

function App(): JSX.Element {
  // const { language, messages, locale } = useIntl()
  const [ln, setLn] = React.useState('en')

  const [atomLang, setAtomLang] = useRecoilState(currentlySelectedLanguage)

  console.log(atomLang)

  if (suppressErrors)
    console.error = () => {
      console.log('Suppressed Error')
    }

  const intl = useIntl()
  const { availableLanguages } = intl

  const renderRoutes = () => (
    <Routes>
      {availableLanguages.map((lang, ii) => {
        const langCode = lang.name === 'en' ? '' : `${lang}/`
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
      <Route path="*" element={<HomePage />} />
    </Routes>
  )

  return (
    <Theme>
      <AppStyleWrap id="App">
        <Helmet>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Titillium+Web:wght@200&display=swap"
            rel="stylesheet"
          />
        </Helmet>
        <IntlProvider
          // @ts-ignore
          messages={locales[ln]}
          locale={ln}
          defaultLocale="en"
        >
          <div className="App">
            {/* <DevTools /> */}
            <Support />
            <Header setLanguage={setLn} />
            {renderRoutes()}
          </div>
          <Footer />
        </IntlProvider>
      </AppStyleWrap>
    </Theme>
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
