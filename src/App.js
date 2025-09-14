import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate, Navigate } from "react-router-dom";
import Navbar from './Components/Navbar';
import Contact from './Components/Contact';
import Products from './Components/Products';
import Cart from './Components/Cart';
import Signup from './Components/Signup';
import Login from './Components/Login';
import ProtectedPage from './PrivateRoute'; // Make sure you have this component
import { AuthProvider, useAuth } from "./AuthContext";
import PrivateRoute from './PrivateRoute';




import './App.css';
function ProtectedRoute({ children }) {
  const { user } = useAuth();
  return user ? children : <Navigate to="/login" />;
}

function Home() {
  const navigate = useNavigate();

  return (
    <div>
      <h1 style={{ fontSize: '40px', marginRight: '80%' }}>Our Product</h1>
      <div className='card-container'>
        <div className='card-1'>
          <img className='product-image' src="minerva.png" alt="Product 1" />
          <div className="product-info slide-in-right">
            <p><b>Why Choose Minerva?</b><br/>
              🫧 Refreshingly fizzy and bursting with flavor.<br/>
              🫧 Produced under hygienic, state-of-the-art facilities.<br/>
              🫧 Guaranteed safety and consistency in every sip.
            </p>
            <button className='buynow' onClick={() => navigate('/products')}>
              Our Products
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}



function App() {
  const initialProducts = [
    { id: 1, name: 'Soda', img: 'Soda.jpg', price: 20.00 },
    { id: 2, name: 'Lemon Soda', img: 'Lemon.jpg', price: 25.50 },
    { id: 3, name: 'Orange Soda', img: 'orange.jpg', price: 22.75 },
    { id: 4, name: 'Coca-Cola', img: 'Cococola.jpg', price: 30.00 },
  ];

  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product, quantity) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        return [...prev, { ...product, quantity }];
      }
    });
  };

  const removeFromCart = (id) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const updateCartQuantity = (id, newQty) => {
    setCartItems(prev =>
      prev.map(item =>
        item.id === id ? { ...item, quantity: newQty } : item
      )
    );
  };

  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <Routes>
  <Route path="/protected" element={<PrivateRoute><ProtectedPage /></PrivateRoute>} />
</Routes>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route 
            path="/products" 
            element={<Products products={initialProducts} onAddToCart={addToCart} />} 
          />
          <Route 
            path="/cart" 
            element={<Cart cartItems={cartItems} onRemove={removeFromCart} onQuantityChange={updateCartQuantity} />} 
          />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route 
            path="/protected" 
            element={
              <ProtectedRoute>
                <ProtectedPage />
              </ProtectedRoute>
            } 
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
