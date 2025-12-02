// src/context/CartContext.jsx
import React, { createContext, useState, useContext, useEffect } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  // Estado del carrito: array de productos
  const [cartItems, setCartItems] = useState(() => {
    // Intentar recuperar del localStorage al inicio
    const savedCart = localStorage.getItem('otomanga_cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // Estado para controlar si el sidebar está abierto o cerrado
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Guardar en localStorage cada vez que cambie el carrito
  useEffect(() => {
    localStorage.setItem('otomanga_cart', JSON.stringify(cartItems));
  }, [cartItems]);

  // Funciones Lógicas
  const toggleCart = () => setIsCartOpen(!isCartOpen);
  const closeCart = () => setIsCartOpen(false);

  const addToCart = (product) => {
    setCartItems(prevItems => {
      // ¿El producto ya está en el carrito?
      const existingItem = prevItems.find(item => item.id === product.id);

      if (existingItem) {
        // Si existe, aumentamos la cantidad
        return prevItems.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        // Si no existe, lo agregamos con cantidad 1
        // Aseguramos de guardar solo los datos necesarios
        return [...prevItems, { 
          id: product.id, 
          title: product.title, 
          price: product.price, 
          image: product.image, 
          quantity: 1 
        }];
      }
    });
    // Abrir el carrito automáticamente al agregar (opcional, buen UX)
    setIsCartOpen(true);
  };

  const removeFromCart = (id) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id));
  };

  const updateQuantity = (id, change) => {
    setCartItems(prevItems => 
      prevItems.map(item => {
        if (item.id === id) {
          const newQuantity = item.quantity + change;
          return newQuantity > 0 ? { ...item, quantity: newQuantity } : item;
        }
        return item;
      })
    );
  };

  // Cálculos derivados
  const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const cartTotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);

  return (
    <CartContext.Provider value={{
      cartItems,
      isCartOpen,
      toggleCart,
      closeCart,
      addToCart,
      removeFromCart,
      updateQuantity,
      cartCount,
      cartTotal
    }}>
      {children}
    </CartContext.Provider>
  );
};