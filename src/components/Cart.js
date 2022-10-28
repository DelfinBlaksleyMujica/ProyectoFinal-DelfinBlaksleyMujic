import React from "react";
import { useCart } from "../context/CartContext";


const Cart = () => {

  const { products , clearCart } = useCart();

  const clearCartHandler = () =>{
    
  }


  return (
    <>



    
    <div>Cart:
      { products.map(  p   => <div className="flex justify-evenly" key={ p.id }>
                                <li>{p.name}</li>
                                <li>$US { p.price } </li>
                                <img src={ p.image }/>
                              </div>) }
    </div>
    <div></div>
    <button className="btn" onClick={ clearCart }>Limpiar Carrito</button>
    </>
    
  )
}
export default Cart