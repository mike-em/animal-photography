import React from 'react'
import styled from 'styled-components'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import links from '../utils/menuLinks'
import social from '../utils/socialLinks'

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

const MenuItems = () => {
  return (
    <StyledContainer>
      {links.map((item, index) => (
        <AniLink fade to={item.path} key={index}>
          {item.text}{' '}
        </AniLink>
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