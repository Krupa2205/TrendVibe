import React, { useEffect, useContext } from "react";
import { FaStar, FaRegHeart } from "react-icons/fa";
import { MdAddShoppingCart, MdOutlineRemoveRedEye } from "react-icons/md";
import AOS from "aos";
import "aos/dist/aos.css";
import { products } from "../export";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@clerk/clerk-react";

const Productsgrid = () => {
  const { addToCart } = useContext(CartContext);
  const navigate = useNavigate();
  const { isSignedIn } = useAuth(); 

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 500,
      easing: "ease-in-out",
    });
    AOS.refresh();
  }, []);

  const handleAddToCart = (product) => {
    if (!isSignedIn) {
      toast.warning("You need to sign in to add items to the cart!");
      // navigate("/");
      return;
    }
  
    addToCart(product);
    toast.success(`${product.name} added to your cart!`, {
      pauseOnHover: false, 
      autoClose: 2000,     
      position: "top-right" 
    });
  };
  
  return (
    <div
      id="products"
      className="w-full lg:px-20 px-5 py-[80px] bg-gray-100 flex flex-col justify-center items-center gap-4"
    >
      <ToastContainer />
      <h1 data-aos="zoom-in" data-aos-delay="100" className="text-themepurple text-xl font-semibold">
        Browse Collection
      </h1>
      <h1
        data-aos="zoom-in"
        data-aos-delay="200"
        className="text-black font-semibold text-[42px] leading-[50px] text-center"
      >
        Trending Products
      </h1>
      <div
        data-aos="zoom-in"
        data-aos-delay="300"
        className="w-full grid lg:grid-cols-4 grid-cols-1 justify-center items-center gap-10 mt-10"
      >
        {products.map((item, index) => (
          <div
            id="product-box"
            key={index}
            className="flex flex-col justify-center items-center gap-2 bg-white p-4 rounded-lg cursor-pointer relative"
          >
            <img src={item.img} alt={item.name} />
            <div id="icons" className="flex justify-center items-center gap-3 absolute top-[20px]">
              <div className="bg-themepurple hover:bg-themeyellow hover:text-black rounded-full p-3 text-white">
                <MdOutlineRemoveRedEye />
              </div>
              <div className="bg-themepurple hover:bg-themeyellow hover:text-black rounded-full p-3 text-white">
                <FaRegHeart />
              </div>
              <div
                className="bg-themepurple hover:bg-themeyellow hover:text-black rounded-full p-3 text-white"
                onClick={() => handleAddToCart(item)}
              >
                <MdAddShoppingCart />
              </div>
            </div>
            <h1 className="text-lg text-gray-400 font-semibold">{item.category}</h1>
            <h1 className="text-xl text-black font-semibold">{item.name}</h1>
            <h1 className="text-lg text-themepurple font-semibold">{`$${item.price}`}</h1>
            <hr />
            <div className="flex justify-between items-center gap-6 mt-3">
              <div className="flex justify-start items-center gap-1">
                <FaStar className="text-themepurple" />
                <FaStar className="text-themepurple" />
                <FaStar className="text-themepurple" />
                <FaStar className="text-themepurple" />
                <FaStar className="text-themepurple" />
              </div>
              <button className="bg-green-500 text-white px-4 py-2 rounded-lg text-[13px] font-semibold">
                SALE 14%
              </button>
            </div>
          </div>
        ))}
      </div>
      <button
        data-aos="zoom-in"
        data-aos-delay="400"
        className="bg-themepurple hover:bg-themeyellow text-white hover:text-black font-semibold px-8 py-3 rounded-lg mt-8"
      >
        VIEW MORE
      </button>
    </div>
  );
};

export default Productsgrid;
