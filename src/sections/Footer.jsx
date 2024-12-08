import React, { useEffect } from 'react';
import { Link } from 'react-scroll';
import { FaArrowUp, FaGithub, FaLinkedin } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';
import logo from '../assets/Logo.png';  // Import the logo image

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
    <div id="contact" className="w-full flex flex-col justify-center items-center bg-gray-100">
      {/* Footer Section */}
      <div className="w-full lg:px-20 px-5 py-10 bg-gray-100 grid lg:grid-cols-3 grid-cols-1 gap-10">
        {/* Brand and About */}
        <div data-aos="zoom-in" data-aos-delay="200" className="flex flex-col gap-4 text-center">
          <div className="flex justify-center items-center gap-2">
            {/* Display the project logo */}
            <img
              src={logo}  // Use the imported logo
              alt="Project Logo"
              className="w-16 h-16"  // Adjust size (e.g., 64px by 64px)
            />
            {/* Project Name */}
            <h1 className="text-4xl font-bold text-themepurple underline italic">TrendVibe</h1>
          </div>
          <p className="text-gray-500">Bringing the latest trends and vibes to you.</p>
        </div>

        {/* Social Links */}
        <div data-aos="zoom-in" data-aos-delay="200" className="flex flex-col gap-4 justify-center items-center">
          <h2 className="text-xl font-semibold">Connect with Us</h2>
          <div className="flex gap-6">
            <a
              href="https://github.com/Krupa2205"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-themepurple transform hover:scale-110 transition-transform duration-300"
            >
              <FaGithub size={30} />
            </a>
            <a
              href="https://www.linkedin.com/in/kaklotar-k-6200042a7/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-themepurple transform hover:scale-110 transition-transform duration-300"
            >
              <FaLinkedin size={30} />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="w-full text-center lg:text-right">
          <p className="text-gray-500">Made by Krupa❤🤗</p>
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
