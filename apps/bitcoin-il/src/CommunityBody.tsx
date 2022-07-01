import * as React from 'react'
import styled from 'styled-components'

import { phoneDevices } from './breakpoints'
import CardsDisplay from './CardsDisplay'
import { communityCards } from './CommunityBodyData'
import { CommunityBodyProps } from './Interfaces'

const CommunityBody: React.FC<CommunityBodyProps> = ({}) => {
  return (
    <StyledCommunityBody id="CommunityBody">
      <CardsDisplay cards={communityCards} />
    </StyledCommunityBody>
  )
}

export default CommunityBody

const StyledCommunityBody = styled.div`
  .list-of-links {
    display: flex;
    flex-direction: column;
    text-align: center;
    list-style: none;

    ${phoneDevices} {
      padding: 0;
    }
  }
`
