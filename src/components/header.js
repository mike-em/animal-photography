import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import arrow from '../images/arrow.svg'
import catFootprint from '../images/cat-footprint.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { graphql, useStaticQuery } from 'gatsby'
import { device } from '../utils/device'

const StyledContainer = styled.div`
  height: 100%;
  background-color: hsl(180, 50%, 85%);
  background-image: url(${catFootprint});
  background-size: 100%;
  overflow: hidden;

  @media ${device.tablet} {
    height: calc(100vh - 80px);
  }

  @media ${device.laptop} {
    display: flex;
    height: calc(100vh - 80px);
  }
`
const StyledImageContainer = styled.div`
  width: 95%;

  @media ${device.tablet} {
    width: 75%;
  }

  @media ${device.laptop} {
    margin-top: 50px;
    width: 75%;
  }

  @media ${device.desktop} {
    margin-top: 0;
    width: 60%;
  }

  img {
    border: 15px solid white;
  }
`

const StyledDescription = styled.div`
  display: flex;
  flex-direction: column;
  width: 95%;
  height: 200px;
  margin: 0 auto;

  @media ${device.laptop} {
    align-self: center;
    margin-left: -110px;
    width: 440px;
    height: 250px;
    border: 15px solid white;
    background-color: hsl(0, 20%, 90%);
    z-index: 20;
  }

  h1 {
    margin: 20px auto 0;
    text-transform: uppercase;
    font-size: 3rem;
    letter-spacing: -1px;

    @media ${device.laptop} {
      margin-left: 5px;
    }
  }
  .grey {
    color: #595959;
  }
  a {
    display: flex;
    margin: 30px 0;
    text-decoration: none;
    color: black;

    @media ${device.laptop} {
      margin-left: 5px;
    }

    img {
      align-self: center;
      height: 1.5rem;
      margin: 0 20px;
      transition: all 200ms ease-in-out;
    }
    :hover img {
      transform: translateX(10px);
    }
  }
`

const Header = () => {
  const data = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "cat-main.jpg" }) {
        childImageSharp {
          fluid(grayscale: true) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `)
  return (
    <StyledContainer>
      <StyledImageContainer>
        <Img fluid={data.file.childImageSharp.fluid} />
      </StyledImageContainer>
      <StyledDescription>
        <h1 className="grey">we chage the world</h1>
        <h1>one picture at a time</h1>
        <AnchorLink href="#offer">
          Book an appointment <img src={arrow} alt="arrow-icon" />
        </AnchorLink>
      </StyledDescription>
    </StyledContainer>
  )
}

export default Header
