import { useParams } from "react-router-dom"
import { useFetch } from "../hooks/useFetch"
import { useShop } from "../context/useShop"
import "./ProductDetails.css"

export default function ProductDetails() {
  const {id}= useParams()
    const {data , loading, error}= useFetch("https://fakestoreapi.com/products/"+id)

    const {
      state: {cart},
      dispatch,

    } = useShop();

    const addCart =(item)=>{
      dispatch({
        type: 'ADD_T0_CART',
        payload: item,
      })
    }

   

    

    const removeCart =(item)=>{
      dispatch({
        type: 'REMOVE_CART',
        payload: item,
      })
    }
   
   
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
         
        <p className="category">Category :<span>{data.category}</span></p>
        {cart.some(prod=> prod.id === data.id)?(
           <button className="cart" onClick={()=>removeCart(data)} >Remove from Cart</button>
        ):(
          <button className="cart" onClick={()=>addCart(data)} >ADD To Cart</button>
        )
        }
        
         
       
         </div>
       </div>
      )}
       
       
       
      
    
    </div>
  )
}
