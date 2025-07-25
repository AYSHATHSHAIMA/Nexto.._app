import CartButton from '@/app/Components/ProductCard/CartButton';
import { ProductServices } from '@/app/services/products-services';
import React from 'react'

export default async function productDetile(props:any) {
    console.log(props);
    const productId= await props.params.productId;

    if(productId){
        var product=await ProductServices.getProductById(productId)
    }
  return (
  <div className="bg-blue-50 min-h-screen py-8">
    <h1 className="text-2xl font-bold  text-center mb-6">Product Detail</h1>

    <div className="flex flex-col md:flex-row items-center justify-center gap-8 px-4">
      <img
        src={product.image}
        alt={product.title}
        width={200}
        className="rounded shadow-md"
      />

      <div className="max-w-md">
        <p className="text-sm text-gray-500 mb-1">ID: {product.id}</p>
        <h2 className="text-xl font-semibold text-red-600 mb-2">{product.title}</h2>
        <p className="text-gray-700 mb-2">{product.description}</p>
        <p className="text-blue-700 font-medium mb-2">Category: {product.category}</p>
        <p className="text-green-600 font-bold">Price: ${product.price}</p>
        <CartButton/>
      </div>
    </div>
  </div>
);

}
