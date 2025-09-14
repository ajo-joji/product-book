// src/Components/Products.jsx

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Product.css';

function Products({ products = [], onAddToCart }) {
  const navigate = useNavigate();
  const [quantities, setQuantities] = useState(
    products.map(p => ({ id: p.id, quantity: 0 }))
  );

  const increase = (id) => {
    setQuantities(prev =>
      prev.map(q =>
        q.id === id ? { ...q, quantity: q.quantity + 1 } : q
      )
    );
  };

  const decrease = (id) => {
    setQuantities(prev =>
      prev.map(q =>
        q.id === id ? { ...q, quantity: q.quantity > 0 ? q.quantity - 1 : 0 } : q
      )
    );
  };

  const getQuantity = (id) => {
    const obj = quantities.find(q => q.id === id);
    return obj ? obj.quantity : 0;
  };

  const handleAdd = (product) => {
    const qty = getQuantity(product.id);
    if (qty > 0 && onAddToCart) {
      onAddToCart(product, qty);
    }
  };

  return (
    <div className='products-page'>
      <h1 className="text-center mt-5">Products Page</h1>
      <div className='container mt-5'>
        {products.map(product => (
          <div key={product.id} className='card products-outline mt-3'>
            <div className='product-card-section'>
              <img
                className='product-image-section mx-auto d-block'
                src={product.img}
                alt={product.name}
              />
              <div className='product-title'>
                <h3 className='text-center'>{product.name}</h3>
              </div>
              <p className='product-text text-center'>
                Price: ₹{product.price.toFixed(2)}
              </p>
            </div>

            <div className="quantity-controls">
              <button className="decrease" onClick={() => decrease(product.id)}>−</button>
              <input
                type="text"
                value={getQuantity(product.id)}
                className="quantity"
                readOnly
              />
              <button className="increase" onClick={() => increase(product.id)}>+</button>
            </div>

            <div className='text-center mb-3'>
              <button
                className="btn btn-primary"
                onClick={() => handleAdd(product)}
              >
                Add to Cart
              </button>
              <button
                className="btn btn-secondary ml-2"
                onClick={() => navigate('/cart')}
              >
                Go to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
