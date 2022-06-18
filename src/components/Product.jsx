import {
  Favorite,
  FavoriteBorderOutlined,
  Search,
  SearchOutlined,
  ShoppingCart,
  ShoppingCartOutlined,
} from "@material-ui/icons"
import styled from "styled-components"
import { mobile } from "../responsive"

const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 3;
  transition: all 0.5s ease;
  cursor: pointer;
`

const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 286px;
  height: 350px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f5fbfd;
  position: relative;

  &:hover ${Info} {
    opacity: 1;
  }

  ${mobile({ height: "30vh" })}
`
const Circle = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: white;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Image = styled.img`
  height: 75%;
  z-index: 2;
`

const Icon = styled.div`
  width: 40px;
  height: 40px;
  background-color: white;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;
  transition: all 0.3s ease;

  &:hover {
    background-color: #e9f5f5;
    transform: scale(1.2);
  }
`

const Product = ({ item }) => {
  return (
    <Container>
      <Circle></Circle>
      <Image src={item.img} />
      <Info>
        <Icon>
          <ShoppingCart />
        </Icon>
        <Icon>
          <Search />
        </Icon>
        <Icon>
          <Favorite />
        </Icon>
      </Info>
    </Container>
  )
}

export default Product
