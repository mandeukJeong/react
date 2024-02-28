import React from 'react';
import { Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { changeName, changeAge } from '../store/userSlice';

const Cart = () => {
  let user = useSelector((state) => state.user);
  let cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <div>
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
                    dispatch(changeName());
                  }}
                >
                  +
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Cart;
