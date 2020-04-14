import React, { useEffect } from 'react'
import styled from 'styled-components'
import links from '../utils/menuLinks'
import social from '../utils/socialLinks'
import { AnchorLink } from 'gatsby-plugin-anchor-links'

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  a {
    text-decoration: none;
    color: white;
    font-weight: 700;
    font-size: 5rem;
    margin-bottom: 20px;
    transition: all 200ms ease-in-out;

    :hover {
      opacity: 0.7;
      transform: translateY(-3px);
    }
  }
`

const StyledSocialContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  a {
    padding: 0 20px;
    margin-top: 30px;
  }
`

const MenuItems = ({ toggleMenu }) => {
  return (
    <StyledContainer onClick={toggleMenu}>
      {links.map((item, index) => (
        <AnchorLink key={index} to={item.path}>
          {item.text}{' '}
        </AnchorLink>
      ))}
      <StyledSocialContainer>
        {social.map((item, index) => (
          <a href={item.url} key={index}>
            {item.icon}
          </a>
        ))}
      </StyledSocialContainer>
    </StyledContainer>
  )
}

export default MenuItems
