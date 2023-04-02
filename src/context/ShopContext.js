import React, { createContext, useReducer } from 'react'


export const ShopContext = createContext();


export const ShopProvider = ({children})=>{
// custom logic
const ShopReducer =(state, action)=>{
  switch(action.type){
    case 'ADD_T0_CART':
      //preventing multiple add from d same product.
      const tempstate= state.filter((item)=>action.payload.id===item.id)
      if(tempstate.length>0){
        return state
      }else{
        return [...state,  action.payload];
      }


      // case 'INCREMENT':
      //   const tempstate1=state.map((item)=>{
      //     if(item.id===action.payload){
      //       return{...item, quantity:item.quantity+1}
      //     }
      //   })

     
      case 'REMOVE_FROM_CART':
        return ""
    default: return state;
  }
}
 const [state, dispatch]=useReducer(ShopReducer, []);
 const info ={state, dispatch}


  return(
    <ShopContext.Provider value={info}>
      {children}
    </ShopContext.Provider>
  )

}

