import React from "react";
import styled from "styled-components";

const Card = styled.div`
margin: 20px 30px;
  max-width: 250px;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  flex-direction: column;
  height: 350px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 19px 38px rgba(37, 33, 33, 0.3),
    0 15px 12px rgba(114, 114, 114, 0.171);
    perspective: 9999;
    &:hover{
     transform: scale(1.1);
     
    }
    transition: 0.5s;
`;
const Img = styled.img`
  flex: 1;
  object-fit: contain;
  width: 100%;
`;
const Decs = styled.div`
  padding: 10px 0px;
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
`;
const Span = styled.span`
  padding-top: 20px ;
  font-size: large;
`;

const Product = () => {
  return (
    <div>
      <Card>
        <Img src="../img/pizza.png"></Img>
        <Decs>
          <Span>300RS</Span>
          <Span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique,
            commodi
          </Span>
        </Decs>
      </Card>
    </div>
  );
};

export default Product;
