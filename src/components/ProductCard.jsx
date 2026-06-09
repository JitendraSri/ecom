import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <div className="product-image-container">
        <img src={product.image} alt={product.name} className="product-image" loading="lazy" />
        <span className="product-category">{product.category}</span>
      </div>
      <div className="product-info">
        <h3 className="product-title">{product.name}</h3>
        <p className="product-desc">{product.description}</p>
        <div className="product-price">${product.price.toFixed(2)}</div>
        <div className="product-actions">
          <Link to={`/product/${product.id}`} className="btn btn-secondary">
            View Details
          </Link>
          <button className="btn btn-primary" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
            <ShoppingCart size={16} /> Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
