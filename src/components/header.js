import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import film from '../images/film.svg'
import { graphql, useStaticQuery } from 'gatsby'

const StyledContainer = styled.div`
  width: 100vw;
  height: 100%;
  background-color: hsl(180, 50%, 70%);
`
const StyledImageContainer = styled.div`
  width: 95%;
  border: 20px solid white;
  background-color: white;

  img:hover {
    opacity: 0;
  }
`

const StyledDescription = styled.div`
  display: flex;
  flex-direction: column;
  width: 95%;
  height: 200px;
  margin: 0 auto;

  h1 {
    margin-bottom: 0;
    text-transform: uppercase;
    font-size: 3rem;
  }
  .grey {
    color: #595959;
  }
  a {
    margin-top: 40px;
    text-decoration: none;
    color: black;
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
        <a href="#">Book an appointment</a>
      </StyledDescription>
    </StyledContainer>
  )
}

export default Header
