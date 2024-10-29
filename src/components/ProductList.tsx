import React from "react";
import { Product } from "../types/Product";
import "./ProductList.styles.css";
interface Props {
  products: Product[];
  addToCart: (product: Product) => void;
}

const ProductList: React.FC<Props> = ({ products, addToCart }) => (
  <div className="product__list">
    {products.map((product) => (
      <div className="product__item" key={product.id}>
        <div className="product__item__description">
          <span className="product__item__name">{product.name}</span>
          <span>${product.price.toFixed(2)}</span>
        </div>
        <button onClick={() => addToCart(product)}>Add to Cart</button>
      </div>
    ))}
  </div>
);

export default ProductList;
