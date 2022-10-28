import { createContext, useContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

const CartContext = createContext({
    products: [] ,
    addToCart: () => {},
    clearCart: () => {},
    totalProductsCount:0,
    subTotalProducts: () => {},

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


    const context = {
        products: products ,
        addToCart: addToCart,
        clearCart: clearCart,
        totalProductsCount:products.length,
        subTotalProducts: products.reduce(( acc , el ) => acc + el.price , 0)
    }


    return (
        <CartContext.Provider value={ context }>
            { children }
        </CartContext.Provider>
    )
}

export { useCart , CartContextProvider }