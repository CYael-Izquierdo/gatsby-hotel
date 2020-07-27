import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import GatsbyImage from "gatsby-image"
import styled from "@emotion/styled"
import { css } from "@emotion/core"

const HomeText = styled.div`
  padding-top: 4rem;
  max-width: 1200px;
  width: 95%;
  margin: 0 auto;
  
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 2fr 1fr;
    column-gap: 2rem;
  }
  
  p {
    line-height: 1.5;
  }
`;

const HomeContent = () => {

  const info = useStaticQuery(graphql`
      query {
          allDatoCmsPage (filter: { slug: {eq: "home"} }) {
              nodes {
                  title,
                  content,
                  image {
                      fluid {
                          ...GatsbyDatoCmsFluid
                      }
                  }
              }
          }
      }
  `)

  const { title, content, image } = info.allDatoCmsPage.nodes[0]

  return (
    <>
      <h2
        css={css`
          text-align: center;
          font-size: 4rem;
          margin-top: 4rem;
        `}
      >{title}</h2>

      <HomeText>
        <p>{content}</p>
        <GatsbyImage fluid={image.fluid}/>
      </HomeText>
    </>
  )
}

export default HomeContent
