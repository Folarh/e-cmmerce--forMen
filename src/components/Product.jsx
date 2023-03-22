import React from 'react'
import  {Products} from "../Products"

import "./Product.css"


export default function Product() {
  return (
    <main>
        <div className='main-header'>
            <h2>Featured Products</h2>
        </div>
        <div className='main-products'>
            {Products.map((product)=>(
              <div key={product.id} className='product-card'>
                <img src={product.prodductImage} alt={product.ProductName}/>
                <p>{product.ProductName}</p>
                <h4> ${product.price}</h4>
                <button>Add</button>
              </div>
            ))}
        </div>
    </main>
  )
}
