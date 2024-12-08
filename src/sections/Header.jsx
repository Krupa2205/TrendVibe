import React, { useEffect, useState, useContext } from "react";
import { FaSearch, FaHeart, FaShoppingCart, FaBars, FaTimes } from 'react-icons/fa';
import { IoPerson } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { CartContext } from "../context/CartContext";
import Logo from '../assets/Logo.png'; 
import AOS from "aos";
import "aos/dist/aos.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { cart } = useContext(CartContext);
  const cartCount = cart.length;
  const navigate = useNavigate();

  // Set browser tab title and favicon
  useEffect(() => {
    document.title = "TrendVibe";
    const favicon = document.createElement("link");
    favicon.rel = "icon";
    favicon.href = Logo; // Set the favicon to your logo
    document.head.appendChild(favicon);
  }, []);

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 500,
      easing: "ease-in-out",
    });
    AOS.refresh();
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const navItems = [
    { link: "Home", path: "/" },
    { link: "Products", path: "#Products" },
    { link: "Testimonials", path: "#Testimonials" },
    { link: "Contact", path: "#Contact" },
  ];

  const handleCartClick = () => {
    navigate('/cart');
  };

  return (
    <>
      {/* Main Navigation */}
      <nav className="w-full bg-gray-100 flex justify-between items-center px-4 py-5 sticky top-0 z-50">
        {/* Logo and Project Name */}
        <div className="flex items-center gap-3">
          <img
            src={Logo}
            alt="TrendVibe Logo"
            className="w-16 h-16 object-cover rounded-full cursor-pointer hover:scale-110 transition-transform duration-300"  // Round shape with specified size
          />
          <h1 className="text-themepurple font-bold text-[24px] italic">TrendVibe</h1>
        </div>

        {/* Desktop Menu */}
        <ul className="lg:flex items-center gap-10 hidden">
          {navItems.map(({ link, path }) => (
            <li key={path}>
              <NavLink
                to={path}
                className="text-black text-sm uppercase font-semibold cursor-pointer px-4 py-2 rounded-lg hover:bg-themepurple hover:text-white"
                onClick={closeMenu}
              >
                {link}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Header Icons */}
        <div className="lg:flex hidden items-center gap-6 text-black">
          <FaSearch className="w-[20px] h-[20px] transform hover:scale-125 transition-transform duration-300 cursor-pointer hover:text-themepurple" />
          <IoPerson className="w-[20px] h-[20px] transform hover:scale-125 transition-transform duration-300 cursor-pointer hover:text-themepurple" />
          <FaHeart className="w-[20px] h-[20px] transform hover:scale-125 transition-transform duration-300 cursor-pointer hover:text-themepurple" />
          <div className="relative cursor-pointer">
            <FaShoppingCart
              onClick={handleCartClick}
              className="w-[20px] h-[20px] transform hover:scale-125 transition-transform duration-300 cursor-pointer hover:text-themepurple"
            />
            {cartCount > 0 && (
              <div className="bg-themepurple px-1 text-white rounded-full absolute -top-[10px] -right-[10px] text-[14px] font-bold">
                {cartCount}
              </div>
            )}
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex lg:hidden items-center" onClick={toggleMenu}>
          {isMenuOpen ? (
            <FaTimes className="text-themepurple text-3xl cursor-pointer" />
          ) : (
            <FaBars className="text-themepurple text-3xl cursor-pointer" />
          )}
        </div>

        {/* Mobile Menu */}
        <div
          className={`${
            isMenuOpen ? "flex" : "hidden"
          } w-full bg-themepurple p-4 absolute top-[80px] left-0 z-40`}
        >
          <ul className="flex flex-col items-center gap-2 w-full">
            {navItems.map(({ link, path }) => (
              <li key={path}>
                <NavLink
                  to={path}
                  className="text-white uppercase font-semibold cursor-pointer p-3 rounded-lg hover:bg-themeyellow hover:text-black w-full text-center"
                  onClick={closeMenu}
                >
                  {link}
                </NavLink>
              </li>
            ))}
            {/* Add Cart Option in Mobile Menu */}
            <li>
              <div
                className="text-white uppercase font-semibold cursor-pointer p-3 rounded-lg hover:bg-themeyellow hover:text-black w-full text-center"
                onClick={() => {
                  handleCartClick();
                  closeMenu(); // Close the menu after navigation
                }}
              >
                Cart
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Header;
