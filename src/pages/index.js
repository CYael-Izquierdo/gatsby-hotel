import React from "react"
import styled from "@emotion/styled"
import { css } from "@emotion/core"

import Layout from "../components/Layout"
import MainImage from "../components/MainImage"
import HomeContent from "../components/HomeContent"
import useRoom from "../hooks/UseRoom"
import RoomPreview from "../components/RoomPreview"

const RoomList = styled.ul`
  max-width: 1200px;
  width: 95%;
  margin: 4rem auto 0 auto;
  
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 3rem;
  }
`

const IndexPage = () => {
  const rooms = useRoom()
  console.log(rooms)

  return (
    <Layout>
      <>
        <MainImage/>
        <HomeContent/>

        <h2
          css={css`
          text-align: center;
          margin-top: 5rem;
          font-size: 3rem;
        `}
        >Our Rooms</h2>

        <RoomList>
          {rooms.map(room => (
            <RoomPreview
              key={room.id}
              room={room}
            />
          ))}
        </RoomList>
      </>
    </Layout>
  )
}

export default IndexPage
