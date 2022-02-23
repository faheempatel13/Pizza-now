import React from "react";
import styled from "styled-components";





const Container = styled.div`
  width: 100vw;
  height: calc(100vh - 13vh);
  /* background-color: #202124; */
  background-image: radial-gradient(#eb3f3f ,  #E31B1B) ;
`;
const Wapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
const Card = styled.div`
  width: 250px;
  height: 350px;
  background-color: white;
  border-radius: 10px;
  /* box-shadow: -7px 9px 8px 0px #6a6a6a; */
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
`;
const Img = styled.img``;
const Decs = styled.span``;

const ProductList = () => {
  return (
    <>
      <Container>
        <Wapper>
          <Card>
            <Decs></Decs>
          </Card>
          <Card>
            <Img></Img>
            <Decs></Decs>
          </Card>
          <Card>
            <Img></Img>
            <Decs></Decs>
          </Card>
          <Card>
            <Img></Img>
            <Decs></Decs>
          </Card>
        </Wapper>
      </Container>
    </>
  );
};

export default ProductList;
