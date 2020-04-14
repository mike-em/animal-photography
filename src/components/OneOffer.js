import React from 'react'
import { Link } from 'gatsby'
import styled, { css } from 'styled-components'
import { device } from '../utils/device'

const StyledOffer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 10px 0;
  width: 90%;
  min-height: 300px;
  border: 1px solid black;

  @media ${device.tablet} {
    width: 80%;
  }

  @media ${device.laptop} {
    justify-self: center;
  }

  h2 {
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
const StyledButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-self: center;
  margin: 30px auto;
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

const StyledLink = styled(Link)`
  text-decoration: none;
`

const OneOffer = ({ title, subtitle, price }) => {
  return (
    <StyledOffer>
      <h2>{title}</h2>
      <p>{subtitle}</p>
      <p>£{price}</p>
      <StyledLink to="booking">
        <StyledButton main>book now</StyledButton>
      </StyledLink>
    </StyledOffer>
  )
}

export default OneOffer
