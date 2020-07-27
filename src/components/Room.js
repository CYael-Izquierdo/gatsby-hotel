import React from "react"
import { graphql } from "gatsby"
import GatsbyImage from "gatsby-image"
import { css } from "@emotion/core"

import Layout from "./Layout"

export const query = graphql`
    query($slug: String!) {
        allDatoCmsRoom(filter: {slug: {eq: $slug}}) {
            nodes {
                title
                content
                image {
                    fluid(maxWidth: 1200) {
                        ...GatsbyDatoCmsFluid
                    }
                }
            }
        }
    }
`

const RoomTemplate = ({ data: { allDatoCmsRoom: { nodes } } }) => {

  const { title, content, image } = nodes[0]

  return (
    <Layout>
      <main
        css={css`
          margin: 0 auto;
          max-width: 1200px;
          width: 95%;
        `}
      >
        <h1
          css={css`
            text-align: center;
            margin-top: 4rem;
          `}
        >{title}</h1>
        <p>{content}</p>
        <GatsbyImage
          fluid={image.fluid}
        />
      </main>
    </Layout>
  )
}

export default RoomTemplate
