import React from 'react';
import { Product } from '../types/Product';

interface Props {
  cartItems: Product[];
  handleCheckout: () => void;
}

const Checkout: React.FC<Props> = ({ cartItems, handleCheckout }) => {
  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div>
      <h2>Checkout</h2>
      <p>Total: ${total.toFixed(2)}</p>
      <button onClick={handleCheckout}>Confirm Purchase</button>
    </div>
  );
};

export default Checkout;
