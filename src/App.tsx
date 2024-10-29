import React, { useState } from 'react';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import { Product } from './types/Product';
import './App.css'
const initialProducts: Product[] = [
  { id: 1, name: 'Macbook Air M1', price: 20 },
  { id: 2, name: 'Macbook Air M2', price: 30 },
  { id: 3, name: 'Iphone 16', price: 40 }
];

const App: React.FC = () => {
  const [products] = useState<Product[]>(initialProducts);
  const [cartItems, setCartItems] = useState<Product[]>([]);
  const [stage, setStage] = useState<'list' | 'cart' | 'checkout'>('list');

  const addToCart = (product: Product) => setCartItems([...cartItems, product]);
  const removeFromCart = (productId: number) =>
    setCartItems(cartItems.filter(item => item.id !== productId));
  const handleCheckout = () => alert('Purchase confirmed!');

  return (
    <div className="main">
      {stage === 'list' && (
        <ProductList products={products} addToCart={addToCart} />
      )}
      {stage === 'cart' && (
        <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
      )}
      {stage === 'checkout' && (
        <Checkout cartItems={cartItems} handleCheckout={handleCheckout} />
      )}
      <footer>
        <button onClick={() => setStage('list')}>Product List</button>
        <button onClick={() => setStage('cart')}>Cart</button>
        <button onClick={() => setStage('checkout')}>Checkout</button>
      </footer>
    </div>
  );
};

export default App;
