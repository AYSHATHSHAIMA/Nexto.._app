import React from 'react'
import ProductCard from '../Components/ProductCard/CardPage';
import { ProductServices } from '../services/products-services';
import Link from 'next/link';
import Productlist from '../Components/Productlist';

 async function getProducts() {
    const ProductResponse = await ProductServices.getProducts();
    return ProductResponse;
 }
  export default async function Productpage() {
     const product= await getProducts()
  
  return (<>
  
   <h2  className='text-center text-warning  text-shadow-lg '>Product-List</h2>
  

  <Productlist></Productlist>
    



   
      {/* Recommending products
       <h2 id='Recommended '>Recommented Product</h2>
        <div className='container flex flex-wrap h-screen'>
       {product.map((p:any)=>
    (
    <ProductCard  key={p.id} product={p} ></ProductCard>

  ))}</div> */}
  </>);

  }