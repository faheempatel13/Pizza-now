import React from "react";
import styled from "styled-components";
import { silder } from "./data";
import { useState } from "react";

const Container = styled.div`
  height: 97vh;
  display: flex;
  align-items: center;
`;
const Waper = styled.div`
  /* background-color: #E31B1B; */
  background-image: radial-gradient(#eb3f3f, #e31b1b);

  display: flex;
  align-items: center;
  height: 100%;
  min-width: 100vw;
  transform: translatex(${(props) => props.slideIndex * -100}vw);
  transition: 1.5s ease-in;
`;
const Left = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
`;
const Img = styled.img`
  width: 60%;
  object-fit: contain;
`;
const Right = styled.div`
  height: 40%;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
`;
const Head = styled.h1`
  font-size: 4em;
  color: white;
`;
const Decs = styled.p`
  font-size: 2.5em;
  color: white;
`;
const Line = styled.div`
  width: 60%;
  height: 3px;
  background-color: white;
`;
const Arow = styled.img`
  height: 50px;
  width: 50px;
`;

function Silder() {
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };
  return (
    <>
      <Container>
        {silder.map((item) => (
          <>
            <Waper bg={item.bg} slideIndex={slideIndex}>
              <Arow direction="left" onClick={() => handleClick("left")} src="../img/arrowl.png"></Arow>
              <Left key={item.id}>
                  <Img src={item.src}></Img>
              </Left>
              <Right>
                <Head>{item.title} </Head>
                <Line></Line>
                <Line></Line>
                <Decs>{item.decs}</Decs>
              </Right>
              <Arow direction="right" onClick={() => handleClick("right")} src="../img/arrowr.png"></Arow>
            </Waper>
          </>
        ))}
      </Container>
    </>
  );
}

export default Silder;
