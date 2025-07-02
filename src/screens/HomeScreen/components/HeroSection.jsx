import React from 'react';
import hero from '../../../assets/Images/hero.jpg';

function HeroSection() {
  return (
    <div
      className="relative w-full h-[600px] bg-cover bg-center flex items-center pb-4 border border-b-2 border-gray-300"
      style={{ backgroundImage: `url(${hero})` }}
    >

      <div className="relative z-10 lg:max-w-3xl max-w-xl text-left pl-10">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-[#d6dcc8]">
          Elevate Your Inner Foodie <br /> with Every Bite.
        </h2>
        <p className="text-md md:text-lg text-[#d6dcc8] mb-6">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis et qui,
          maxime assumenda repellat corrupti officia dolorum delectus labore deleniti?
        </p>
        <button className="px-5 py-2 border-2 border-orange-500 text-orange-500 rounded-full hover:bg-orange-50 transition">
          Order Now
        </button>
      </div>
    </div>
  );
}

export default HeroSection;
