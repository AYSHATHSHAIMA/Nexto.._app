import React from 'react'

export default async function productCategory(props:any) {
    console.log(props)
    const color= await props.searchParams.color;
  return (
    <div><h1>product-category</h1> 
        colour={color}</div>
  )
}
