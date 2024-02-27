import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ShopDetail = (props) => {
  let { id } = useParams();
  const [isRender, setIsRender] = useState(true);

  useEffect(() => {
    let timer = setTimeout(() => {
      setIsRender(false);
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="container">
      {isRender && (
        <div className="alert alert-warning">2초이내 구매시 할인</div>
      )}
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
