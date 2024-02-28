import React, { useState, memo } from 'react';
import { Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { changeAge } from '../store/userSlice';
import { increase, deleteItem } from '../store/cartSlice';

const Child = memo(function () {
  console.log('재렌더링됨');
  return <div>자식임</div>;
});

const Cart = () => {
  let user = useSelector((state) => state.user);
  let cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  let [count, setCount] = useState(0);

  return (
    <div>
      <Child count={count}></Child>
      <button onClick={() => setCount(count + 1)}>+</button>
      <h6>
        {user.name} {user.age}의 장바구니
      </h6>
      <button onClick={() => dispatch(changeAge(20))}>버튼</button>
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>상품명</th>
            <th>수량</th>
            <th>변경하기</th>
            <th>삭제하기</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item, index) => (
            <tr key={index}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.count}</td>
              <td>
                <button
                  onClick={() => {
                    dispatch(increase({ id: item.id }));
                  }}
                >
                  +
                </button>
              </td>
              <td>
                <button onClick={() => dispatch(deleteItem(item.id))}>-</button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Cart;
