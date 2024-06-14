// src/Logo.jsx
import React from 'react';
import './Logo.css';
import Logo5 from './assets/Logo5.png'; // Adjust the path if necessary

const Logo = () => {
  return (
    <div className="logo-container">
      <img src={Logo5} alt="El Dato MX logo" className="logo" />
    </div>
  );
};

export default Logo;

