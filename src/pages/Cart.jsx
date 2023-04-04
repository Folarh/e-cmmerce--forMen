import React, {  useState, useEffect } from 'react'
import {Link} from 'react-router-dom'
import {useShop} from  "../context/useShop"
import './Cart.css'

export default function Cart() {
  const [total, setTotal]= useState()
  const {
    state: {cart},
    dispatch,
  } =useShop()

  useEffect(()=>{
    const totalProduct= cart.reduce(
      (acc, curr)=> acc + curr.price * curr.qty, 0
    );
    setTotal(Math.round(totalProduct));
  },[cart]);

  const handleDelete = (id)=>{
    dispatch({type: 'REMOVE_CART', payload:id})
  };


 
  return (

    <div className='cart-container'>
       {cart.map((item)=>(
        <div className='card-item' key={item.id}>
          <div className='cart-image'>
          <img src={item.image} alt={item.name}/>
          </div>
          
           <p className='item-title'>{item.title}</p>
           <div className='quantity'>
          <select
            name="quantity"
            onChange={(e)=>
              dispatch({
                type: 'CHANGE_QTY',
                payload: {id: item.id, qty: e.target.value}
              })
               }
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
          </select>
           </div>
           <h4 className='item-price'>${item.price}</h4>
         
           <h2 onClick ={()=>handleDelete(item)}className='remove'>X</h2>
        </div>
       
       ))}
       <div className='check-out'>
       <h3 className='item-price'>Subtotal({cart.length})</h3>
           <p className='item-total'> Total: ${total}</p>
           <button>CheckOut</button> <br/>
           <Link to="/">Continue shopping</Link>
       </div>
    </div>
   
  )
}
