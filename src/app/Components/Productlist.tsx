import React, { Suspense } from 'react';
import { ProductServices } from '../services/products-services';
import ProductCard from './ProductCard/CardPage';
import Loading from './Loading/Loading';

export default async function Productpage() {
  const products = await ProductServices.getProducts();

  return (
    <div className='container flex flex-wrap h-screen'>
      
      <Suspense>
        <Loading></Loading>  
        </Suspense>  
      {products.map((p: any) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  );
}
