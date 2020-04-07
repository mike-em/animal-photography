import React, { useState } from 'react'
import styled, { createGlobalStyle, css } from 'styled-components'
import Navbar from './Navbar'

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Raleway:wght@400;500;700&display=swap');

*,
*::before,
*::after {
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-tap-highlight-color: transparent;
  backface-visibility: hidden;
}

html {
  font-size: 62.5%;
}

body {
  margin: 0;
  padding: 0;
  height: 100%;
  font-size: 1.6rem;
  font-family: 'Raleway';

  ::-webkit-scrollbar {
    display: none;
  }

  ${({ scroll }) =>
    scroll &&
    css`
      overflow: hidden;
    `}
}
`

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`

const Layout = ({ children }) => {
  const [state, setState] = useState(false)

  const toggleMenu = () => {
    setState(!state)
  }

  return (
    <>
      <GlobalStyle scroll={state} />
      <StyledContainer>
        <Navbar toggleMenu={toggleMenu} state={state} />
        {children}
      </StyledContainer>
    </>
  )
}

export default Layout
