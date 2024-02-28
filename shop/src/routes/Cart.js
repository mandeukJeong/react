import React from 'react';
import { Table } from 'react-bootstrap';
import { useSelector } from 'react-redux';

const Cart = () => {
  let a = useSelector((state) => state.user);
  let cart = useSelector((state) => state.cart);
  console.log(a);

  return (
    <div>
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
              <td>안녕</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Cart;
