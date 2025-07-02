import React from 'react';

const ReviewCard = ({ review }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 max-w-sm mx-auto">
      <p className="text-gray-600 text-sm mb-4">{review.text}</p>
      <div className="flex items-center gap-3">
        <img
          src={review.image}
          alt={review.name}
          className="w-10 h-10 rounded-full object-cover"
        />
        <span className="font-semibold">{review.name}</span>
      </div>
    </div>
  );
};

export default ReviewCard;
