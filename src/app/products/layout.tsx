import React from "react";
import Link from "next/link";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <nav className="w-full m-0 p-0 top-0 bg-blue-50 shadow z-10">
        <ul className="flex gap-6 justify-center text-blue-900 font-medium">
        
          <li>
            <Link href="/category/beauty" className="nav-link">
              Beauty
            </Link>
          </li>

          <li>
            <Link href="/category/fragrances" className="nav-link">
              fragrances
            </Link>
          </li>
          <li>
            <Link href="/category/Groceries" className="nav-link">
              Groceries
            </Link>
          </li>

          <li>
            <Link href="/category/furniture" className="nav-link">
              Home Decorations
            </Link>
          </li>
          <li>
            <Link href="/category/Electronics" className="nav-link">
              Electronics{" "}
            </Link>
          </li>
        </ul>
      </nav>

      <main className="pt-1 ">{children}</main>
    </div>
  );
}
