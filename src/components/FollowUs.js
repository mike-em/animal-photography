import React from 'react'
import styled from 'styled-components'
import arrow from '../images/arrow.svg'
import { device } from '../utils/device'

const StyledContainer = styled.div`
  width: 100vw;
  height: 100%;
  margin: 30px 0;
`

const StyledDescription = styled.div`
  display: flex;
  flex-direction: column;
  width: 95%;
  margin: 0 auto;

  h1 {
    margin-bottom: 0;
    text-transform: uppercase;
    font-size: 3rem;
    letter-spacing: -1px;
  }

  h3 {
    display: flex;
    flex-direction: row;
    font-size: 2rem;

    img {
      align-self: center;
      height: 2rem;
      margin-left: 40px;
      transition: transform 200ms ease-in-out;
    }

    :hover {
      cursor: pointer;
    }

    :hover img {
      transform: translateX(10px);
    }
  }
  .grey {
    color: #595959;
  }

  p {
    position: relative;
  }
`

const FollowUs = () => {
  return (
    <StyledContainer>
      <StyledDescription>
        <h1>follow us</h1>
        <h3>
          @animal_photo <img src={arrow} />
        </h3>
      </StyledDescription>
    </StyledContainer>
  )
}

export default FollowUs
