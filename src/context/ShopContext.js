import React, { createContext, useReducer } from 'react'


export const ShopContext = createContext();

export const ShopReducer =(state, action)=>{
  switch(action.type){
    case 'ADD_T0_CART':
      return{...state, cart: [...state.cart,{...action.payload, qty: 1}]};

      case 'REMOVE_CART':
      return{...state, cart: state.cart.filter((product)=> product.id !==action.payload.id),};

      case 'CHANGE_QTY':
        return{
          ...state,
          cart: state.cart.filter((product)=>
          product.id=== action.payload.id
          ?(product.qty = action.payload.qty)
          : product.qty
          ),
        };
      default:
        return state;
      
  }
};


export const ShopProvider = ({children})=>{
// custom logic
const [state, dispatch]= useReducer(ShopReducer,{
  cart : [],
})

 return(
    <ShopContext.Provider value={{state, dispatch}}>
      {children}
    </ShopContext.Provider>
  );

};

