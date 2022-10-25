const ItemDetail = ({item}) => {
  return (
    <div className="card lg:card-side bg-base-100 shadow-xl">
    <figure><img src={item.image} alt="Album"/></figure>
    <div className="card-body">
        <h2 className="card-title">{item.name} </h2>
        <p>{item.description}</p>
        <p>STOCK:{item.stock} </p>
        <div className="card-actions justify-end">
            <button className="btn btn-primary">Add to shopping Cart</button>
        </div>
    </div>
</div>
  )
}
export default ItemDetail