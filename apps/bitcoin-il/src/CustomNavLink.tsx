import * as React from 'react'
import { FormattedMessage } from 'react-intl'
import { NavLink } from 'react-router-dom'
import { useRecoilValue } from 'recoil'
import styled from 'styled-components'
import { currentlySelectedLanguage } from './state/state'

export interface CustomNavLinkProps {
  to: string
  children?: React.ReactNode
}

const CustomNavLink: React.FC<CustomNavLinkProps> = ({ to, children }) => {
  const ln = useRecoilValue(currentlySelectedLanguage)
  //   console.log('👻👻👻', to)

  const languageCode = ln.language === 'en' ? '' : `/${ln.language}`
  return <NavLink to={`${languageCode}${to}`}>{children}</NavLink>
}

export default CustomNavLink

const StyledCustomNavLink = styled.div``
