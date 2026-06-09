import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, Package } from 'lucide-react';

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="navbar">
      <div className="nav-content">
        <Link to="/" className="nav-logo">
          <Package size={28} />
          <span>NexusStore</span>
        </Link>
        
        <div className="nav-links">
          <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>
            Catalog
          </Link>
          <a href="#" className="nav-link">Categories</a>
          <a href="#" className="nav-link">Deals</a>
        </div>

        <button className="cart-btn">
          <ShoppingCart size={20} />
          <span>Cart (0)</span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
