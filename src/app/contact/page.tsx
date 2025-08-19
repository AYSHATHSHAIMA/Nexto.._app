'use client'
import React from 'react'
import { useRouter } from 'next/navigation'

export default function Contact() {
  const router = useRouter();
  
  return (
    <>

      <div className="flex flex-col justify-center items-center min-h-screen px-4 bg-gray-50">
        <div className="bg-white shadow-lg rounded-lg mt-5 p-5  w-full max-w-md sm:max-w-lg ">

          <form className="flex flex-col gap-5 ">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Contact_us</h2>

            <label className="font-medium text-gray-600" htmlFor="name">Your Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              required
              className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />

            <label className="font-medium text-gray-600" htmlFor="email">Your Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              required
              className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />

            <label className="font-medium text-gray-600" htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              placeholder="Write your message"
              required
              rows={4}
              className="border border-gray-300 rounded-md px-4 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />

            <button
              type="submit"
              className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold rounded-md py-3 transition"
            >
              Send Message
            </button>
          </form>

          <div className="mt-8 text-gray-700">
            <strong>Contact Info</strong>
            <p><strong>Address:</strong> 123 Market Street, Mumbai, India</p>
            <p><strong>Email:</strong> support@Shoppeestore.com</p>
            <p><strong>Phone:</strong> +91-9876543210</p>
          </div>

          <button
            onClick={() => router.push("/")}
            className="mt-6 w-full text-center border border-yellow-400 text-yellow-600 rounded-md py-2 hover:bg-yellow-400 hover:text-black transition"
          >
            Back to Home
          </button>

        </div>
      </div>
    </>
  )
}
