import { Link } from "react-router-dom";


const Item = ({ id , slug, name , price , image , category }) => {
    return (
        
            <div className="card w-96 bg-white rounded-xl bg-base-100">
                <figure><img className="mt-5 rounded-md w-56 h-48" src={image} alt="Shoes" /></figure>
                <div className="card-body flex-column items-center">
                    <h2 className="card-title">{name}</h2>
                    <p>$US {price}</p>
                    <div className="card-actions justify-end">
                    <Link to={`/item/${id}`}><button className="btn btn-primary">Buy Now</button></Link>
                </div>
            </div>
        </div>
        
    )
}
export default Item


