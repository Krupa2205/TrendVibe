import React, { useState, useContext } from "react";
import { CartContext } from "../context/CartContext";
import { FaCartArrowDown } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";

const CartPage = () => {
  const securityKey = import.meta.env.VITE_SECURITY_KEY;

  const { cart, removeFromCart, increaseQuantity, decreaseQuantity } =
    useContext(CartContext);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredItems = cart.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const calculateTotalPrice = () => {
    return cart.reduce((total, item) => {
      const price = parseFloat(item.price) || 0;
      const quantity = item.quantity || 1;
      return total + price * quantity;
    }, 0);
  };

  const handlePayment = async () => {
    const totalAmount = calculateTotalPrice();

    try {
      // Create order on backend
      const { data } = await axios.post("https://krupa-backend.onrender.com/order", {
        amount: totalAmount,
      });

      // Configure Razorpay options
      const options = {
        key: securityKey,
        amount: data.amount,
        currency: data.currency,
        name: "TrendVibe",
        description: "Cart Payment",
        order_id: data.id,
        handler: (response) => {
          toast.success("Payment successful!");
          console.log(response);
        },
        prefill: {
          name: "Your Name",
          email: "your.email@example.com",
          contact: "1234567890",
        },
        theme: {
          color: "#474E93",
        },
      };
      const razorpay = new window.Razorpay(options);
      razorpay.open();
      console.log("Initiated Razorpay");
    } catch (error) {
      console.error("Error during payment:", error);
      toast.error("Payment failed. Please try again.");
    }
  };

  const handleRemove = (item) => {
    removeFromCart(item);
    toast(`Removed ${item.name} from the cart`, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progressStyle: { backgroundColor: "white" }, 
      style: { color: "red", backgroundColor: "white" }, 
    });
  };
  return (
    <div className="cart-page container mx-auto p-4">
      <h1 className="text-2xl font-bold text-center mb-6">Your Cart</h1>
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} />

      <input
        type="text"
        placeholder="Search items..."
        onChange={(e) => setSearchTerm(e.target.value)}
        className="mb-4 p-2 border rounded w-full"
      />

      <div className="cart-summary text-right mb-4">
        <p>Total items: {cart.length}</p>
        <p className="font-bold">Total Price: ₹{calculateTotalPrice().toFixed(2)}</p>
      </div>

      {cart.length === 0 ? (
        <p className="text-center text-gray-500 text-xl flex items-center justify-center space-x-2">
          Your cart is empty
          <FaCartArrowDown className="text-4xl" />
        </p>
      ) : (
        <div className="space-y-4">
          {filteredItems.map((item) => (
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
                <div className="quantity-control flex items-center justify-center space-x-2 mt-2">
                  <button
                    onClick={() => decreaseQuantity(item)}
                    className="bg-gray-300 hover:bg-gray-400 text-black font-bold py-1 px-3 rounded"
                  >
                    -
                  </button>
                  <input
                    type="number"
                    value={item.quantity || 1}
                    readOnly
                    className="text-center border w-12"
                  />
                  <button
                    onClick={() => increaseQuantity(item)}
                    className="bg-gray-300 hover:bg-gray-400 text-black font-bold py-1 px-3 rounded"
                  >
                    +
                  </button>
                </div>
              </div>
              <button
                onClick={() => handleRemove(item)}
                className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded transition duration-200"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}

      {cart.length > 0 && (
        <div className="text-center mt-6">
          <button
            onClick={handlePayment}
            className="bg-purple-800 font-bold text-white px-6 py-3 rounded shadow-lg hover:bg-purple-700"
          >
            Proceed to Pay ₹{calculateTotalPrice().toFixed(2)}
          </button>
        </div>
      )}
    </div>
  );
};

export default CartPage;
