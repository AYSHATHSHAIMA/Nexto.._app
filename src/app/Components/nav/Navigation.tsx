'use client'
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Image from 'next/image';
import { useRouter } from 'next/navigation';
export default function Navigation() {
  const pathName=usePathname();
  const router = useRouter();
  return (
    <div><nav className="navbar navbar-light bg-warning justify-content-evenly p-0 m-0">
  <a className="navbar-brand"><img
  src="https://static.vecteezy.com/system/resources/previews/043/572/102/original/icon-icons-design-vector.jpg"
  alt="Icon icons design"
  width="70"
  height="70"
/>
</a>
 <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
<ul className='d-flex gap-5 '>
       <li>
    <button onClick={()=> router.push("/" ) } 
    className={`px-3 py-2  font-semibold rounded ${pathName === '/' ? 'bg-blue-500 text-white' : 'text-blue-500'}`} >Home</button>
      </li>
        <li>
    <button onClick={()=> router.push( "/about" ) } 
    className={`px-3 py-2 font-semibold rounded ${pathName === '/about' ? 'bg-blue-500 text-white' : 'text-blue-500'}`}
  >
    About
  </button>
</li>
       <li>
    <button onClick={()=> router.push("/products" ) } 
    className={`px-3 py-2 font-semibold rounded ${pathName === '/products' ? 'bg-blue-500 text-white' : 'text-blue-500'}`}
  >
    Products
  </button>
</li>
 <li>
  <button onClick={()=> router.push("/contact" ) } 
    className={`px-3 py-2 font-semibold rounded ${pathName === '/contact' ? 'bg-blue-500 text-white' : 'text-blue-500'}`}
  >
    Contact_us
  </button>
</li>
      </ul>
 <form className="flex items-center space-x-2">
  <input 
    className="form-control w-700 px-4 py-2 border border-gray-300 rounded" 
    type="search" 
    placeholder="Search" 
    aria-label="Search" 
  />
  <button 
    className="btn px-4 m-2 py-2 border border-green-500 text-green-500 hover:bg-green-500 hover:text-white rounded" 
    type="submit"
  >
    Search
  </button>
</form>

</nav></div>
  )
}
