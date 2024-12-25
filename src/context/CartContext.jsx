import React, { createContext, useState, useEffect } from 'react';

// Create the CartContext
export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  // Load cart from localStorage if available, otherwise default to an empty array
  const [cart, setCart] = useState(() => {
    return JSON.parse(localStorage.getItem('cart')) || [];
  });

  // Update localStorage whenever the cart state changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

 //  add an item to the cart
const addToCart = (item) => {
  const itemWithId = { ...item, id: Date.now(), quantity: 1 };  
  
  setCart((prevCart) => [...prevCart, itemWithId]);
};


  //  remove an item from the cart
  const removeFromCart = (itemToRemove) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== itemToRemove.id));
  };

  //  increase ..
  const increaseQuantity = (itemToIncrease) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === itemToIncrease.id
          ? { ...item, quantity: (item.quantity || 1) + 1 }  
          
          : item
      )
    );
  };

  //  decrease ...
  const decreaseQuantity = (itemToDecrease) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === itemToDecrease.id && item.quantity > 1
          ? { ...item, quantity: (item.quantity || 1) - 1 }  
          : item
      )
    );
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, increaseQuantity, decreaseQuantity }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;