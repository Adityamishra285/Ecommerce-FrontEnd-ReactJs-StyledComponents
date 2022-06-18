import {
  Email,
  Facebook,
  Instagram,
  LocationOn,
  Phone,
  Pinterest,
  Twitter,
} from "@material-ui/icons"
import React from "react"
import styled from "styled-components"
import { mobile } from "../responsive"

const Container = styled.div`
  display: flex;
  ${mobile({ flexDirection: "column" })}
`
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`

const Logo = styled.h1``
const Desc = styled.div`
  margin: 20px 0px;
`
const SocialContainer = styled.div`
  display: flex;
`
const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ display: "none" })}
`
const Title = styled.h3`
  margin-bottom: 30px;
`
const List = styled.ul`
  margin: 0px;
  padding: 0px;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`
const ListItems = styled.li`
  width: 50%;
  margin-bottom: 10px;
`

const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ backgroundColor: "#fff8f8" })}
`

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`
const Payment = styled.img`
  width: 40%;
`

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>Roxtom.</Logo>
        <Desc>
          100% ORIGINAL guarantee for all products at Roxtom.com
          <br />
          <br />
          Return within 30days of receiving your order
        </Desc>
        <SocialContainer>
          <SocialIcon>
            <Facebook />
          </SocialIcon>
          <SocialIcon>
            <Instagram />
          </SocialIcon>
          <SocialIcon>
            <Twitter />
          </SocialIcon>
          <SocialIcon>
            <Pinterest />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItems>Home</ListItems>
          <ListItems>Cart</ListItems>
          <ListItems>Search</ListItems>
          <ListItems>Man Fashion</ListItems>
          <ListItems>Women Fashion</ListItems>
          <ListItems>Accessories</ListItems>
          <ListItems>My Account</ListItems>
          <ListItems>Order Tracking</ListItems>
          <ListItems>Wishlist</ListItems>
          <ListItems>Terms</ListItems>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <LocationOn style={{ marginRight: "10px" }} /> VIT University,
          Vellore, Tamil Nadu, India - 632014
        </ContactItem>
        <ContactItem>
          <Phone style={{ marginRight: "10px" }} /> +910000000001
        </ContactItem>
        <ContactItem>
          <Email style={{ marginRight: "10px" }} /> contact@roxtom.fur
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png"></Payment>
      </Right>
    </Container>
  )
}

export default Footer
