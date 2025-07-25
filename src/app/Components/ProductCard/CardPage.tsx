'use client';
import Link from 'next/link';
import React, { useEffect } from 'react'
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function ProductCard(props:any) {
     const prod= props.product;
     const route=useRouter();
     //state to keep track selected product
     const[selectedProduct, setSelectedProduct]=useState();

     const selectProd=()=>{
      console.log("Selecting Product",prod);
      setSelectedProduct(prod);
     };

     useEffect(()=>{
      route.prefetch(`/products/${prod.id}`)
     },[route])


 return (
  <> 

    <div  className="flex justify-center no-underline items-center" >
    
      <div 
        onClick={selectProd} 
        className="w-60 h-60 m-2 cursor-pointer max-w-xs bg-white shadow-md rounded-lg overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow duration-300 flex flex-col justify-center items-center text-center"
      >
        <img src={prod.image} alt={prod.title} width={75} />
        <p className="mt-2 text-sm font-medium no-underline ">{prod.title}</p>
        <button  className=' btn btn-dark text-white no-underline rounded w-25' onClick={()=>
          route.push(`/products/${prod.id}`) 
        }> View</button>
         <button onClick={() => 
    route.push(`/products?title=${prod.title}`, { scroll: true })
  }
>
  -
</button>


        {/* <Link prefetch href={'#Recommended'}>Go To</Link> */}
      </div>
    </div>
        {/* <button onClick={() => 
    route.push(`/products?title=${prod.title}`, { scroll: true })
  }
>
  Same page navigation
</button> */}

  </>
);

}
