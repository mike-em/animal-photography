import React from 'react'
import styled from 'styled-components'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import links from '../utils/menuLinks'
import otherLinks from '../utils/otherLinks'
import social from '../utils/socialLinks'
import { Link } from 'gatsby'
import { window } from 'browser-monads'

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
  const path = window.location.pathname
  return (
    <StyledContainer onClick={toggleMenu}>
      {path !== '/'
        ? otherLinks.map((item, index) => (
            <Link to={item.path} key={index}>
              {item.text}{' '}
            </Link>
          ))
        : links.map((item, index) => (
            <AnchorLink href={item.path} key={index}>
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
