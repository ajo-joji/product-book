// src/Components/Cart.jsx

import React from "react";
import { useNavigate } from "react-router-dom";
import "./Cart.css";

function Cart({ cartItems = [], onRemove = () => {}, onQuantityChange = () => {} }) {
  const navigate = useNavigate();

  const totalPrice = cartItems.reduce((sum, item) => {
    const price = item.price || 0;
    const qty = item.quantity || 0;
    return sum + price * qty;
  }, 0);

  function handleCheckout() {
    // Maybe do validation, send order etc.
    alert("Thank you for your purchase! Your order has been placed successfully.");
    // After that navigate to products or home
    navigate('/products');
  }

  return (
    <div className='cart-page'>
      <h1 className="text-center mt-5">Cart Page</h1>
      <div className="container mt-5">
        {cartItems.length === 0 ? (
          <div className="card products-outline mt-3">
            <div className="product-card-section text-center">
              <h3>Your cart is empty</h3>
            </div>
          </div>
        ) : (
          <>
            {cartItems.map(item => (
              <div key={item.id} className="card products-outline mt-3">
                <div className="product-card-section">
                  <img
                    className="product-image-section"
                    src={item.img}
                    alt={item.name}
                  />
                  <div className="product-title">
                    <h3>{item.name}</h3>
                  </div>
                  <p className="product-text">
                    Price: ₹{(item.price || 0).toFixed(2)}
                  </p>
                  <p className="product-text">
                    Subtotal: ₹{((item.price || 0) * (item.quantity || 0)).toFixed(2)}
                  </p>
                </div>

                <div className="quantity-controls">
                  <button
                    className="decrease"
                    onClick={() =>
                      onQuantityChange(item.id, Math.max(1, item.quantity - 1))
                    }
                  >
                    −
                  </button>
                  <input
                    type="text"
                    value={item.quantity}
                    className="quantity"
                    readOnly
                  />
                  <button
                    className="increase"
                    onClick={() =>
                      onQuantityChange(item.id, item.quantity + 1)
                    }
                  >
                    +
                  </button>
                  <button
                    className="btn-remove"
                    onClick={() => onRemove(item.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}

            <div className="card products-outline mt-3 mb-5">
              <div className="product-card-section total-section">
                <h3>Total: ₹{totalPrice.toFixed(2)}</h3>
                <button
                  className="btn btn-primary"
                  onClick={handleCheckout}
                >
                  Proceed to Checkout
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Cart;
