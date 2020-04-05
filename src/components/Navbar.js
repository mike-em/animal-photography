import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import logo from '../images/animal_logo.svg'
import MenuItems from './MenuItems'

const StyledContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 80px;

  img {
    margin-left: 20px;
    height: 80%;
  }
`

const StyledHamburgerContainer = styled.div`
  background-color: transparent;
  margin-right: 20px;
  transition: transform 100ms 300ms ease-in-out;
  cursor: pointer;
`

const StyledHamburgerBox = styled.span`
  width: 35px;
  height: 30px;
  display: inline-block;
  position: relative;
  z-index: 91;
`

const StyledHamburgerInner = styled.span`
  width: 100%;
  height: 3px;
  background-color: black;
  position: absolute;
  left: 0;
  top: 50%;
  transition: all 100ms 200ms ease-in-out;

  ${({ toggle }) =>
    toggle &&
    css`
      background-color: transparent;
    `}

  &::before,
  &::after {
    content: '';
    width: 100%;
    height: 3px;
    background-color: black;
    position: absolute;
    left: 0;
    transition: all 200ms 200ms ease-in-out;
  }

  &::before {
    top: -12px;

    ${({ toggle }) =>
      toggle &&
      css`
        background-color: white;
        transform: translateY(12px) rotate(45deg);
      `}
  }

  &::after {
    top: 12px;

    ${({ toggle }) =>
      toggle &&
      css`
        background-color: white;
        transform: translateY(-12px) rotate(-45deg);
      `}
  }
`

const StyledMenuContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: hsl(180, 50%, 70%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  transition: transform 200ms 200ms ease-in-out;
  transform: translate(${props => (props.toggle ? '0' : '100%')});
  z-index: 90;
`
const Navbar = () => {
  const [state, setState] = useState(false)

  const toggleMenu = () => {
    setState(!state)
  }
  return (
    <>
      <StyledContainer>
        <img src={logo} alt="logo" />
        <StyledHamburgerContainer onClick={toggleMenu}>
          <StyledHamburgerBox>
            <StyledHamburgerInner toggle={state} />
          </StyledHamburgerBox>
        </StyledHamburgerContainer>
      </StyledContainer>
      <StyledMenuContainer toggle={state}>
        <MenuItems />
      </StyledMenuContainer>
    </>
  )
}

export default Navbar
