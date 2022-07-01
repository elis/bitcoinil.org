import { Menu } from 'antd'
import * as React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { useRecoilValue } from 'recoil'
import styled from 'styled-components'
import CustomNavLink from './CustomNavLink'
import Arrow from '../img/ico_angle.svg'
import { MainMenuItem } from '../utils/interfaces'
import { mainMenuItems } from '../routes/mainMenuItems'
import { currentlySelectedLanguage } from '../state/state'

export default function HeaderMenu(): JSX.Element {
  const [current, setCurrent] = React.useState('')
  const location = useLocation()
  const selectedLang = useRecoilValue(currentlySelectedLanguage)

  const onClick = (e: any) => {
    setCurrent(e.key)
  }

  React.useEffect(() => {
    const splitLocation = location.pathname.split('/')
    setCurrent(splitLocation[splitLocation.length - 1])
  }, [])

  return (
    <StyledAppMenu id="HeaderMenu">
      <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal">
        {mainMenuItems.map((item: any) => {
          if (item.submenu) {
            return (
              <Menu.SubMenu
                key={item.key}
                title={
                  <p className="collapsable-menu">
                    {item.label} <img className="menu-arrow" src={Arrow} />
                  </p>
                }
              >
                {item.submenu.map((subItem: MainMenuItem) => {
                  return (
                    <Menu.Item key={subItem.key}>
                      <CustomNavLink to={`/${subItem.key}`}>
                        {subItem.label}
                      </CustomNavLink>
                      {/* <NavLink to={`/${subItem.key}`}>{subItem.label}</NavLink> */}
                    </Menu.Item>
                  )
                })}
              </Menu.SubMenu>
            )
          }
          return (
            <Menu.Item key={item.key}>
              <CustomNavLink to={`/${item.key}`}></CustomNavLink>
              {/* <NavLink to={`/${item.key}`}></NavLink> */}
              <p>{item.label}</p>
            </Menu.Item>
          )
        })}
      </Menu>
    </StyledAppMenu>
  )
}

const StyledAppMenu = styled.div`
  .ant-menu {
    display: flex;
    align-items: center;
    justify-content: center;

    &.ant-menu {
      background: transparent;
      border-bottom: none;

      p {
        margin: 0;
      }

      .menu-arrow {
        transition: all 200ms;
      }

      .collapsable-menu {
        transition: all 200ms;
        &:hover > .menu-arrow {
          transition: all 200ms;
          transform: rotate(180deg);
        }
      }

      > li {
        &::after {
          width: 0;
          height: 0;
        }
        &.ant-menu-item {
          &::after {
            width: 0;
            height: 0;
          }
        }
      }
    }
  }
`
