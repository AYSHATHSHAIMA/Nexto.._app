import React from 'react'

export default function Dynamicsearch(props:any) {
  const myparams:string[]=props.params.myParams;
  const category = myparams[0];
  const group = myparams[1];
  const brand =myparams[2];
  const model=myparams[3];
  return (
    <div>Dynamic Searches : {category},{group}</div>
  )
}
