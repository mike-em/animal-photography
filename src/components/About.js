import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import { graphql, useStaticQuery } from 'gatsby'
import { device } from '../utils/device'

const StyledContainer = styled.div`
  width: 100vw;
  height: 100%;
  background-color: hsl(0, 20%, 90%);
  margin-top: 15px;

  @media ${device.tablet} {
    min-height: 100vh;
  }

  @media ${device.laptop} {
    display: flex;
    min-height: 100vh;
  }
`
const StyledImageContainer = styled.div`
  width: 95%;
  margin: 40px 0;

  @media ${device.laptop} {
    width: 85%;
  }

  @media ${device.desktop} {
    width: 75%;
  }

  img {
    border: 15px solid white;
  }
`

const StyledDescription = styled.div`
  display: flex;
  flex-direction: column;
  width: 95%;
  margin: 0 auto;

  @media ${device.laptop} {
    align-self: center;
    margin-left: -110px;
    margin-top: -300px;
    width: 440px;
    height: 410px;
    border: 15px solid white;
    background-color: hsl(180, 50%, 85%);
    z-index: 20;
  }

  @media (max-height: 700px) {
    margin-top: -100px;
  }

  h1 {
    margin-bottom: 0;
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

  p {
    position: relative;

    @media ${device.laptop} {
      margin-left: 5px;
    }
  }
`

const About = () => {
  const data = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "photographer.jpg" }) {
        childImageSharp {
          fluid(grayscale: false) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `)
  return (
    <StyledContainer id="about">
      <StyledImageContainer>
        <Img fluid={data.file.childImageSharp.fluid} />
      </StyledImageContainer>
      <StyledDescription>
        <h1 className="grey">our</h1>
        <h1>story</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
          accusantium delectus iste deserunt vel eos reprehenderit illo alias
          fugit molestiae dolorem quidem at dolor labore temporibus deleniti
          earum, nesciunt incidunt.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores
          possimus vero qui! Totam, vel facere? Dicta error quasi ea, repellat
          nemo debitis ullam sapiente excepturi obcaecati perferendis nam fugiat
          alias!
        </p>
      </StyledDescription>
    </StyledContainer>
  )
}

export default About
