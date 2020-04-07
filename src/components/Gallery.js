import React, { useState } from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import arrow from '../images/arrow-down.svg'
import close from '../images/close.svg'
import { graphql, useStaticQuery } from 'gatsby'

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;

  .arrow-container {
    align-self: center;
    margin-top: 30px;
    width: 40px;
    transition: all 200ms ease-in-out;

    :hover {
      cursor: pointer;
    }
  }
`
const StyledImagesContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 3px;
  width: 100%;
`

const Gallery = () => {
  const [state, setState] = useState(false)

  const toggleGallery = () => {
    setState(!state)
  }

  const data = useStaticQuery(graphql`
    {
      allFile(filter: { relativeDirectory: { eq: "gallery" } }) {
        nodes {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    }
  `)

  const images = data.allFile.nodes
  const featured = []
  for (let i = 5; i <= 8; i++) {
    featured.push(images[i])
  }
  return (
    <StyledContainer>
      {state ? (
        <StyledImagesContainer>
          {images.map((item, index) => (
            <Img fluid={item.childImageSharp.fluid} key={index} />
          ))}
        </StyledImagesContainer>
      ) : (
        <StyledImagesContainer>
          {featured.map((item, index) => (
            <Img fluid={item.childImageSharp.fluid} key={index} />
          ))}
        </StyledImagesContainer>
      )}
      <div className="arrow-container" onClick={toggleGallery}>
        {state ? (
          <img className="arrow" src={close} alt="close" />
        ) : (
          <img className="arrow" src={arrow} alt="arrow-down" />
        )}
      </div>
    </StyledContainer>
  )
}

export default Gallery
