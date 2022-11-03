import React from 'react'

import data from '../backend/Data'
import Cards from './Cards'
import Cart from './Cart'


export default function Store() {

  return (
    <>
    <div className="container-fluid">
<h2 className="text-center display-5 lead mt-5">
  Our Products in store 
  </h2>
<div className="container py-4">
  <div className="row">
    {data.products.map((item, index)=>{
      return (
      <Cards img={item.img} title={item.title} description={item.descrip} price={item.price} item={item}key={index}/>
      )
    })}
    
    </div>
</div>
 
</div>
<Cart/>
    </>
    )}
