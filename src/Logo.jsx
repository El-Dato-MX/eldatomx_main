// src/Logo.jsx
import React from 'react';
import './Logo.css';
import logo from './assets/logo.png'; // Adjust the path if necessary

const Logo = () => {
  return (
    <div className="logo-container">
      <img src={logo} alt="El Dato MX logo" className="logo" />
    </div>
  );
};

export default Logo;

