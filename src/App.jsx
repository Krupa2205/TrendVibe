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

// Import Clerk components
import { ClerkProvider, RedirectToSignIn, SignedIn, SignedOut, SignIn, SignUp } from '@clerk/clerk-react';

// Use your Clerk publishable key for the front-end
const clerkPublishableKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

function App() {
  return (
    <ClerkProvider publishableKey={clerkPublishableKey}>
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
                <Banner />
                <Reviews />
                <Insta />
                <Footer />
              </>
            } />

            <Route path="/cart" element={<CartPage />} />
            <Route path="/Productsgrid" element={<Productsgrid />} />
            {/* Center the SignIn page */}
            <Route path="/sign-in" element={
              <div className="flex items-center justify-center min-h-screen">
                <SignIn />
              </div>
            } />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/login" element={<RedirectToSignIn />} />
          </Routes>
          <SignedIn>
           
          </SignedIn>

          <SignedOut>
            <div>
              <p>Please sign in to access your account.</p>
            </div>
          </SignedOut>

        </Router>
      </CartProvider>
    </ClerkProvider>
  );
}

export default App;
