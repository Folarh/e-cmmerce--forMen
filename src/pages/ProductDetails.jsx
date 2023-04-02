import { useParams } from "react-router-dom"
import { useFetch } from "../hooks/useFetch"
import { useContext } from "react"
import { ShopContext } from "../context/ShopContext"
import "./ProductDetails.css"

export default function ProductDetails() {
  const {id}= useParams()
    const {data , loading, error}= useFetch("https://fakestoreapi.com/products/"+id)

    const GlobalState = useContext(ShopContext)
    const add = GlobalState.dispatch;
    console.log(GlobalState)
   
   
  return (
    
   
    <div className="product-details">
       {loading && <p>loading...</p>}
       {error && <p>{error}</p>} 
      
      {data && (
        <div className="cashout">
          <div className="cashout-image">
         <img src={data.image} alt={data.name}/>
       </div>
       <div className="cashout-details">
       <h3>{data.title}</h3>
       <h3>Rating : {data.rating.rate} </h3>
       <h2 className="price">${data.price}</h2> 
         <p>{data.description}</p>
         {/* <div className="controls">
          <button>-</button> 0 <button>+</button>
         
        
        </div> */}
        <p className="category">Category :<span>{data.category}</span></p>
         <button className="cart" onClick={()=>add({type:'ADD_T0_CART', payload:data})} >ADD To Cart</button>
       
         </div>
       </div>
      )}
       
       
       
      
    
    </div>
  )
}
