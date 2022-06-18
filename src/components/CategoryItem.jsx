import styled from "styled-components"
import { Button } from "@material-ui/core"
import { mobile } from "../responsive"

const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 70vh;
  position: relative;
`
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  ${mobile({ height: "45vh" })}
`
const Info = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  margin-top: 100px;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const Title = styled.h1`
  color: white;
  margin-bottom: 20px;
`
const Bttn = styled.div``

const CategoryItem = ({ item }) => {
  return (
    <Container>
      <Image src={item.img}></Image>
      <Info>
        <Title>{item.title}</Title>
        <Bttn>
          <Button
            variant="contained"
            style={{ color: "white", backgroundColor: "black" }}
          >
            SHOP NOW
          </Button>
        </Bttn>
      </Info>
    </Container>
  )
}

export default CategoryItem
