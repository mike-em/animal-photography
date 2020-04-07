import React from 'react'
import styled, { css } from 'styled-components'
import arrow from '../images/arrow-light.svg'
import camera from '../images/camera-simple.svg'

const StyledContainer = styled.div`
  width: 100vw;
  margin-top: 15px;
  position: relative;

  ::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 400px;
    top: 0;
    left: 0;
    background-color: hsl(0, 0%, 15%);
    z-index: 1;
  }
`
const StyledImageContainer = styled.div`
  margin: 0 auto;
  width: 90%;
  border: 15px solid white;
  background-color: white;
  position: relative;
  z-index: 10;

  :hover img {
    opacity: 0.8;
  }
`

const StyledDescription = styled.div`
  display: flex;
  flex-direction: column;
  width: 95%;
  margin: 0 auto;
  position: relative;
  z-index: 10;

  h1 {
    margin-bottom: 0;
    text-transform: uppercase;
    font-size: 3rem;
    letter-spacing: -1px;
    color: white;
  }
`

const StyledButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-self: center;
  margin: 20px 0;
  color: hsl(150, 40%, 80%);
  background-color: transparent;
  width: 250px;
  padding: 12px 20px;
  font-size: 1.8rem;
  border: 2px solid hsl(150, 40%, 80%);
  transition: all 200ms ease-in-out;

  img {
    height: 1.8rem;
    align-self: center;
    transition: transform 200ms ease-in-out;
  }

  :hover {
    color: white;
    border-color: white;
    cursor: pointer;
  }

  :hover img {
    transform: translateX(10px);
  }

  ${({ main }) =>
    main &&
    css`
      margin-top: 50px;
      background-color: hsl(150, 20%, 40%);
      color: white;
      display: block;
      text-transform: capitalize;
      border: 2px solid hsl(150, 20%, 40%);

      :hover {
        border: 2px solid hsl(150, 20%, 40%);
        opacity: 0.8;
      }
    `}
`

const StyledOffer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-color: hsl(150, 40%, 80%);
  position: relative;
  z-index: 10;

  img {
    width: 180px;
    margin: 50px 0;
  }

  h2 {
    margin: 30px 0;
    text-transform: capitalize;
    position: relative;

    ::before {
      content: '';
      width: 120%;
      height: 2px;
      left: -10%;
      top: 4.5rem;
      background-color: black;
      position: absolute;
    }
  }
  p {
    margin-bottom: 0;
  }
`

const Offer = () => {
  return (
    <StyledContainer>
      <StyledDescription>
        <h1>our</h1>
        <h1>services</h1>
        <StyledButton>
          More Options
          <img src={arrow} />
        </StyledButton>
      </StyledDescription>
      <StyledImageContainer>
        <StyledOffer>
          <img src={camera} alt="camera" alt="camera" />
          <h2>photo session - 20</h2>
          <p>20 Pictures</p>
          <p>£99</p>
          <StyledButton main>book now</StyledButton>
        </StyledOffer>
      </StyledImageContainer>
    </StyledContainer>
  )
}

export default Offer
