import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Nav } from 'react-bootstrap';

const ShopDetail = (props) => {
  let { id } = useParams();
  const [isRender, setIsRender] = useState(true);
  let [tab, setTab] = useState(0);
  const [end, setEnd] = useState('');

  useEffect(() => {
    let timer = setTimeout(() => {
      setIsRender(false);
    }, 2000);
    setEnd('end');

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className={`container start ${end}`}>
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

      <Nav variant="tabs" defaultActiveKey="link0">
        <Nav.Item>
          <Nav.Link eventKey="link0" onClick={() => setTab(0)}>
            버튼0
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link1" onClick={() => setTab(1)}>
            버튼1
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link2" onClick={() => setTab(2)}>
            버튼2
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <TabContent tab={tab} />
    </div>
  );
};

const TabContent = ({ tab }) => {
  let [fade, setFade] = useState('');

  useEffect(() => {
    let timer = setTimeout(() => {
      setFade('end');
    }, 100);

    return () => {
      clearTimeout(timer);
      setFade('');
    };
  }, [tab]);

  return (
    <div className={`start ${fade}`}>
      {[<div>내용0</div>, <div>내용1</div>, <div>내용2</div>][tab]}
    </div>
  );
};

export default ShopDetail;
