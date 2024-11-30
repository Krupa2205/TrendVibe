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

 // Function to add an item to the cart
const addToCart = (item) => {
  const itemWithId = { ...item, id: Date.now(), quantity: 1 };  // Ensure unique id and set default quantity to 1
  setCart((prevCart) => [...prevCart, itemWithId]);
};


  // Function to remove an item from the cart
  const removeFromCart = (itemToRemove) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== itemToRemove.id));
  };

  // Function to increase the quantity of an item in the cart
  const increaseQuantity = (itemToIncrease) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === itemToIncrease.id
          ? { ...item, quantity: (item.quantity || 1) + 1 }  // Ensure quantity is valid and increment it
          : item
      )
    );
  };

  // Function to decrease the quantity of an item in the cart
  const decreaseQuantity = (itemToDecrease) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === itemToDecrease.id && item.quantity > 1
          ? { ...item, quantity: (item.quantity || 1) - 1 }  // Ensure quantity is valid and decrement it
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
