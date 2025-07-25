import React, { Suspense } from 'react'

export default  async function Moduleslayout( {
    
      children,
    }: {
      children: React.ReactNode;
    }){
  return (
    <div>Modules Layout
        <Suspense><p className='text-red-600'>Loading......</p>
       </Suspense>
        {children}

    </div>

  )
}
