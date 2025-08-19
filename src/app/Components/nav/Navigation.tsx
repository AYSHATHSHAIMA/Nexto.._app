"use client";
import React from "react";
import { usePathname, useRouter } from "next/navigation";

export default function Navigation() {
  const pathName = usePathname();
  const router = useRouter();

  return (
    <nav className="navbar bg-white flex justify-between items-center p-3 px-6 shadow-md">
      <div className="flex items-center gap-3 p-l-3">
        <span className="text-black font-extrabold text-3xl select-none">
          NEXTO..
        </span>
      </div>

      <ul className="flex gap-6">
        {[
          { label: "Home", path: "/" },
          { label: "About", path: "/about" },
          { label: "Products", path: "/products" },
          { label: "Contact_us", path: "/contact" },
          { label: "Sign-in", path: "/sign-in" },
          { label: "Cart", path: "/Carts" },
        ].map(({ label, path }) => (
          <li key={path}>
            <button
              onClick={() => router.push(path)}
              className={`px-3 py-2 font-semibold rounded-md text-lg ${
                pathName === path
                  ? "bg-blue-600 text-white shadow-lg rounded"
                  : "text-blue-900 hover:bg-blue-100 hover:text-blue-700 rounded"
              } transition-colors duration-200`}
            >
              {label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
