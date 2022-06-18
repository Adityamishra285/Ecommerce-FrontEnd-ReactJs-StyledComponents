import { Button } from "@material-ui/core"
import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons"
import React, { useState } from "react"
import styled from "styled-components"
import { sliderItems } from "../data"
import { mobile } from "../responsive"

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
  ${mobile({ display: "none" })}
`
const Arrow = styled.div`
  width: 40px;
  height: 40px;
  background-color: #000000;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  /* left:10px;
    right:10px; */
  margin: auto;
  cursor: pointer;
  opacity: 0.8;
  z-index: 2;
`
const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`
const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: #${(props) => props.bg};
`

const ImgContainer = styled.div`
  flex: 1;
  height: 100%;
`
const Image = styled.img`
  margin-left: 55px;
  height: 100%;
`

const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`
const Title = styled.h1`
  margin: 50px 0px;
  font-size: 70px;
  font-weight: 600;
`
const Desc = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  letter-spacing: 3px;
`
// const Button = styled.button`

//     padding: 10px;
//     font-size: 20px;
//     background-color: transparent;
//     cursor: pointer;
//     `
const Bttn = styled.div``

const SLider = () => {
  const [sliderIndex, setSlideIndex] = useState(0)
  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(sliderIndex > 0 ? sliderIndex - 1 : 2)
    } else {
      setSlideIndex(sliderIndex < 2 ? sliderIndex + 1 : 0)
    }
  }
  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <ArrowLeftOutlined style={{ color: "white" }} />
      </Arrow>
      <Wrapper slideIndex={sliderIndex}>
        {sliderItems.map((items) => (
          <Slide bg={items.bg} key={items.id}>
            <ImgContainer>
              <Image src={items.img}></Image>
            </ImgContainer>
            <InfoContainer>
              <Title>{items.title}</Title>
              <Desc>{items.desc}</Desc>
              {/* <Button>SHOP NOW</Button> */}
              <Bttn>
                <Button
                  variant="contained"
                  style={{ color: "white", backgroundColor: "black" }}
                >
                  SHOP NOW
                </Button>
              </Bttn>
            </InfoContainer>
          </Slide>
        ))}
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <ArrowRightOutlined style={{ color: "white" }} />
      </Arrow>
    </Container>
  )
}

export default SLider
