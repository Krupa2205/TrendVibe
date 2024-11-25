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
import CartProvider from './sections/CartContext';
import CartPage from './sections/CartPage'; // Import CartPage

function App() {
  return (
    <CartProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <Category />
              <Types />
              <Services />
              <Productsgrid />
              <CartPage/>
              <Banner />
              <Reviews />
              <Insta />
              <Footer />
            </>
          } />
          <Route path="/cart" element={<CartPage />} /> {/* Define CartPage route */}
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
