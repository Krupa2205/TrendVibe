import React, { useEffect } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import headset from '../assets/headset.jpg';
import earbuds from '../assets/earbuds.jpg';
import dslr from '../assets/dslr.jpg';
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
    autoplaySpeed: 3000,
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

  return (
    <div id="hero" className="w-full flex justify-center items-center min-h-[500px] lg:min-h-[700px] h-auto">
      <div className="max-w-screen-xl w-full">
        <Slider {...settings}>
          {/* Slide 1 */}
          <div>
            <div
              className="w-full px-4 lg:px-20 flex flex-col justify-center items-start gap-6 lg:gap-10 min-h-[500px] lg:min-h-[700px] h-auto bg-cover bg-center"
              style={{
                backgroundImage: `url(${dslr})`,
                backgroundSize: 'cover',
              }}
            >
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
                className="text-white text-[40px] lg:text-[100px] uppercase font-bold leading-[50px] lg:leading-[100px] text-wrap"
              >
                DSLR 360 <br /> Camera
              </h1>
              <h1
                data-aos="zoom-in"
                data-aos-delay="150"
                className="text-white text-base lg:text-2xl"
              >
                100% trusted{' '}
                <span className="text-themeyellow font-semibold">
                  Electronics Gadgets
                </span>
              </h1>
              <button
                data-aos="zoom-in"
                data-aos-delay="200"
                className="bg-themeyellow px-6 py-3 rounded-lg text-black font-semibold"
              >
                ONLINE COLLECTIONS
              </button>
            </div>
          </div>

          {/* Slide 2 */}
          <div>
            <div
              className="w-full px-4 lg:px-20 flex flex-col justify-center items-start gap-6 lg:gap-10 min-h-[500px] lg:min-h-[700px] h-auto bg-cover bg-center"
              style={{
                backgroundImage: `url(${earbuds})`,
                backgroundSize: 'cover',
              }}
            >
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
                className="text-white text-[40px] lg:text-[100px] uppercase font-bold leading-[50px] lg:leading-[100px] text-wrap"
              >
                Wireless <br /> Earbuds
              </h1>
              <h1
                data-aos="zoom-in"
                data-aos-delay="150"
                className="text-white text-base lg:text-2xl"
              >
                100% trusted{' '}
                <span className="text-themeyellow font-semibold">
                  Electronics Gadgets
                </span>
              </h1>
              <button
                data-aos="zoom-in"
                data-aos-delay="200"
                className="bg-themeyellow px-6 py-3 rounded-lg text-black font-semibold"
              >
                ONLINE COLLECTIONS
              </button>
            </div>
          </div>

          {/* Slide 3 */}
          <div>
            <div
              className="w-full px-4 lg:px-20 flex flex-col justify-center items-start gap-6 lg:gap-10 min-h-[500px] lg:min-h-[700px] h-auto bg-cover bg-center"
              style={{
                backgroundImage: `url(${headset})`,
                backgroundSize: 'cover',
              }}
            >
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
                className="text-white text-[40px] lg:text-[100px] uppercase font-bold leading-[50px] lg:leading-[100px] text-wrap"
              >
                Gaming <br /> Headset
              </h1>
              <h1
                data-aos="zoom-in"
                data-aos-delay="150"
                className="text-white text-base lg:text-2xl"
              >
                100% trusted{' '}
                <span className="text-themeyellow font-semibold">
                  Electronics Gadgets
                </span>
              </h1>
              <button
                data-aos="zoom-in"
                data-aos-delay="200"
                className="bg-themeyellow px-6 py-3 rounded-lg text-black font-semibold"
              >
                ONLINE COLLECTIONS
              </button>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Hero;
