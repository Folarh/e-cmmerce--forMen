import {useContext} from "react"
import {ShopContext} from "../context/ShopContext"

export  function useShop() {
    const context = useContext(ShopContext)


    if (context === undefined){
        throw new Error(" useShop() must be used inside a ShopProvider")
    }
  return context;
    
  
};


