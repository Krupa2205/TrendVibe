import { useState } from 'react'
import './App.css'
import Header from './sections/Header'
import Hero from './sections/Hero'
import Category from './sections/Category'
import Types from './sections/Types'
import Services from './sections/Services'
import Productsgrid from './sections/Productsgrid'
import Banner from './sections/Banner'
import Reviews from './sections/Reviews'
import Insta from './sections/Insta'
import Footer from './sections/Footer'


function App() {
  

  return (
    <>
      <Header/>
      <Hero/>
      <Category/>
      <Types/>
      <Services/>
      <Productsgrid/>
      <Banner/>
      <Reviews/>
      <Insta/>
      <Footer/>
    </>
  )
}

export default App
