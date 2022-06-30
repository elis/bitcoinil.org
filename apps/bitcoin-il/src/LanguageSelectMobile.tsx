import * as React from 'react'
import { FormattedMessage } from 'react-intl'
import styled from 'styled-components'

export interface LanguageSelectMobileProps {}

const LanguageSelectMobile: React.FC<LanguageSelectMobileProps> = ({}) => {
  return (
    <StyledLanguageSelectMobile id="LanguageSelectMobile">
      <p>LanguageSelectMobile</p>
    </StyledLanguageSelectMobile>
  )
}

export default LanguageSelectMobile

const StyledLanguageSelectMobile = styled.div``
