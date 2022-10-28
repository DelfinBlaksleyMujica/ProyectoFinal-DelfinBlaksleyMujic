import { useCart } from "../context/CartContext"
import ItemCount from "./ItemCount"

const ItemDetail = ( {item} ) => {

  const { addToCart } = useCart()


  const addHandler = () => {
    addToCart( item )

  }


  return (
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
          <ItemCount stock={item.stock} />
          <p>STOCK:{item.stock} </p>
          <div className="card-actions justify-end">
            <button onClick={ addHandler } className="btn btn-primary">Add to shopping Cart</button>
          </div>
        </div>
      </div>
    </section>
    
  )
}
export default ItemDetail