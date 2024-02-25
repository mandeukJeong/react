import React from 'react';

const ShopList = (props) => {
  return (
    <div className="col-md-4">
      <img
        src={`https://codingapple1.github.io/shop/shoes${
          props.shoes.id + 1
        }.jpg`}
        alt={`신발${props.shoes.id + 1}`}
        width="80%"
      />
      <h4>{props.shoes.title}</h4>
      <p>{props.shoes.price}</p>
    </div>
  );
};

export default ShopList;
