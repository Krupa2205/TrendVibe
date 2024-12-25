import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './sections/Header';
import Hero from './sections/Hero';
import Category from './sections/Category';
import Types from './sections/Types';
import Services from './sections/Services';
import Productsgrid from './sections/Productsgrid';
import Banner from './sections/Banner';
import Reviews from './sections/Reviews';
import Insta from './sections/Insta';
import Footer from './sections/Footer';
import { CartProvider } from './context/CartContext';
import CartPage from './sections/CartPage';
import LoginPage from './sections/LoginPage';

function App() {
  return (
    <CartProvider>
      <Router>
        <Header />
        <Routes>
          {/* Main route for homepage */}
          <Route path="/" element={
            <>
              <Hero />
              <Category />
              <Types />
              <Services />
              <Productsgrid />
              <Banner />
              <Reviews />
              <Insta />
              <Footer />
            </>
          } />

          {/* Route for CartPage with payment integration */}
          <Route path="/cart" element={<CartPage />} />

          {/* Route for LoginPage */}
          <Route path="/login" element={<LoginPage />} />
          {/* Route for Productsgrid */}
          <Route path="/Productsgrid" element={<Productsgrid/>}/>
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
