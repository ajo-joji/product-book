// src/index.js
import React from 'react';
import { createRoot } from 'react-dom/client';  // new import
import App from './App';
import './index.css';  // if you have styles

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>

    <App />
  </React.StrictMode>
);
