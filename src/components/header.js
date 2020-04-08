import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import arrow from '../images/arrow.svg'
import catFootprint from '../images/cat-footprint.svg'
import { graphql, useStaticQuery } from 'gatsby'

const StyledContainer = styled.div`
  width: 100vw;
  height: 100%;
  background-color: hsl(180, 50%, 85%);
  background-image: url(${catFootprint});
  background-size: 100%;
  overflow: hidden;
`
const StyledImageContainer = styled.div`
  width: 95%;
  border: 15px solid white;
  background-color: white;
`

const StyledDescription = styled.div`
  display: flex;
  flex-direction: column;
  width: 95%;
  height: 200px;
  margin: 0 auto;

  h1 {
    margin: 20px auto 0 auto;
    text-transform: uppercase;
    font-size: 3rem;
    letter-spacing: -1px;
  }
  .grey {
    color: #595959;
  }
  a {
    display: flex;
    margin-top: 40px;
    text-decoration: none;
    color: black;

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
        <h1>one pictuer at a time</h1>
        <a href="https://google.com">
          Book an appointment <img src={arrow} alt="arrow-icon" />
        </a>
      </StyledDescription>
    </StyledContainer>
  )
}

export default Header
