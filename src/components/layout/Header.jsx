import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaUser, FaShoppingCart, FaBars, FaTimes } from 'react-icons/fa';
import { useCart } from '../../context/CartContext'; // Importamos el hook del carrito
import './Header.css';

const Header = () => {
  const { cartCount, toggleCart } = useCart(); // Extraemos data y función del contexto
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="header-container">
        {/* 1. LOGO */}
        <div className="logo-container">
          <Link to="/" onClick={closeMenu}>
            <img src="/logo.avif" alt="Otamanga Logo" className="logo" />
          </Link>
        </div>

        {/* 2. MENÚ DE NAVEGACIÓN */}
        <nav className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <NavLink 
            to="/" 
            className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
            onClick={closeMenu}
          >
            INICIO
          </NavLink>
          <NavLink 
            to="/catalogo" 
            className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
            onClick={closeMenu}
          >
            CATÁLOGO
          </NavLink>
          <NavLink 
            to="/recomendaciones" 
            className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
            onClick={closeMenu}
          >
            RECOMENDACIONES
          </NavLink>
          <NavLink 
            to="/nosotros" 
            className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
            onClick={closeMenu}
          >
            NOSOTROS
          </NavLink>
          
          <button className="mobile-close-btn" onClick={toggleMenu}>
            <FaTimes />
          </button>
        </nav>

        {/* 3. ACCIONES */}
        <div className="header-actions">
          <Link to="/login" className="btn-entrar">
            <FaUser className="action-icon" /> 
            <span className="btn-text">Entrar</span>
          </Link>
          
          <div className="cart-container">
            {/* Botón que abre el carrito */}
            <button className="btn-cart" onClick={toggleCart}>
              <FaShoppingCart className="action-icon" />
              {/* Contador dinámico */}
              <span className="cart-count">{cartCount}</span>
            </button>
          </div>

          <button className="mobile-toggle-btn" onClick={toggleMenu}>
            <FaBars />
          </button>
        </div>
      </div>
      
      {isMenuOpen && <div className="overlay" onClick={closeMenu}></div>}
    </header>
  );
};

export default Header;