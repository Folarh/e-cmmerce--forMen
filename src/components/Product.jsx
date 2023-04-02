
// import  {Products} from "../Products"
import { useFetch } from '../hooks/useFetch'

import "./Product.css"
import ProductList from './ProductList'


export default function Product() {
 
   const url = "https://fakestoreapi.com/products"
  const {data, error, loading}= useFetch(url)
  return (
    <main>
        <div className='main-header'>
            <h2>Featured Products</h2>
        </div>
        {error && <div>{error}</div>}
        {loading && <div>loading...</div>}
        <div className='main-products'>
            { data && data.map((product)=>  (
                <ProductList product={product} key={product._id}/>
            ))}
        </div>
    </main>
  )
}
