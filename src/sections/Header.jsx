import React, { useEffect, useState, useContext } from "react";
import { FaSearch, FaHeart, FaShoppingCart, FaMapMarkedAlt, FaPhoneVolume, FaBars, FaTimes } from 'react-icons/fa';
import { IoPerson } from "react-icons/io5";
import { Link, NavLink } from "react-router-dom"; // Import from react-router-dom
import { MdEmail } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import { CartContext } from "../context/CartContext";
import AOS from "aos";
import "aos/dist/aos.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { cart } = useContext(CartContext);
  const cartCount = cart.length;
  const navigate = useNavigate();

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
    { link: "Products", path: "#Products" }, // Add route as needed
    { link: "Testimonials", path: "#Testimonials" },
    { link: "Contact", path: "#Contact" },
  ];

  const handleCartClick = () => {
    navigate('/cart');
  };

  return (
    <>
      {/* Top Header */}
      <div className="w-full px-16 py-2 bg-themeyellow lg:flex hidden justify-between items-center gap-6">
        <h1 className="text-sm font-semibold flex items-center gap-2">
          <FaPhoneVolume className="text-[18px]" />
          <span>+91 123 456 0789</span>
        </h1>
        <h1 className="text-sm font-semibold flex items-center gap-2">
          <FaMapMarkedAlt className="text-[18px]" />
          <span>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
        </h1>
        <h1 className="text-sm font-semibold flex items-center gap-2">
          <MdEmail className="text-[18px]" />
          <span>TrendVibe@company.com</span>
        </h1>
      </div>

      {/* Main Navigation */}
      <nav className="w-full bg-gray-100 flex justify-between items-center lg:px-16 px-6 py-5 sticky top-0 z-50">
        {/* Logo */}
        <h1 className="text-themepurple font-bold lg:text-[30px] text-3xl underline italic">
          TrendVibe
        </h1>

        {/* Desktop Menu */}
        <ul className="lg:flex items-center gap-10 hidden">
          {navItems.map(({ link, path }) => (
            <li key={path}>
              <NavLink
                to={path}
                className="text-black text-sm uppercase font-semibold cursor-pointer px-4 py-2 rounded-lg hover:bg-themepurple hover:text-white"
                onClick={closeMenu} // Ensure mobile menu closes
              >
                {link}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Header Icons */}
        {/* <div id="header-icons" className="lg:flex hidden items-center gap-6 text-black"> */}
          <FaSearch className="w-[20px] h-[20px] transform hover:scale-125 transition-transform duration-300 cursor-pointer hover:text-themepurple" />
          <IoPerson className="w-[20px] h-[20px] transform hover:scale-125 transition-transform duration-300 cursor-pointer hover:text-themepurple" />
          <FaHeart className="w-[20px] h-[20px] transform hover:scale-125 transition-transform duration-300 cursor-pointer hover:text-themepurple" />
          <div className="relative cursor-pointer">
            <FaShoppingCart  onClick={handleCartClick} className="w-[20px] h-[20px] transform hover:scale-125 transition-transform duration-300 cursor-pointer hover:text-themepurple"/>
            {cartCount > 0 && (
              <div className="bg-themepurple px-1  text-white rounded-full absolute -top-[10px] -right-[10px] text-[14px] font-bold">
                {cartCount}
              </div>
            )}
          </div>
        {/* </div> */}

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
          className={`${isMenuOpen ? "flex" : "hidden"} w-full bg-themepurple p-4 absolute top-[80px] left-0 z-40`}
        >
          <ul className="flex flex-col items-center gap-2 w-full">
            {navItems.map(({ link, path }) => (
              <li key={path}>
                <NavLink
                  to={path}
                  className="text-white uppercase font-semibold cursor-pointer p-3 rounded-lg hover:bg-themeyellow hover:text-black w-full text-center"
                  onClick={closeMenu} // Close menu on navigation
                >
                  {link}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Header;