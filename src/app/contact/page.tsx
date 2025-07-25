'use client'
import React from 'react'
import { useRouter } from 'next/navigation'
export default function Contact() {
  const router = useRouter();
  return (<>
    <div className='text-center'> Contact-Us</div>
    <button onClick={()=>router.push("/")}  className='btn btn-outline-warning '>ContactUs</button>
    </>
  )
}
