import React, { useContext, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import './Cart.css'

export default function Cart() {
  const globe =useContext(ShopContext)
  const items = globe.state
  const dispatch = globe.dispatch
  let [quantity, setQuantity]= useState(1)
  return (

    <div className='cart-container'>
       {items.map((item,index)=>(
        <div className='card-item' key={index}>
          <div className='cart-image'>
          <img src={item.image} alt={item.name}/>
          </div>
          
           <p className='item-title'>{item.title}</p>
           <p className='item-price'>{quantity * item.price}</p>
           <div className='quantity'>
            <button onClick={()=>setQuantity(quantity+1)}>+</button>
            <p>{quantity}</p>
            <button onClick={()=>setQuantity(quantity-1)}>-</button>
           </div>
           <h2 className='remove'>X</h2>
        </div>
       
       ))}
    </div>
   
  )
}
