'use client';

import Image from 'next/image';
import { useState } from 'react';
import { FaStar, FaTrashAlt, FaEdit } from 'react-icons/fa';

interface Review {
  id: number;
  productName: string;
  productImage: string;
  rating: number;
  comment: string;
  date: string;
}

const initialReviews: Review[] = [
  {
    id: 1,
    productName: 'موبايل شاومي نوت 12',
    productImage: 'https://static.vecteezy.com/system/resources/previews/057/463/929/large_2x/sleek-tablet-with-a-high-resolution-screen-and-multiple-app-s-free-png.png',
    rating: 5,
    comment: 'ممتاز جداً والسعر مناسب، أنصح به 👌',
    date: '2025-07-30',
  },
  {
    id: 2,
    productName: 'لابتوب HP i5',
    productImage: 'https://static.vecteezy.com/system/resources/previews/051/135/299/non_2x/happy-man-working-on-laptop-in-bean-bag-isolated-on-transparent-free-png.png',
    rating: 4,
    comment: 'جيد لكن صوت المروحة عالي شوية',
    date: '2025-07-28',
  },
];

export default function Reviews_Details() {
  const [reviews, setReviews] = useState(initialReviews);

  const deleteReview = (id: number) => {
    setReviews(reviews.filter(r => r.id !== id));
  };

  const renderStars = (count: number) =>
    [...Array(5)].map((_, i) => (
      <FaStar
        key={i}
        className={`inline-block ${
          i < count ? 'text-yellow-400' : 'text-gray-300'
        }`}
      />
    ));

  return (
    <div className="space-y-6 text-foreground w-full">
      <h2 className="text-2xl font-bold ">⭐ تقييماتي</h2>

      {reviews.length === 0 ? (
        <p className="text-gray-500 mt-10 text-center">لم تقم بإضافة أي تقييمات بعد.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="border rounded-lg p-4 shadow flex flex-col"
            >
              <div className="flex items-center gap-4 mb-3">
                <Image
                  src={review.productImage}
                  alt={review.productName}
                  className="w-16 h-16 object-cover rounded"
                  width={50}
                  height={50}
                />
                <div>
                  <h3 className="font-semibold">{review.productName}</h3>
                  <p className="text-sm text-gray-500">{review.date}</p>
                </div>
              </div>

              <div className="mb-2">{renderStars(review.rating)}</div>
              <p className="text-sm text-gray-400 mb-4">{review.comment}</p>

              <div className="flex justify-end gap-3 mt-auto text-sm">
                <button className="text-blue-600 hover:underline flex items-center gap-1">
                  <FaEdit /> تعديل
                </button>
                <button
                  onClick={() => deleteReview(review.id)}
                  className="text-red-600 hover:underline flex items-center gap-1"
                >
                  <FaTrashAlt /> حذف
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
