//Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';



function Navbar() {
  return (
    <div className="navbar">
      <nav> 
        <div className='navbar-headings'>
        <h1  style={{ textAlign: 'center' }}> MINERVA-FACTORY 🫧 </h1>
<p style={{ textAlign: 'center' }}>The Solution To Your Appetite :)</p>
</div>
    </nav>
      <ul className="nav-links text-center">
        <li ><Link className='nav-item' to="/">Home</Link></li>
       
        <li><Link className='nav-item' to="/signup">Sign Up</Link></li>
        <li><Link className='nav-item' to="/login">Login</Link></li>
        
        <li><Link className='nav-item' to="/">Logout</Link></li>
      </ul>
    </div>
  );
}
export default Navbar;