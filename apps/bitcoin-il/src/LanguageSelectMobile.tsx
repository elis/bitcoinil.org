import { Menu } from 'antd'
import * as React from 'react'
import { useLocation } from 'react-router-dom'
import { useRecoilState } from 'recoil'
import styled from 'styled-components'
import { useIntl } from './hooks/useIntl'
import { currentlySelectedLanguage, isBurgerMenuOpen } from './state/state'

export interface LanguageSelectMobileProps {
  setLanguage: Function
}

const LanguageSelectMobile: React.FC<LanguageSelectMobileProps> = ({
  setLanguage
}) => {
  const [, setHideBurgerMenu] = useRecoilState(isBurgerMenuOpen)
  const [menuOpen, setMenuOpen] = React.useState(false)
  const { availableLanguages, customNavigate } = useIntl()
  const [current, setCurrent] = React.useState('English')
  const [openKeys, setOpenKeys] = React.useState([])

  const onOpenChange = (keys: any) => {
    setOpenKeys(keys)
  }

  const [, setAtomLang] = useRecoilState(currentlySelectedLanguage)
  const location = useLocation()

  const onClick = (e: any) => {
    setLanguage(e.key)
    setCurrent(e.key)
    setAtomLang({ language: e.key })
    customNavigate(location.pathname, e.key)
    setMenuOpen(false)
    setHideBurgerMenu(false)
  }

  return (
    <StyledLanguageSelectMobile id="LanguageSelectMobile">
      <Menu
        mode="inline"
        selectedKeys={[current]}
        openKeys={openKeys}
        onClick={() => {
          setOpenKeys([])
          setMenuOpen(false)
        }}
        onOpenChange={onOpenChange}
      >
        <Menu.SubMenu
          key={'lang-submenu'}
          title={<p className="collapsable-menu">Language</p>}
        >
          {availableLanguages.map((avLang, i) => {
            return (
              <Menu.Item
                style={{ background: 'grey' }}
                onClick={onClick}
                key={`${avLang.name}`}
              >
                {avLang.longName}
              </Menu.Item>
            )
          })}
        </Menu.SubMenu>
      </Menu>
    </StyledLanguageSelectMobile>
  )
}

export default LanguageSelectMobile

const StyledLanguageSelectMobile = styled.div``
