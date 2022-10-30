import Swal from "sweetalert2"
import { useCart } from "../context/CartContext"
import ItemCount from "./ItemCount"

const ItemDetail = ( {item} ) => {

  const { addToCart  } = useCart()


  const addHandler = ( cantidad ) => {
    addToCart( {...item , cantidad} )
    const Toast = Swal.mixin({
      toast: true,
      position: 'center',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
    })
    
    Toast.fire({
      icon: 'success',
      title: 'Item added to cart succesfully'
    })
  }


  return (
    <>
    <section className="w-full flex justify-center">
      <div className="card lg:card-side bg-base-100 shadow-xl w-10/12" >
        <figure><img className="h-96 rounded-xl pl-10" src={item.image} alt="Album"/></figure>
        <div className="card-body flex-column justify-center items-center">
          <div className="border-b-2 border-grey-400 w-full flex justify-center">
            <h2 className="card-title ">{item.name} </h2>
          </div>
          <div className="flex justify-start w-full h-48 bg-slate-100 rounded-xl">
            <li className="pl-10 pt-5">{item.description}</li>
          </div>
          <div>$US { item.price }</div>
          <p>STOCK:{item.stock} </p>
        </div>
      </div>
    </section>
    <div></div>
    <ItemCount stock={item.stock} addHandler={addHandler} />
    </>
    
    
  )
}
export default ItemDetail