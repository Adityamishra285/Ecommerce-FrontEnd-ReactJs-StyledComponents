import React from "react"
import styled from "styled-components"
import { Badge } from "@material-ui/core"
import { Search, ShoppingCartOutlined } from "@material-ui/icons"
import { mobile } from "../responsive"

const Container = styled.div`
  height: 65px;
  ${mobile({ height: "50px" })}
`
const Wrapper = styled.div`
  padding: 10px 20px;
  height: inherit;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${mobile({ padding: "10px 0px" })}
`
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  /* border: 0.5px solid red; */
  /* justify-content: center; */
`
const Language = styled.span`
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  ${mobile({ display: "none" })}
`
const SearchContainer = styled.div`
  border: 1px solid lightblue;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`
const Input = styled.input.attrs((props) => ({
  placeholder: props.placeholder,
}))`
  border: none;
  outline: none;
  ${mobile({ width: "50px", height: "10px" })}
`

const Center = styled.div`
  flex: 1;
  text-align: center;
  cursor: pointer;
  /* border: 0.5px solid red; */
`
const Logo = styled.h1`
  font-weight: bold;
  ${mobile({ fontSize: "20px" })}
`

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}
`
const MenuItem = styled.div`
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  margin-left: 10px;
  margin-right: 25px;
  ${mobile({ fontSize: "10px", marginLeft: "10px" })}
`
// const Divider = styled.hr`
//   opacity: 0.5;
// `

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder="Search"></Input>
            <Search style={{ color: "lightblue", fontSize: 25 }} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>Roxtom.</Logo>
        </Center>
        <Right>
          <MenuItem>REGISTER</MenuItem>
          <MenuItem>SIGN IN</MenuItem>
          <MenuItem>
            <Badge badgeContent={3} color="secondary">
              <ShoppingCartOutlined />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  )
}
export default Navbar
