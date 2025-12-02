// src/components/common/CartSidebar.jsx
import React from 'react';
import { useCart } from '../../context/CartContext';
import { FaTimes, FaTrash, FaMinus, FaPlus } from 'react-icons/fa';
import './CartSidebar.css';

const CartSidebar = () => {
  const { 
    isCartOpen, 
    closeCart, 
    cartItems, 
    removeFromCart, 
    updateQuantity, 
    cartTotal 
  } = useCart();

  return (
    <>
      {/* Overlay Oscuro */}
      <div 
        className={`cart-overlay ${isCartOpen ? 'open' : ''}`} 
        onClick={closeCart}
      />

      {/* Panel Lateral */}
      <div className={`cart-sidebar ${isCartOpen ? 'open' : ''}`}>
        <div className="cart-header">
          <h2>TU CARRITO</h2>
          <button className="close-btn" onClick={closeCart}>
            <FaTimes />
          </button>
        </div>

        <div className="cart-items-container">
          {cartItems.length === 0 ? (
            <div className="empty-cart">
              <p>Tu carrito está vacío, senpai.</p>
              <span style={{fontSize: '3rem'}}>Empty</span>
            </div>
          ) : (
            cartItems.map(item => (
              <div key={item.id} className="cart-item">
                <div className="item-img">
                  <img src={item.image} alt={item.title} />
                </div>
                <div className="item-details">
                  <h4>{item.title}</h4>
                  <p className="item-price">S/ {item.price.toFixed(2)}</p>
                  
                  <div className="item-controls">
                    <div className="qty-selector">
                      <button onClick={() => updateQuantity(item.id, -1)}><FaMinus /></button>
                      <span>{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.id, 1)}><FaPlus /></button>
                    </div>
                    <button 
                      className="remove-btn" 
                      onClick={() => removeFromCart(item.id)}
                    >
                      <FaTrash />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {cartItems.length > 0 && (
          <div className="cart-footer">
            <div className="cart-total">
              <span>TOTAL:</span>
              <span className="total-amount">S/ {cartTotal.toFixed(2)}</span>
            </div>
            <button className="checkout-btn">
              PROCEDER AL PAGO
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default CartSidebar;