'use client';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6 flex flex-col items-center">
      <h1 className="text-4xl font-extrabold mb-8 text-blue-700">About Us</h1>
      
      <div className="max-w-4xl bg-white rounded-lg shadow-md p-8">
        <p className="text-gray-700 text-lg mb-6 leading-relaxed">
          Welcome to NEXTO, your trusted online store for quality products at the best prices. We are passionate about
          delivering an exceptional shopping experience tailored to your needs.
        </p>
        
        <p className="text-gray-700 text-lg mb-6 leading-relaxed">
          Our mission is to provide a seamless and enjoyable shopping journey with an extensive catalog of items ranging
          from electronics to apparel. We strive to ensure every customer finds exactly what they're looking for with
          easy navigation and top-notch customer support.
        </p>
        
        <p className="text-gray-700 text-lg leading-relaxed">
          Thank you for choosing NEXTO. We look forward to serving you and making your shopping experience outstanding!
        </p>
      </div>
    </div>
  );
}
