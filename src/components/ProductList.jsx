import {Link} from "react-router-dom"
import {useEffect} from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function ProductList({product}) {
  useEffect(()=>{
    AOS.init({duration: 2000});
  },[]);
  // product.quantity=1
  return (
    <div className='product-card' data-aos="zoom-in">
     
    <Link to={`/products/${product.id}`} >
    <img src={product.image} alt={product.name} />
    <h4> {product.title}</h4>
    <p>{product.category}</p>
    <h4 className="price"> ${product.price}</h4>
    </Link>
    
  </div>
  )
}
