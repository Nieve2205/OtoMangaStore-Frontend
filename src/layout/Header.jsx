import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo-container">
        <img src="/logo.avif" alt="Otamanga Logo" className="logo" />
      </div>
      
      <nav className="nav-menu">
        <a href="#inicio" className="nav-link">INICIO</a>
        <a href="#tienda" className="nav-link">TIENDA</a>
        <a href="#nosotros" className="nav-link">NOSOTROS</a>
        <a href="#miembros" className="nav-link">MIEMBROS</a>
      </nav>

      <div className="header-actions">
        <button className="btn-entrar">
          <span className="user-icon">👤</span> Entrar
        </button>
        <button className="btn-cart">
          🛒 <span className="cart-count">0</span>
        </button>
      </div>
    </header>
  );
};

export default Header;