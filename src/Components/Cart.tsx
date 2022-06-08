import React from 'react';
import { useSelector } from 'react-redux';

// import { Container } from './styles';

const Cart: React.FC = () => {
  const state = useSelector((state) => state);
  console.log(state);

  return (
    <table>
      <thead>
        <tr>
          <th>Produto</th>
          <th>Preço</th>
          <th>Quantidade</th>
          <th>Subtotal</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>Produto</th>
          <th>Preço</th>
          <th>Quantidade</th>
          <th>Subtotal</th>
        </tr>
      </tbody>
    </table>
  );
};

export default Cart;
