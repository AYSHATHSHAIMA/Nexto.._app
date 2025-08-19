'use client';

import React, { useState, useEffect } from 'react';

const offers = [
  {
    id: 1,
    title: "Summer Sale - Up to 50% Off!",
    description: "Get the best deals on summer essentials.",
    bgColor: "bg-yellow-400",
    image:"https://img.freepik.com/premium-vector/fashion-sale-promotion-carousel-template_578602-274.jpg"
  },
  {
    id: 2,
    title: "New Arrivals Just Landed",
    description: "Check out the latest products in store.",
    bgColor: "bg-blue-600 text-white",
  },
  {
    id: 3,
    title: "Limited Time Offer - Free Shipping",
    description: "Shop now and enjoy free shipping on all orders.",
    bgColor: "bg-black text-yellow-400",
  },
];

export default function SimpleOfferCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % offers.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="max-w-auto mx-auto rounded-lg overflow-hidden shadow-md m-0">
      <div className={`${offers[current].bgColor} p-12 text-center transition-colors duration-500`}>
        <h2 className="text-2xl font-bold mb-2">{offers[current].title}</h2>
        <p className="text-lg">{offers[current].description}</p>
      </div>

      <div className="flex justify-center space-x-3 bg-gray-100 py-3">
        {offers.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`w-4 h-4 rounded-full ${current === idx ? 'bg-yellow-400' : 'bg-gray-400'}`}
            aria-label={`Go to offer ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
