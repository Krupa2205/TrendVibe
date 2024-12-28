import React, { useEffect } from 'react';
import cat1 from '../assets/cat1.jpg';
import cat2 from '../assets/cat2.jpg';
import cat3 from '../assets/cat3.jpg';
import cat4 from '../assets/cat4.jpg';
import cat5 from '../assets/cat5.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';


const Category = () => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 500,
      easing: 'ease-in-out',
    });
    AOS.refresh();
  }, []);

  return (
    <div
      id="category"
      className="w-full bg-gray-100 lg:px-20 px-5 pb-[100px] pt-[20px] flex lg:flex-row flex-col justify-center items-center gap-20"
    >
      {/* Left Section */}
      <div
        data-aos="zoom-in"
        data-aos-delay="50"
        className="lg:w-[15%] w-full flex flex-col justify-center lg:items-start items-center gap-[20px]"
      >
        <h1 className="text-themepurple text-lg lg:text-xl font-semibold text-center">
          Favourites item
        </h1>
        <h1 className="text-black font-semibold text-[32px] lg:text-[42px] leading-[40px] lg:leading-[50px] lg:text-start text-center">
          Popular Category
        </h1>
        <button className="bg-themepurple hover:bg-themeyellow text-white hover:text-black px-8 py-3 rounded-lg font-semibold mt-[40px]">
          VIEW ALL
        </button>
      </div>

      {/* Right Section */}
      <div className="lg:w-[85%] w-full grid lg:grid-cols-5 grid-cols-2 sm:grid-cols-3 justify-center items-start gap-6 lg:gap-10">
        {/* Item 1 */}
        <div
          data-aos="zoom-in"
          data-aos-delay="100"
          className="flex flex-col justify-center items-center gap-4"
        >
          <img
            src={cat1}
            alt=""
            className="rounded-full cursor-pointer w-[80px] lg:w-[120px]"
          />
          <h1 className="text-black text-base lg:text-xl font-semibold hover:text-themepurple cursor-pointer text-center">
            
          </h1>
        </div>

        {/* Item 2 */}
        <div
          data-aos="zoom-in"
          data-aos-delay="200"
          className="flex flex-col justify-center items-center gap-4"
        >
          <img
            src={cat2}
            alt=""
            className="rounded-full cursor-pointer w-[80px] lg:w-[120px]"
          />
          <h1 className="text-black text-base lg:text-xl font-semibold hover:text-themepurple cursor-pointer text-center">
            
          </h1>
        </div>

        {/* Item 3 */}
        <div
          data-aos="zoom-in"
          data-aos-delay="300"
          className="flex flex-col justify-center items-center gap-4"
        >
          <img
            src={cat3}
            alt=""
            className="rounded-full cursor-pointer w-[80px] lg:w-[120px]"
          />
          <h1 className="text-black text-base lg:text-xl font-semibold hover:text-themepurple cursor-pointer text-center">
            
          </h1>
        </div>

        {/* Item 4 */}
        <div
          data-aos="zoom-in"
          data-aos-delay="400"
          className="flex flex-col justify-center items-center gap-4"
        >
          <img
            src={cat4}
            alt=""
            className="rounded-full cursor-pointer w-[80px] lg:w-[120px]"
          />
          <h1 className="text-black text-base lg:text-xl font-semibold hover:text-themepurple cursor-pointer text-center">
            
          </h1>
        </div>

        {/* Item 5 */}
        <div
          data-aos="zoom-in"
          data-aos-delay="500"
          className="flex flex-col justify-center items-center gap-4"
        >
          <img
            src={cat5}
            alt=""
            className="rounded-full cursor-pointer w-[80px] lg:w-[120px]"
          />
          <h1 className="text-black text-base lg:text-xl font-semibold hover:text-themepurple cursor-pointer text-center">
            
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Category;
