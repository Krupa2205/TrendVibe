import React, { useState, useEffect } from 'react';
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
import { ClerkProvider, RedirectToSignIn, SignedIn, SignedOut, SignIn, SignUp } from '@clerk/clerk-react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Clerk publishable key or frontend key
const clerkPublishableKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

function App() {
  const [loggedIn, setLoggedIn] = useState(null); 

  useEffect(() => {
    if (loggedIn === true) {
      toast.success('Login Successful!', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
      });
    } else if (loggedIn === false) {
      toast.error('Logout Successful!', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
      });
    }
  }, [loggedIn]); 

  return (
    <ClerkProvider publishableKey={clerkPublishableKey}>
      <CartProvider>
        <Router>
          <Header />
          <Routes>
            <Route
              path="/"
              element={
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
              }
            />

            <Route path="/cart" element={<CartPage />} />
            <Route path="/Productsgrid" element={<Productsgrid />} />
            <Route
              path="/sign-in"
              element={
                <div className="flex items-center justify-center min-h-screen">
                  <SignIn />
                </div>
              }
            />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/login" element={<RedirectToSignIn />} />
          </Routes>

          {/* Update logged-in state without causing infinite renders */}
          <SignedIn>
            {() => {
              if (loggedIn !== true) setLoggedIn(true);
              return null; 
            }}
          </SignedIn>

          <SignedOut>
            {() => {
              if (loggedIn !== false) setLoggedIn(false);
              return null; 
            }}
          </SignedOut>

          {/* Toast container */}
          <ToastContainer />
        </Router>
      </CartProvider>
    </ClerkProvider>
  );
}

export default App;
