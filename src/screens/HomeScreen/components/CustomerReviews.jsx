import React from 'react';
import ReviewCard from './ReviewCard';
import pic1 from '../../../assets/Images/pic1.png'
import pic2 from '../../../assets/Images/pic2.png'
import pic3 from '../../../assets/Images/pic2.png'


const reviews=[
    
  {
    "id": 1,
    "name": "Sophia Azura",
    "image": pic1,
    "text": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,"
  },
  {
    "id": 2,
    "name": "John Deo",
    "image": pic2,
    "text": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,"
  },
  {
    "id": 3,
    "name": "Victoria Zoe",
    "image": pic3,
    "text": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,"
  }


]

const CustomerReviews = () => {
  return (
    <div className="py-16 px-6 text-center bg-white">
      <h2 className="text-3xl font-bold mb-10">Customer's Review</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {reviews.map((review) => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </div>
    </div>
  );
};

export default CustomerReviews;
