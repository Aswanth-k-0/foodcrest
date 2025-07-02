import React from 'react';
import dishImage from '../../../assets/Images/about.png';

const WhyChooseUs = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-10 py-16 px-6 max-w-6xl mx-auto">
      
      <div className="w-full md:w-1/2">
        <img
          src={dishImage}
          alt="Delicious Dish"
          className="rounded-xl object-cover w-full"
        />
      </div>


      <div className="w-full md:w-1/2 text-center md:text-left">
        <h2 className="text-3xl font-bold mb-4">Why Choose Us?</h2>
        <p className="text-gray-700 mb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi architecto
          quisquam delectus minima perferendis nulla quia nisi laborum, exercitationem
          cum quo accusantium, impedit sed. Dicta, quo molestias omnis reprehenderit quae animi?
          Explicabo quasi accusamus laboriosam temporibus delectus, aut a? Quasi?
        </p>
        <p className="text-gray-700 mb-6">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi, suscipit
          reiciendis accusamus recusandae eum aspernatur pariatur odit veritatis facere. Magnam!
        </p>
        <button className="px-6 py-2 border border-orange-500 text-orange-500 rounded-full hover:bg-orange-50 transition">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default WhyChooseUs;
