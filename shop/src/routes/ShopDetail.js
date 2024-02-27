import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ShopDetail = (props) => {
  let { id } = useParams();
  const [isRender, setIsRender] = useState(true);
  const [userNum, setUserNum] = useState('');
  const [alert, setAlert] = useState(false);

  useEffect(() => {
    let timer = setTimeout(() => {
      setIsRender(false);
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    if (!/^[0-9]*$/.test(userNum)) {
      setAlert(true);
    } else {
      setAlert(false);
    }
  }, [userNum]);

  return (
    <div className="container">
      {isRender && (
        <div className="alert alert-warning">2초이내 구매시 할인</div>
      )}
      {alert && <p style={{ color: 'red' }}>그러지마세요</p>}
      <input
        type="text"
        value={userNum}
        onChange={(e) => setUserNum(e.target.value)}
      />
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
