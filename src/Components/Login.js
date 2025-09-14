// src/Components/Login.js
import React, { useState } from 'react';
import { auth } from '../firebaseConfig';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import './Login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/products');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div>
      <h2 className='heading mt-5'>Login</h2>
      {error && <p>{error}</p>}
      <form onSubmit={handleLogin} className='form-handler'>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="
::contentReference[oaicite:33]{index=33}
 
"submit>Login</button>
      </form>
    </div>
  );
}

export default Login;