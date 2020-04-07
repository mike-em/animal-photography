import React from 'react'
import styled, { css } from 'styled-components'
import arrow from '../images/arrow-light.svg'
import ContactForm from './ContactForm'
import links from '../utils/socialLinks'

const StyledContainer = styled.div`
  width: 100vw;
  position: relative;
  background-color: hsl(0, 0%, 15%);

  .copy {
    text-align: center;
    color: hsl(150, 40%, 80%);
    margin-bottom: 30px;
  }
`

const StyledDescription = styled.div`
  display: flex;
  flex-direction: column;
  width: 95%;
  margin: 0 auto;
  color: white;
  position: relative;
  z-index: 10;

  h1 {
    margin-bottom: 0;
    text-transform: uppercase;
    font-size: 3rem;
    letter-spacing: -1px;
    color: white;
  }

  p {
    margin: 5px 0;
  }
  a {
    color: white;
    text-decoration: none;
    margin: 5px 0;
  }
`

const StyledButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-self: center;
  margin: 30px 0 10px 0;
  color: hsl(150, 40%, 80%);
  background-color: transparent;
  border: none;
  width: 230px;
  padding: 12px 20px;
  font-size: 1.8rem;
  transition: all 200ms ease-in-out;

  img {
    height: 1.8rem;
    align-self: center;
    transition: transform 200ms ease-in-out;
  }

  :hover {
    color: white;
    cursor: pointer;
  }

  :hover img {
    transform: translateX(10px);
  }
`

const StyledSocialLinks = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 50px auto;
  width: 200px;
  font-size: 3rem;

  a {
    color: hsl(150, 40%, 80%);
    transition: transform 200ms ease-in-out;

    :hover {
      transform: translateY(-3px);
    }
  }
`

const Contact = () => {
  return (
    <StyledContainer id="contact">
      <StyledDescription>
        <h1>contact</h1>
        <h2 style={{ marginBottom: '10px' }}>Address</h2>
        <p>45 Main Street</p>
        <p>New York</p>
        <h4 style={{ marginBottom: '10px' }}>CONTACT US</h4>
        <a href="tel:555 55 55">555 55 55</a>
        <a href="mailto: hi@aminphoto.com">hi@animphoto.com</a>
        <StyledButton>
          Book session
          <img src={arrow} alt="arrow" />
        </StyledButton>
      </StyledDescription>
      <ContactForm />
      <StyledSocialLinks>
        {links.map((item, index) => (
          <a href={item.url} key={index}>
            {item.icon}
          </a>
        ))}
      </StyledSocialLinks>
      <p className="copy">&copy; mikem.io 2020</p>
    </StyledContainer>
  )
}

export default Contact
