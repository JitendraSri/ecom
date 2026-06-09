import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '../data/products';
import { ArrowLeft, CheckCircle, ShoppingCart } from 'lucide-react';

const ProductDetails = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!product) {
    return <div style={{ textAlign: 'center', padding: '4rem' }}><h2>Product not found</h2><Link to="/" className="btn btn-primary">Go Back Home</Link></div>;
  }

  return (
    <div>
      <Link to="/" className="back-link">
        <ArrowLeft size={20} /> Back to Catalog
      </Link>
      
      <div className="details-container">
        <div>
          <img src={product.image} alt={product.name} className="details-image" />
        </div>
        
        <div className="details-info">
          <span className="details-category">{product.category}</span>
          <h1 className="details-title">{product.name}</h1>
          <div className="details-price">${product.price.toFixed(2)}</div>
          
          <p className="details-desc">{product.description}</p>
          
          <div className="details-features">
            <div className="feature-item">
              <CheckCircle size={18} className="feature-icon" />
              <span>In stock and ready to ship</span>
            </div>
            <div className="feature-item">
              <CheckCircle size={18} className="feature-icon" />
              <span>Free shipping on orders over $50</span>
            </div>
            <div className="feature-item">
              <CheckCircle size={18} className="feature-icon" />
              <span>30-day money-back guarantee</span>
            </div>
          </div>
          
          <div style={{ display: 'flex', gap: '1rem', marginTop: 'auto' }}>
            <button className="btn btn-primary" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', flex: 2, padding: '1rem', fontSize: '1.1rem' }}>
              <ShoppingCart size={20} /> Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
