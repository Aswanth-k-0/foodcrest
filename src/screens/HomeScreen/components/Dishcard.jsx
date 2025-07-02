import React from 'react';

const DishCard = ({ dish, onAddToCart }) => {
    const renderStars = (rating) => {
        const fullStars = Math.floor(rating);
        const halfStar = rating % 1 >= 0.5;
        return (
            <>
                {'★'.repeat(fullStars)}
                {halfStar && '½'}
                {'☆'.repeat(5 - fullStars - (halfStar ? 1 : 0))}
            </>
        );
    };

    return (
        <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition">
            <img
                src={dish.image}
                alt={dish.title}
                className="w-full h-48 object-cover"
            />
            <div className="p-4 text-center">
                <h3 className="text-lg font-semibold mb-2">{dish.title}</h3>
                <div className="text-orange-400 text-sm mb-2">
                    {renderStars(dish.rating)}
                </div>
                <div className="flex justify-between items-center px-4 mt-4">
                    <span className="font-bold">${dish.price}</span>
                    <button
                        onClick={() => onAddToCart(dish)}
                        className="px-4 py-1 border border-orange-500 text-orange-500 rounded-full hover:bg-orange-50 text-sm transition"
                    >
                        Buy Now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default DishCard;
