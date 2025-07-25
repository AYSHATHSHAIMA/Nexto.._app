'use client'
import React from 'react'
import { useRouter } from 'next/navigation';

export default function CartButton() {
    const router= useRouter();
  return (
    <button className=' btn btn-dark text-white rounded w-25'   onClick={()=>{
          router.push("/Carts")
        }}>Add_To-cart</button>
  )
}
