import React, { useEffect } from 'react';
import client1 from '../assets/client1.png';
import client2 from '../assets/client2.png';
import client3 from '../assets/client3.png';
import client4 from '../assets/client4.png';
import client5 from '../assets/client5.png';
import client6 from '../assets/client6.png';
import google from '../assets/google.jpg';
import apple from '../assets/apple.jpg';
import pay1 from '../assets/pay-1.jpg';
import pay2 from '../assets/pay-2.jpg';
import pay3 from '../assets/pay-3.jpg';
import pay4 from '../assets/pay-4.jpg';
import { Link } from 'react-scroll';
import { FaArrowUp } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Footer = () => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 500,
      easing: 'ease-in-out',
    });
    AOS.refresh();
  }, []);

  return (
    <div id="contact" className="w-full flex flex-col justify-center items-center">
      {/* Top Clients Section */}
      <div
        data-aos="zoom-in"
        data-aos-delay="100"
        className="w-full bg-themepurple lg:px-20 px-10 py-8 grid lg:grid-cols-6 grid-cols-2 justify-center items-center gap-10"
      >
        <img src={client1} alt="client1" className="w-[130px] opacity-70 cursor-pointer hover:opacity-100" />
        <img src={client2} alt="client2" className="w-[130px] opacity-70 cursor-pointer hover:opacity-100" />
        <img src={client3} alt="client3" className="w-[130px] opacity-70 cursor-pointer hover:opacity-100" />
        <img src={client4} alt="client4" className="w-[130px] opacity-70 cursor-pointer hover:opacity-100" />
        <img src={client5} alt="client5" className="w-[130px] opacity-70 cursor-pointer hover:opacity-100" />
        <img src={client6} alt="client6" className="w-[130px] opacity-70 cursor-pointer hover:opacity-100" />
      </div>

      {/* Footer Links Section */}
      <div className="w-full lg:px-20 px-5 py-10 bg-gray-100 grid lg:grid-cols-5 grid-cols-1 gap-10">
        {/* Brand and About */}
        <div data-aos="zoom-in" data-aos-delay="200" className="flex flex-col gap-4">
          <h1 className="text-4xl font-bold text-themepurple underline italic">TrendVibe</h1>
          <p className="text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga repellendus ab minus distinctio doloremque ut
            nihil sit repellat delectus.
          </p>
          <h1 className="text-black text-xl font-semibold">Download our app</h1>
          <div className="flex gap-4">
            <img src={google} alt="Google Play" className="w-[100px] cursor-pointer" />
            <img src={apple} alt="App Store" className="w-[100px] cursor-pointer" />
          </div>
        </div>

        {/* Useful Links */}
        {Array(4)
          .fill('')
          .map((_, idx) => (
            <div key={idx} data-aos="zoom-in" data-aos-delay="200">
              <h1 className="text-black text-xl font-semibold">Useful Links</h1>
              <ul className="mt-8 flex flex-col gap-2">
                {['Home', 'About', 'Services', 'Contact', 'Blog'].map((link, index) => (
                  <li key={index} className="text-gray-500 cursor-pointer hover:text-black">
                    {link}
                  </li>
                ))}
              </ul>
            </div>
          ))}
      </div>

      {/* Newsletter and Payment Section */}
      <div className="w-full lg:px-20 px-5 py-10 bg-gray-100">
        <hr className="border-t border-gray-300 mb-6" />
        <div className="flex flex-wrap justify-between items-center gap-6">
          {/* Payment Methods */}
          <div className="flex gap-4">
            <img src={pay1} alt="Pay1" className="w-[50px] rounded-lg" />
            <img src={pay2} alt="Pay2" className="w-[50px] rounded-lg" />
            <img src={pay3} alt="Pay3" className="w-[50px] rounded-lg" />
            <img src={pay4} alt="Pay4" className="w-[50px] rounded-lg" />
          </div>

        

          {/* Copyright */}
          <div className="w-full lg:w-auto text-center lg:text-right">
            <p className="text-gray-500">2024 Powered by Krupa 🤗</p>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <div
        id="icon-box"
        className="bg-themepurple text-white p-3 rounded-full hover:bg-themeyellow hover:text-black cursor-pointer fixed lg:bottom-6 right-6 bottom-6"
      >
        <Link to="hero" spy={true} smooth={true} offset={-100}>
          <FaArrowUp className="w-[35px] h-[35px]" />
        </Link>
      </div>
    </div>
  );
};

export default Footer;
