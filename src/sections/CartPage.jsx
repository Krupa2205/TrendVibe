import React, { useContext } from 'react';
import { CartContext } from './CartContext';
import { FaCartArrowDown } from "react-icons/fa";

const CartPage = () => {
  const { cart, removeFromCart } = useContext(CartContext);

  return (
    <div className="cart-page container mx-auto p-4">
      <h1 className="text-2xl font-bold text-center mb-6">Your Cart</h1>
      {cart.length === 0 ? (
        <p className="text-center text-gray-500 text-xl flex items-center justify-center space-x-2">
          Your cart is empty 
          <FaCartArrowDown className="text-4xl" />
        </p>
      ) : (
        <div className="space-y-4">
          {cart.map((item) => (
            <div
              key={item.id}
              className="cart-item flex flex-col md:flex-row items-center bg-white rounded-lg shadow-md p-4 md:space-x-4 space-y-4 md:space-y-0"
            >
              <img
                src={item.img}
                alt={item.name}
                className="w-24 h-24 rounded object-cover"
              />
              <div className="flex-1 text-center md:text-left">
                <h2 className="text-lg font-semibold">{item.name}</h2>
                <p className="text-gray-600">${item.price}</p>
              </div>
              <button
                onClick={() => removeFromCart(item)}
                className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded transition duration-200"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CartPage;
