'use client';
import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function ProductCard({ product }: { product: any }) {
  const router = useRouter();

  useEffect(() => {
    router.prefetch(`/products/${product.id}`);
  }, [router, product.id]);

  return (
    <div className="flex justify-center">
      <div
        onClick={() => router.push(`/products/${product.id}`)}
        className="w-100 h-90 m-3 cursor-pointer border-black max-w-xs bg-white shadow-lg rounded-lg overflow-hidden 
          hover:shadow-xl hover:scale-105 transition-transform duration-300 ease-in-out flex flex-col"
      >
        <div className="flex-1 flex justify-center items-center p-4">
          <img
            src={product.images?.[0] }
            alt={product.title}
            className="max-h-30 object-contain transition-transform duration-300 hover:scale-150 cursor-pointer"
          />
        </div>
        <div className="px-4 pb-2  bg-amber-50 flex flex-col flex-grow">
          <h3 className="text-500 text-center font-bold text-gray-800 truncate">{product.title}</h3>
          <p className="text-sm text-gray-600 mt-1  text-center line-clamp-3">{product.brand}</p>
           <p className="text-black text-sm mb-3 line-clamp-2">
                {product.description}
              </p>

          <div className="mt-auto flex justify-center items-center pt-3">
            <button
              onClick={() => {
        
                router.push(`/products/${product.id}`);
              }}
              className="btn btn-dark text-white rounded px-3 py-1 text-sm hover:bg-blue-700 transition-colors"
            >
              View
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
