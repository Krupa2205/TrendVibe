import React, { useEffect } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";
import HeroHeadset from '../assets/HeroHeadset.webp';
import Heroearbuds from '../assets/Heroearbuds.webp';
import HeroCamera from '../assets/HeroCamera.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Hero = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
  };

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 500,
      easing: 'ease-in-out',
    });
    AOS.refresh();
  }, []);

  const slides = [
    {
      gradient: ['#f5e60d','#502ec3', '#502ec3'],
      title: 'Camera',
      subtitle: '100% trusted Electronics Gadgets',
      buttonText: 'ONLINE COLLECTIONS',
      image: HeroCamera,
    },
    {
      gradient: ['#f5e60d','#502ec3', '#502ec3'],
      title: 'Wireless Earbuds',
      subtitle: '100% trusted Electronics Gadgets',
      buttonText: 'ONLINE COLLECTIONS',
      image: Heroearbuds,
    },
    {
      gradient: ['#f5e60d','#502ec3', '#502ec3'],
      title: 'Gaming Headset',
      subtitle: '100% trusted Electronics Gadgets',
      buttonText: 'ONLINE COLLECTIONS',
      image: HeroHeadset,
    },
  ];

  return (
    <div id="hero" className="w-full flex justify-center items-center min-h-[500px] lg:min-h-[700px] h-auto">
      <div className="max-w-screen-xl w-full">
        <Slider {...settings}>
          {slides.map((slide, index) => (
            <div key={index}>
              <motion.div
                className="w-full px-4 lg:px-20 flex flex-col lg:flex-row justify-center items-center gap-6 lg:gap-10 min-h-[500px] lg:min-h-[700px] h-auto"
                initial={{ background: `linear-gradient(to right, ${slide.gradient[0]}, ${slide.gradient[0]})` }}
                animate={{
                  background: [
                    `linear-gradient(to right, ${slide.gradient[0]}, ${slide.gradient[1]})`,
                    `linear-gradient(to right, ${slide.gradient[1]}, ${slide.gradient[0]})`,
                  ],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              >
                {/* Left Content */}
                <div className="flex-1 flex flex-col justify-center items-start text-left gap-4 lg:gap-8 pt-6 md:pt-8 lg:pt-0">
                  <h1
                    data-aos="zoom-in"
                    data-aos-delay="50"
                    className="text-themeyellow border rounded-lg border-themeyellow px-4 lg:px-6 py-2 text-sm lg:text-xl"
                  >
                    Get up to Discounts 80% Off
                  </h1>
                  <h1
                    data-aos="zoom-in"
                    data-aos-delay="100"
                    className="text-white text-[40px] lg:text-[60px] uppercase font-bold leading-[50px] lg:leading-[70px] text-wrap"
                  >
                    {slide.title}
                  </h1>
                  <h1
                    data-aos="zoom-in"
                    data-aos-delay="150"
                    className="text-white text-base lg:text-2xl"
                  >
                    {slide.subtitle}
                  </h1>
                  <button
                    data-aos="zoom-in"
                    data-aos-delay="200"
                    className="bg-themeyellow px-6 py-3 rounded-lg text-black font-semibold"
                  >
                    {slide.buttonText}
                  </button>
                </div>

                {/* Right Image */}
                <div className="flex-1 flex justify-center items-center">
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="w-full max-w-[300px] lg:max-w-[500px] object-contain"
                    data-aos="fade-up"
                    data-aos-delay="300"
                  />
                </div>
              </motion.div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Hero;
