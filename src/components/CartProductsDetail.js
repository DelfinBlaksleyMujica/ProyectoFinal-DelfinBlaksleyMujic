const CartProductsDetail = ({ name , price , image , cantidad } ) => {
    return (
    <tr>
        <td>{name}</td>
        <td>{price}</td>
        <td>{cantidad}</td>
        <td className="flex justify-center"><img className="w-48 h-48" src={image} /></td>
        </tr>  
    )
}
export default CartProductsDetail