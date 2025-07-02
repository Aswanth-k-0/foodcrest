import React, { useState } from 'react';
import dishes from '../../../assets/data.json';
import DishCard from './DishCard';
import { Funnel } from 'lucide-react'; 

const OurDishes = () => {
  const [category, setCategory] = useState('All');

  const handleAddToCart = (dish) => {
    const existingCart = JSON.parse(localStorage.getItem('cart')) || [];
    const isAlreadyInCart = existingCart.some((item) => item.id === dish.id);
    if (!isAlreadyInCart) {
      const updatedCart = [...existingCart, dish];
      localStorage.setItem('cart', JSON.stringify(updatedCart));
      alert(`${dish.title} added to cart!`);
    } else {
      alert(`${dish.title} is already in the cart.`);
    }
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const filteredDishes =
    category === 'All' ? dishes : dishes.filter((dish) => dish.category === category);

  const uniqueCategories = ['All', ...new Set(dishes.map((dish) => dish.category))];

  return (
    <div className="py-12 px-6 bg-white">
      <div className='flex-row mb-6'>
        <h2 className="text-3xl font-bold text-center ">Our Dishes</h2>
        <div className="flex justify-end mb-8 gap-2 items-center pr-3">
          <Funnel className="w-4 h-4 text-gray-500 " />
          <select
            value={category}
            onChange={handleCategoryChange}
            className="border border-gray-200 rounded-lg px-3 py-1"
          >
            {uniqueCategories.map((cat, index) => (
              <option className='rounded-lg' key={index} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {filteredDishes.length > 0 ? (
          filteredDishes.map((dish) => (
            <DishCard key={dish.id} dish={dish} onAddToCart={handleAddToCart} />
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500">No dishes found.</p>
        )}
      </div>
    </div>
  );
};

export default OurDishes;
