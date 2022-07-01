import * as React from 'react'
import { HashRouter as Router } from 'react-router-dom'
import { RecoilRoot } from 'recoil'
import styled from 'styled-components'

import { phoneDevices } from '../utils/breakpoints'
import Footer from '../layout/Footer'
import Theme from '../theme'
import Support from '../components/support'
import Header from '../layout/Header'
import RoutesProvider from '../routes'
import LocaleProvider from '../locale'

const App = () => {
  return (
    <AppWrappers>
      <LocaleProvider>
        <AppStyleWrap id="app">
          <Support />
          <Header />
          <RoutesProvider />
          <Footer />
        </AppStyleWrap>
      </LocaleProvider>
    </AppWrappers>
  )
}

const AppWrappers = ({ children }) => {
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

export default App

const AppStyleWrap = styled.div`
  font-family: 'Titillium Web', sans-serif;
  font-weight: bolder;
  letter-spacing: 0.4px;

  ${phoneDevices} {
    width: 100vw;
  }
`
