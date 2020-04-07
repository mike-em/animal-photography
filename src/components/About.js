import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import { graphql, useStaticQuery } from 'gatsby'

const StyledContainer = styled.div`
  width: 100vw;
  height: 100%;
  background-color: hsl(0, 20%, 90%);
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
  margin: 0 auto;

  h1 {
    margin-bottom: 0;
    text-transform: uppercase;
    font-size: 3rem;
    letter-spacing: -1px;
  }
  .grey {
    color: #595959;
  }

  p {
    position: relative;
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
    <StyledContainer>
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
