import React from 'react';
import { Product } from '../types/Product';
import './Cart.styles.css';

interface Props {
  cartItems: Product[];
  removeFromCart: (productId: number) => void;
}

const Cart: React.FC<Props> = ({ cartItems, removeFromCart }) => (
  <div>
    <h2>Cart</h2>
    <div className="cart__list">

    {cartItems.map(item => (
      <div className="cart__item" key={item.id}>
        <span>{item.name}</span>
        <span>${item.price.toFixed(2)}</span>
        <button onClick={() => removeFromCart(item.id)}>Remove</button>
      </div>
    ))}
    </div>
  </div>
);

export default Cart;
