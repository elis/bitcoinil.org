import * as React from 'react'
import styled from 'styled-components'

import { phoneDevices } from './breakpoints'
import BurgerMenu from './BurgerMenu'
import CustomNavLink from './CustomNavLink'
import HeaderMenu from './HeaderMenu'
import logo from './img/logo.svg'
import { HeaderProps } from './Interfaces'
import LanguageSelect from './LanguageSelect'
import ThemeSwitch from './ThemeSwitch'

const Header: React.FC<HeaderProps> = ({ setLanguage }) => {
  return (
    <StyledHeader id="Header">
      <div className="header-left">
        <CustomNavLink to="/">
          <div className="logo">
            <img src={logo} />
          </div>
        </CustomNavLink>
      </div>
      <div className="header-middle">
        <HeaderMenu />
      </div>
      <div className="header-right">
        <ThemeSwitch />
        <LanguageSelect setLanguage={setLanguage} />
        <BurgerMenu />
      </div>
    </StyledHeader>
  )
}

const StyledHeader = styled.div`
  ${phoneDevices} {
    justify-content: space-between;
    padding: 0 25px;
  }

  display: flex;
  height: 60px;
  align-items: center;
  justify-content: space-around;

  .header {
    &-left {
      .logo {
        margin: 0;
        cursor: pointer;
        transition: all 200ms;
        &:hover {
          opacity: 0.5;
          transition: all 200ms;
        }

        img {
          height: 20px;
        }
      }
    }

    &-middle {
      width: 35vw;

      ${phoneDevices} {
        display: none;
      }
    }

    &-right {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`

export default Header
