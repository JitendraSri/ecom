import React from 'react';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';

const Home = () => {
  return (
    <div className="animation-fade-in">
      <h1 className="page-title">Featured Products</h1>
      <div className="product-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Home;
