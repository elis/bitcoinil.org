import locales from '@bitil/locales'
import * as React from 'react'
import { Helmet } from 'react-helmet'
import { IntlProvider } from 'react-intl'
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import { useRecoilState, useRecoilValue } from 'recoil'
import styled from 'styled-components'
import { phoneDevices } from './breakpoints'
import Footer from './Footer'
import Header from './Header'
import HomePage from './HomePage'
import { useIntl } from './hooks/useIntl'
import { mainMenuItems } from './mainMenuItems'
import { nonMenuRoutes } from './nonMenuRoutes'
import NotARoute from './NotARoute'
import { currentlySelectedLanguage } from './state/state'
import Support from './support'
import Theme from './themes'
import { ConfigProvider } from 'antd'

// const suppressErrors = true
const suppressErrors = false

function App(): JSX.Element {
  const [ln, setLn] = React.useState('en')
  const nav = useNavigate()
  const { customNavigate } = useIntl()

  const [atomLang, setAtomLang] = useRecoilState(currentlySelectedLanguage)

  const location = useLocation()

  React.useEffect(() => {
    if (
      atomLang.language !== 'en' &&
      !location.pathname.startsWith(`/${atomLang.language}/`)
    ) {
      customNavigate(`${location.pathname}`)
    }
  }, [location, atomLang])

  React.useEffect(() => {
    availableLanguages.forEach((avLang) => {
      if (location.pathname.startsWith(`/${avLang.name}`)) {
        setLn(location.pathname.substring(1, 3))
        setAtomLang({ language: location.pathname.substring(1, 3) })
      }
    })
  }, [])

  if (suppressErrors)
    console.error = () => {
      console.log('Suppressed Error')
    }

  const intl = useIntl()
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
    <Theme>
      <ConfigProvider direction={ln === 'he' ? 'rtl' : 'ltr'}>
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
            onError={(err) => {
              // console.log('Error from translation:', err)
              // Here be collecting missing translations!
              // Maybe shove them back to notion or something?
            }}
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
      </ConfigProvider>
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
