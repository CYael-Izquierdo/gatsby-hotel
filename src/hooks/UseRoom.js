import { graphql, useStaticQuery } from "gatsby"

const useRoom = () => {
  const data = useStaticQuery(graphql`
      query {
          allDatoCmsRoom {
              nodes {
                  title
                  id
                  slug
                  content
                  image {
                      fluid (maxWidth: 1200){
                          ...GatsbyDatoCmsFluid
                      }
                  }
              }
          }
      }
  `)

  return data.allDatoCmsRoom.nodes.map(room => ({
    title: room.title,
    id: room.id,
    content: room.content,
    slug: room.slug,
    image: room.image
  }))
}

export default useRoom
