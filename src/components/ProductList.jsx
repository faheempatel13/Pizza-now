import React from "react";
import styled from "styled-components";
import Product from "./Product";

const Container = styled.div`
  width: 100vw;
  height: calc(150vh - 13vh);
  background-color: #202124;
  /* background-image: radial-gradient(#eb3f3f ,  #E31B1B) ; */
`;
const Wapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
`;

const ProductList = () => {
  return (
    <>
      <Container>
        <Wapper>
         <Product/>
         <Product/>
         <Product/>
         <Product/>
         <Product/>
         <Product/>
         <Product/>
         <Product/>
        </Wapper>
      </Container>
    </>
  );
};

export default ProductList;
