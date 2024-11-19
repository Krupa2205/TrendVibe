import React, { useEffect } from 'react'
import insta1 from '../assets/insta-1.jpg'
import insta2 from '../assets/insta-2.jpg'
import insta3 from '../assets/insta-3.jpg'
import insta4 from '../assets/insta-4.jpg'
import insta5 from '../assets/insta-5.jpg'
import insta6 from '../assets/insta-6.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Insta = () => {
  useEffect(()=>{
    AOS.init({
      offset:100,
      duration:500,
      easing:'ease-in-out',
    });
    AOS.refresh();
  },[])
  return (
    <div className='w-full lg:px-20 px-5 py-[80px] bg-white flex flex-col justify-center items-center gap-4'>
      <h1 data-aos="zoom-in" data-aos-delay="100" className='text-themepurple text-xl font-semibold capitalize'>Our Instagram Shop</h1>
      <h1 data-aos="zoom-in" data-aos-delay="200" className='text-black font-semibold text-[42px] leading-[50px] text-center capatalize' >Follow on Instagram</h1>
      <div data-aos="zoom-in" data-aos-delay="300" className='w-full grid lg:grid-cols-6 grid-cols-1 justify-center items-center gap-6 mt-8'>
    <img src={insta1} alt="" className='rounded-lg'/>
    <img src={insta2} alt="" className='rounded-lg'/>
    <img src={insta3} alt="" className='rounded-lg'/>
    <img src={insta4} alt="" className='rounded-lg'/>
    <img src={insta5} alt="" className='rounded-lg'/>
    <img src={insta6} alt="" className='rounded-lg'/>
      </div>
      <button data-aos="zoom-in" data-aos-delay="400" className='bg-themepurple hover:bg-themeyellow text-white hover:text-black font-semibold px-8 py-3 rounded-lg mt-12 uppercase'>#ElectraShop</button>
    </div>
  )
}

export default Insta
