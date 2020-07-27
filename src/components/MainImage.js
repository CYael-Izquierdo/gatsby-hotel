import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import styled from "@emotion/styled"

const ImageBackground = styled(BackgroundImage)`
  height: 700px;
`

const ImageText = styled.div`
  background-color: rgba(0,0,0,0.8);
  color: #fff;
  height: 100%;
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  justify-content: center;
  
  h1 {
    font-size: 4rem;
    margin: 0;
    
    @media (min-width: 992px) {
      font-size: 5.8rem;
    }
  }
  
  p {
    font-size: 2rem;
    
    @media (min-width: 992px) {
      font-size: 2.6rem;
    }
  }
`

const MainImage = () => {

  const { image } = useStaticQuery(graphql`
      query {
          image: file(relativePath: { eq: "8.jpg" }) {
              sharp: childImageSharp {
                  fluid {
                      ...GatsbyImageSharpFluid_withWebp
                  }
              }
          }
      }
  `)

  return (
    <ImageBackground
      tag="section"
      fluid={image.sharp.fluid}
      fadeIn="soft"
    >
      <ImageText>
        <h1>Welcome to Gatsby Hotel</h1>
        <p>Relax and comfort in a unique place</p>
      </ImageText>
    </ImageBackground>
  )
}

export default MainImage
