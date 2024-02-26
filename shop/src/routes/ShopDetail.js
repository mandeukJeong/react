import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

let YellowBtn = styled.button`
  background: ${(props) => props.bg};
  color: ${(props) => (props.bg === 'blue' ? 'white' : 'black')};
  padding: 10px;
`;

const ShopDetail = (props) => {
  let { id } = useParams();
  return (
    <div className="container">
      <YellowBtn bg="blue">버튼</YellowBtn>
      <YellowBtn bg="orange">버튼</YellowBtn>
      <div className="row">
        <div className="col-md-6">
          <img
            src={
              'https://codingapple1.github.io/shop/shoes' +
              (Number(id) + 1) +
              '.jpg'
            }
            alt={'상품' + (Number(id) + 1)}
            width="100%"
          />
        </div>
        <div className="col-md-6">
          <h4 className="pt-5">
            {props.shoes.find((item) => String(item.id) === id).title}
          </h4>
          <p>{props.shoes.find((item) => String(item.id) === id).content}</p>
          <p>{props.shoes.find((item) => String(item.id) === id).price}원</p>
          <button className="btn btn-danger">주문하기</button>
        </div>
      </div>
    </div>
  );
};

export default ShopDetail;
