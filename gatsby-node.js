exports.createPages = async ({actions, graphql, reporter}) => {
  const result = await graphql(`
    query {
      allDatoCmsRoom {
        nodes {
          slug
        }
      }
    }
  `)

  if(result.errors) {
    reporter.panic("There was not results", result.errors)
  }

  // If exist pages, create files
  const rooms = result.data.allDatoCmsRoom.nodes

  rooms.forEach(room => {
    actions.createPage({
      path: `/rooms/${room.slug}`,
      component: require.resolve("./src/components/Room.js"),
      context: {
        slug: room.slug
      }
    })
  })

}
