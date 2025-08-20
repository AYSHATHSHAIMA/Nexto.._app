"use client";

import React, { useState } from "react";
import { usePathname, useRouter } from "next/navigation";

export default function Navigation() {
  const pathName = usePathname();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Products", path: "/products" },
    { label: "Contact_us", path: "/contact" },
    { label: "Sign-in", path: "/sign-in" },
    { label: "Cart", path: "/Carts" },
  ];

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0 text-2xl font-extrabold text-black">
            NEXTO..
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="text-blue-900 hover:text-blue-600 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-6">
            {navItems.map(({ label, path }) => (
              <button
                key={path}
                onClick={() => router.push(path)}
                className={`px-3 py-2 font-semibold rounded-md text-lg transition-colors duration-200 ${
                  pathName === path
                    ? "bg-blue-600 text-white shadow-md"
                    : "text-blue-900 hover:bg-blue-100 hover:text-blue-700"
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Nav Items */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4">
          <ul className="flex flex-col gap-2">
            {navItems.map(({ label, path }) => (
              <li key={path}>
                <button
                  onClick={() => {
                    router.push(path);
                    setIsOpen(false);
                  }}
                  className={`block w-full text-left px-3 py-2 font-semibold rounded-md text-lg transition-colors duration-200 ${
                    pathName === path
                      ? "bg-blue-600 text-white shadow-md"
                      : "text-blue-900 hover:bg-blue-100 hover:text-blue-700"
                  }`}
                >
                  {label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
