import { createContext, useContext, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

const CartContext = createContext({
    products: [] ,
    addToCart: () => {},
    clearCart: () => {},
    getQuantity: () => {},
    getTotal:() => {},
    

});

const useCart = () => {
    return useContext( CartContext )
}

const CartContextProvider = ( { children } ) => {
    

    const [ products , setProducts ] = useLocalStorage("Products in cart" , [] );
    


    const addToCart = ( product ) =>{
        setProducts( products => [...products , product ])
    }


    const clearCart = () => {
        setProducts( [] );
    }
    

    const getQuantity = () => {
        let cant = 0
        products.forEach( (e) => cant += e.cantidad)
        return cant
    }

    

    const getTotal = () => {
        let total = 0
        products.forEach( (e) => total += (e.cantidad * e.price))
        return total
    }



    const context = {
        products: products ,
        addToCart: addToCart,
        clearCart: clearCart,
        getQuantity: getQuantity,
        getTotal: getTotal,
    }


    return (
        <CartContext.Provider value={ context }>
            { children }
        </CartContext.Provider>
    )
}

export { useCart , CartContextProvider }