"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const categories = [
    { name: "Beauty", path: "/category/beauty" },
    { name: "Fragrances", path: "/category/fragrances" },
    { name: "Groceries", path: "/category/Groceries" },
    { name: "Home Decorations", path: "/category/furniture" },
    { name: "Womens Watches", path: "/category/womens-watches" },
    { name: "Womens Shoes", path: "/category/Womens Shoes" },
    { name: "Womens Jewellery", path: "/category/womens-jewellery" },
    { name: "Womens Dresses", path: "/category/womens-dresses" },
    { name: "Womens Bags", path: "/category/womens-bags" },
    { name: "Tops", path: "/category/tops" },
    { name: "Tablets", path: "/category/tablets" },
    { name: "Sunglasses", path: "/category/sunglasses" },
  ];

  return (
    <div className="relative">
  
       <div className="flex "> <button
          onClick={() => setIsOpen(true)}
          className="px-3 py-2 bg-blue-900 text-white  rounded-lg shadow hover:bg-blue-700"
        >
          Categories
        </button></div>
    

      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg scroll-auto transform transition-transform duration-300 z-50
          ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="flex justify-between items-center px-4 py-3 border-b ">
          <h2 className="text-lg font-bolder text-blue-900">Categories</h2>
          <button
            onClick={() => setIsOpen(false)}
            className="text-gray-600 hover:text-black text-xl"
          >
            ✕
          </button>
        </div>

        <ul className="flex flex-col gap-4 p-4 text-black font-medium ">
          {categories.map((cat) => (
            <li key={cat.path}>
              <Link
                href={cat.path}
                className="block hover:bg-blue-100 px-3 py-2 rounded"
                onClick={() => setIsOpen(false)} 
              >
                {cat.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

    

      {/* Main content */}
      <main className="pt-4">{children}</main>
    </div>
  );
}
