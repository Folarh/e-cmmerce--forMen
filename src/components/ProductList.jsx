import {Link} from "react-router-dom"

export default function ProductList({product}) {
  product.quantity=1
  return (
    <div className='product-card'>
     
    <Link to={`/products/${product.id}`}>
    <img src={product.image} alt={product.name}/>
    <h4> {product.title}</h4>
    <p>{product.category}</p>
    <h4 className="price"> ${product.price}</h4>
    </Link>
    
  </div>
  )
}
