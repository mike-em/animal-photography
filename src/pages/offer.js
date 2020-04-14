import React from 'react'
import styled, { css } from 'styled-components'
import Layout from '../components/layout'
import OneOffer from '../components/OneOffer'
import Contact from '../components/Contact'
import { Link } from 'gatsby'
import arrow from '../images/arrow.svg'
import offers from '../utils/offers'
import { device } from '../utils/device'

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-color: hsl(150, 40%, 80%);
  margin-bottom: 15px;

  @media ${device.laptop} {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`

const StyledLink = styled(Link)`
  display: flex;
  flex-direction: row;
  text-decoration: none;
  width: 30%;
  color: black;
  margin: 5px 20px;

  img {
    align-self: center;
    height: 1.4rem;
    transform: rotate(180deg);
    margin-right: 10px;
    transition: transform 200ms ease-in-out;
  }

  :hover img {
    transform: translateX(-10px) rotate(180deg);
  }
`

const Offer = () => {
  return (
    <Layout>
      <StyledLink to="/">
        <img src={arrow} alt="arrow" />
        back
      </StyledLink>
      <StyledContainer>
        {offers.map((item, index) => (
          <OneOffer
            key={index}
            title={item.title}
            subtitle={item.subtitle}
            price={item.price}
          />
        ))}
      </StyledContainer>
      <Contact />
    </Layout>
  )
}

export default Offer
