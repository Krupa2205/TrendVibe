import React, { useEffect, useState, useContext } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import { NavLink, useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import Logo from "../assets/Logo.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { toast } from "react-toastify";
import { auth } from "/firebaseconfig";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { cart } = useContext(CartContext);
  const navigate = useNavigate();

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    document.title = "TrendVibe";
    document.head.appendChild(
      Object.assign(document.createElement("link"), { rel: "icon", href: Logo })
    );
    AOS.init({ offset: 100, duration: 500, easing: "ease-in-out" });

    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      if (currentUser) {
        setIsLoggedIn(true);
        setUser(currentUser);
      } else {
        setIsLoggedIn(false);
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const handleLoginClick = () => {
    navigate("/login");
  };

  const handleLogout = () => {
    auth
      .signOut()
      .then(() => {
        setIsLoggedIn(false);
        setUser(null);
        toast.success("You have successfully logged out.");
        closeMenu();
        navigate("/");
      })
      .catch((error) => {
        toast.error("Failed to log out. Please try again.");
        console.error(error);
      });
  };

  const handleCartClick = () => {
    if (!isLoggedIn) {
      toast.warn("Please log in first to access your cart!");
    } else {
      navigate("/cart");
    }
  };

  return (
    <nav className="w-full bg-gray-100 flex justify-between items-center px-6 py-4 sticky top-0 z-50">
      {/* Left side Logo */}
      <div className="flex items-center space-x-2">
        <img src={Logo} alt="Logo" className="w-10 h-10" />
        <h1 className="text-xl font-bold text-gray-800">TrendVibe</h1>
      </div>

      {/* Navbar links */}
      <div className="hidden md:flex items-center space-x-6">
        <NavLink to="/" className="text-gray-700 hover:text-blue-500 font-bold">
          Home
        </NavLink>
        <a
          href="Productsgrid"
          className="text-gray-700 hover:text-blue-500 font-bold"
          onClick={closeMenu}
        >
          Products
        </a>
        <button onClick={handleCartClick} className="text-gray-700 hover:text-blue-500 font-bold">
          Cart
        </button>
      </div>

      {/* Login-logout buttons */}
      <div className="hidden md:flex items-center space-x-4">
        <IoPerson size={28} className="text-gray-700" title="User" />
        {isLoggedIn ? (
          <button
            onClick={handleLogout}
            className="bg-red-500 text-white px-4 py-1 rounded-md hover:bg-red-600"
          >
            Logout
          </button>
        ) : (
          <button
            onClick={handleLoginClick}
            className="bg-blue-500 text-white px-4 py-1 rounded-md hover:bg-blue-600"
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
            <NavLink to="/" className="text-gray-700 hover:text-blue-500">
              Home
            </NavLink>
          </li>
          <li>
            <a
              href="/Productsgrid"
              className="text-gray-700 hover:text-blue-500"
              onClick={closeMenu}
            >
              Products
            </a>
          </li>
          <li>
            <button onClick={handleCartClick} className="text-gray-700 hover:text-blue-500">
              Cart
            </button>
          </li>
          {isLoggedIn && (
            <li>
              <button onClick={handleLogout} className="text-gray-700 hover:text-blue-500">
                Logout
              </button>
            </li>
          )}
          {!isLoggedIn && (
            <li>
              <button onClick={handleLoginClick} className="text-blue-500">
                Login
              </button>
            </li>
          )}
          {isLoggedIn && user && (
            <li className="text-gray-700">Hello, {user.displayName || user.email}</li>
          )}
        </ul>
      )}
    </nav>
  );
};

export default Header;
