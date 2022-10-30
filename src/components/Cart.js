import React,{ useState } from 'react';
import { useCart } from "../context/CartContext";
import { addDoc , collection , getFirestore } from "firebase/firestore";
import CartProductsDetail from "./CartProductsDetail";
import Swal from 'sweetalert2';



export const UserForm = () => {

  const { products  ,clearCart , getTotal } = useCart();

  const putOrder = () => {
    const user = { name: name , adress: adress , telephone: telephone , email : email }
    const order = {
      buyer: user , 
      items: products , 
      total: getTotal(),
      estado : "generada",
      fecha : Date(),
    }

    const db = getFirestore()
    const ordersCollection = collection( db , "Orders")
    addDoc( ordersCollection , order ).then( ({id}) => {
      console.log( id );
      Swal.fire({
        position: 'center',
        icon: 'success',
        text: "Tu compra se ha realizado con éxito con el código de orden " + id + ". Te llegará un mail al e-mail que indicaste en el formulario con todos los detalles que necesitas tener para la entrega. Gracias por comprar con nosotros!",
        showConfirmButton: false,
        timer: 9500
      })
    clearCart()
    })
  }

  const [ email , setEmail ] = useState("");
    const [ name , setName ] = useState("");
    const [ adress , setAdress ] = useState("");
    const [ telephone , setTelephone ] = useState("");
  

  const handleChange = event => {
    setName( event.target.value );
  }

  const handleChange2 = event => {
    setAdress( event.target.value );
  }

  const handleChange3 = event => {
    setTelephone( event.target.value );
  }

const handleChange4 = event => {
    setEmail( event.target.value );
  }

  const handleClick = event => {
    event.preventDefault();

    if ( (email.trim().length !== 0) && (name.trim().length !==0) && (adress.trim().length !==0) && (telephone.trim().length !==0) && (products.length > 0 ) ){
        putOrder();
    }else { 
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Verifica que todos los campos estén completos y haya productos en tu carrito para poder finalizar la compra.',
      })
    }
}






  return(
    <>
      <div className="bg-green-600 flex flex-col w-full justify-center h-full">
      <div className="flex flex-col  items-center mt-10">
        <h3 className="text-xl">Datos de compra</h3>
        <p>Completa tus datos para finalizar con tu compra.</p>
      </div>
      <form className="h-3/5">
        <div className="flex flex-col  items-center mt-10">
          <label>Name:</label>
          <input type="text" onChange={ handleChange } name="name" id="name" className="border border-indigo-900" required/>
        </div>
        <div className="flex flex-col  items-center" >
          <label>Adress:</label>
          <input type="text" onChange={ handleChange2 } name="adress" id="adress" className="border border-indigo-900" required/>
        </div>
        <div className="flex flex-col  items-center">
        <label>Telephone:</label>
        <input type="tel" name="telephone" id="telephone" onChange={ handleChange3 } className="border border-indigo-900" required/>
        </div>
        <div className="flex flex-col  items-center mb-10">
          <label>E-mail:</label>
          <input type="e-mail" name="email" id="email" onChange={ handleChange4 } className="border border-indigo-900" required/>
        </div>
  
      </form>
    </div>
    <div className="flex w-full justify-center">
      <button className="btn mt-10 mb-10" onClick={handleClick}>Confirmar Compra</button>
    </div>
    </>
  )
}




const Order = () => {
  return (
    <>
    <UserForm/>    
    </>
    
  )
}






const Cart = () => {


    const { products , clearCart ,  getTotal } = useCart();

    return (
      <>
      <div>
        <div className="flex  justify-center">
          <h1 className="text-5xl border-b-2 border-grey-400 mb-10 ">
            CART
          </h1>
        </div>
        <div>
        <div className="overflow-x-auto flex justify-around flex-col">
  <table className="table w-full text-center table-zebra ">

    <thead>
      <tr>
        <th>Name</th>
        <th>Price</th>
        <th>Cantidad</th>
        <th>Image</th>
      </tr>
    </thead>
    <tbody>
      
        {products.map ( ( p , i ) => <CartProductsDetail key={i} {...p} />)}
      
    </tbody>
  </table>
  <div className="flex w-full justify-center mt-20 mb-10">
    <h3>Subtotal: US$ { getTotal() }  </h3>
  </div>
</div>
<div className="flex w-full justify-center">
  <button className="btn mt-10 mb-10" onClick={clearCart}>Limpiar carrito</button>
</div>

<Order/>          
</div>            
</div>
      
      </>
        
        
    )
}
export default Cart