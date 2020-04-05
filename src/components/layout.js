import React from 'react'
import styled from 'styled-components'
import Navbar from './Navbar'
import './layout.css'

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;

  height: 100vh;
`

const StyledContainerInner = styled.div`
  margin: 0 auto;
`

const Layout = ({ children }) => {
  return (
    <StyledContainer>
      <Navbar />
      <StyledContainerInner>{children}</StyledContainerInner>
      <footer>hey footer</footer>
    </StyledContainer>
  )
}

export default Layout
