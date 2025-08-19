import CartButton from '@/app/Components/ProductCard/CartButton';
import { ProductServices } from '@/app/services/products-services';
import { CartItem } from '@/redux/slice/cartSlice';
import React from 'react';

export default async function ProductDetail(props: any) {
  const productId = await props.params.productId;

  let product: CartItem | null = null;
  if (productId) {
    product = await ProductServices.getProductById(productId);
  }

  if (!product) {
    return <p className="text-center mt-8 text-red-600 font-semibold">Product not found.</p>;
  }

  return (
    <div className="bg-white min-h-screen py-10 px-4 md:px-10 flex flex-col items-center">
      <h1 className="text-3xl font-extrabold text-center mb-10 text-blue-900">
        Product Detail
      </h1>

      <div className="flex flex-col md:flex-row items-center bg-white shadow-lg rounded-lg border border-gray-200 max-w-4xl w-full p-6 gap-10">
        <div className="flex-1 flex justify-center items-center p-4">
          <img
            src={Array.isArray(product.images) ? product.images[0] : product.images}
            alt={product.title}
            className="max-h-72 object-contain rounded-lg shadow-md"
          />
        </div>

        <div className="flex-1 flex flex-col justify-between max-w-md">
          <div>
            <p className="text-sm text-gray-500 mb-2">ID: <span className="font-semibold">{product.id}</span></p>
            <h2 className="text-2xl font-bold text-red-600 mb-3">{product.title}</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">{product.description}</p>
            <p className="text-blue-700 font-semibold mb-1">
              Category: <span className="capitalize">{product.category}</span>
            </p>
            <p className="text-green-600 font-bold text-xl mb-6">Price: ₹{product.price}</p>
          </div>

          <CartButton product={product} />
        </div>
      </div>
    </div>
  );
}
