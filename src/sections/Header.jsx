import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth, useUser } from "@clerk/clerk-react";
import Logo from "../assets/Logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { signOut } = useAuth();
  const { user } = useUser();
  const navigate = useNavigate();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const handleLoginClick = () => {
    navigate("/sign-in");
  };

  const handleLogout = async () => {
    await signOut();
    closeMenu();
    navigate("/");
  };

  const handleCartClick = () => {
    if (!user) {
      alert("Please log in first to access your cart!");
    } else {
      navigate("/cart");
    }
  };


  return (
    <nav className="w-full bg-gray-100 flex justify-between items-center px-6 py-4 sticky top-0 z-50 font-kanit">
      {/* Left side Logo */}
      <div className="flex items-center space-x-2">
        <img src={Logo} alt="Logo" className="w-10 h-10" />
        <h1 className="text-xl font-bold text-gray-800 font-oswald">
          TrendVibe
        </h1>
      </div>

      {/* Navbar links */}
      <div className="hidden md:flex items-center space-x-6">
        <NavLink
          to="/"
          className="text-gray-700 hover:text-blue-500 font-bold font-inter"
        >
          Home
        </NavLink>
        <NavLink
  to="/Productsgrid" 
  className="text-gray-700 hover:text-blue-500 font-bold font-inter"
  onClick={closeMenu}
>
  Products
</NavLink>

        <button
          onClick={handleCartClick}
          className="text-gray-700 hover:text-blue-500 font-bold font-inter"
        >
          Cart
        </button>
      </div>

      {/* Login-logout buttons */}
      <div className="hidden md:flex items-center space-x-4">
        <IoPerson size={28} className="text-gray-700" title="User" />
        {user ? (
          <button
            onClick={handleLogout}
            className="bg-red-500 text-white px-4 py-1 rounded-md hover:bg-red-600 font-inter"
          >
            Logout
          </button>
        ) : (
          <button
            onClick={handleLoginClick}
            className="bg-blue-500 text-white px-4 py-1 rounded-md hover:bg-blue-600 font-inter"
          >
            Login
          </button>
        )}
      </div>

      {/* Mobile Menu Toggle */}
      <div className="md:hidden flex items-center space-x-2">
        <IoPerson size={28} className="text-gray-700" />
        <button
          onClick={toggleMenu}
          className="text-gray-700 hover:text-blue-500 focus:outline-none"
        >
          {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Menu Items */}
      {isMenuOpen && (
        <ul className="absolute top-16 left-0 w-full bg-gray-100 flex flex-col items-center space-y-4 py-6 z-40">
          <li>
            <NavLink
              to="/"
              className="text-gray-700 hover:text-blue-500 font-kanit"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Productsgrid"
              className="text-gray-700 hover:text-blue-500 font-bold font-inter"
              onClick={closeMenu}
            >
              Products
            </NavLink>
          </li>
          <li>
            <button
              onClick={handleCartClick}
              className="text-gray-700 hover:text-blue-500 font-kanit"
            >
              Cart
            </button>
          </li>
          {user ? (
            <li>
              <button
                onClick={handleLogout}
                className="text-gray-700 hover:text-blue-500 font-kanit"
              >
                Logout
              </button>
            </li>
          ) : (
            <li>
              <button
                onClick={handleLoginClick}
                className="text-blue-500 font-kanit"
              >
                Login
              </button>
            </li>
          )}
        </ul>
      )}
    </nav>
  );
};

export default Header;
