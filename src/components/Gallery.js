import React, { useState } from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import arrow from '../images/arrow-down.svg'
import close from '../images/close_new.svg'
import { Carousel } from 'react-responsive-carousel'
import { graphql, useStaticQuery } from 'gatsby'
import { device } from '../utils/device'

import styles from 'react-responsive-carousel/lib/styles/carousel.min.css'

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  transition: all 200ms ease-in-out;

  .arrow-container {
    align-self: center;
    margin: 30px 0;
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
  transition: all 200ms ease-in-out;

  @media ${device.laptop} {
    grid-gap: 10px;
  }
`

const StyledModal = styled.div`
  display: grid;
  align-content: center;
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: hsla(0, 0%, 50%, 0.8);
  backdrop-filter: blur(3px);
  z-index: 120;

  @media ${device.tablet} {
    padding: 0 8vw;
  }

  @media ${device.laptop} {
    padding: 0 10vw;
  }

  @media ${device.desktop} {
    padding: 0 15vw;
  }
`

const StyledCloseModal = styled.button`
  width: 40px;
  height: 40px;
  position: fixed;
  top: 40px;
  right: 40px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  z-index: 130;
`

const Gallery = () => {
  const [state, setState] = useState(false)
  const [modal, setModal] = useState(false)

  const openModal = () => setModal(true)
  const closeModal = () => setModal(false)

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
    <StyledContainer id="gallery">
      {state ? (
        <StyledImagesContainer onClick={openModal}>
          {images.map((item, index) => (
            <Img fluid={item.childImageSharp.fluid} key={index} />
          ))}
        </StyledImagesContainer>
      ) : (
        <StyledImagesContainer>
          {featured.map((item, index) => (
            <div onClick={openModal} key={index}>
              <Img fluid={item.childImageSharp.fluid} key={index} />
            </div>
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
      {modal && (
        <StyledModal>
          <StyledCloseModal onClick={closeModal}>
            <img src={close} alt="close" />
          </StyledCloseModal>
          <Carousel
            showThumbs={false}
            showArrows={false}
            swipeable={true}
            showIndicators={false}
            infiniteLoop={true}
            showArrows={true}
          >
            {images.map((item, index) => (
              <div key={index}>
                <Img fluid={item.childImageSharp.fluid} />
              </div>
            ))}
          </Carousel>
        </StyledModal>
      )}
    </StyledContainer>
  )
}

export default Gallery
