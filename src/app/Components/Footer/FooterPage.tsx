import React from 'react'

export default function footerPage() {
  return (
     <footer className="bg-gray-900 text-gray-300 mt-10">
  <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">

    <div>
      <h2 className="text-xl font-bold text-white mb-4">Nextoo</h2>
      <p className="text-sm">
        Your one-stop destination for the best Beauty products, accessories, and deals.
      </p>
    </div>

    <div>
      <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
      <ul className="space-y-2 text-sm">
        <li><a href="/" className="hover:text-white transition">Home</a></li>
        <li><a href="/products" className="hover:text-white transition">Products</a></li>
        <li><a href="/about" className="hover:text-white transition">About Us</a></li>
        <li><a href="/contact" className="hover:text-white transition">Contact</a></li>
      </ul>
    </div>

    <div>
      <h3 className="text-lg font-semibold text-white mb-4">Categories</h3>
      <ul className="space-y-2 text-sm">
        <li><span className="hover:text-white transition">Beauty</span></li>
        <li> <span className="hover:text-white transition">Electronics</span></li>
        <li><span className="hover:text-white transition">Fragrences</span></li>
        <li><span className="hover:text-white transition">Home decore</span></li>
      </ul>
    </div>

    <div>
      <h3 className="text-lg font-semibold text-white mb-4">Stay Updated</h3>
      <p className="text-sm mb-4">Subscribe to our newsletter for the latest deals.</p>
      <form className="flex">
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full px-3 py-2 rounded-l-lg text-gray-900 focus:outline-none"
        />
        <button
          type="submit"
          className="bg-blue-600 px-4 py-2 rounded-r-lg text-white hover:bg-blue-700 transition"
        >
          Subscribe
        </button>
      </form>
    </div>

  </div>

  <div className="border-t border-gray-700 text-center py-4 text-sm text-gray-500">
 Nexto All rights reserved.
  </div>
</footer>
  )
}
