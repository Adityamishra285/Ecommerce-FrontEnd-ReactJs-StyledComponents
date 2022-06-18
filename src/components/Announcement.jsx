import React from "react"
import styled from "styled-components"

const Container = styled.div`
  height: 40px;
  background-color: crimson;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 16px;
  font-weight: 500;
`

const Announcement = () => {
  return (
    <div>
      <Container>Super Deal! Free Shipping on Orders Over Rs399</Container>
    </div>
  )
}

export default Announcement
