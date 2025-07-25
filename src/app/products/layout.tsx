import React from 'react';
import Link from 'next/link';

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      {/* Navigation bar */}
      <nav className="w-full m-0 p-0  top-0 bg-blue-50  shadow z-10">
        <ul className="flex gap-6 justify-center text-blue-900 font-medium">
          <li>
            <Link href="/" className='nav-link'>Men's Clothing</Link>
          </li>
          <li>
            <Link href="/about" className='nav-link'>Women's Clothing</Link>
          </li>
          <li>
            <Link href="/products" className='nav-link'>Electronics</Link>
          </li>
        </ul>
      </nav>

      {/* Main page content below navbar */}
      <main className="pt-1 ">{children}</main>
                {/* <p className="text-center  min-h-screen flex flex-col bg-primary m-0 p-0"> @_my_next_app..</p> */}

    </div>
  );
}
