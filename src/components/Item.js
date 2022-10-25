import { Link } from "react-router-dom";


const Item = ({ id , slug, name , price , image , category }) => {
    return (
        <Link to={`/item/${id}`}>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{price}</p>
                    <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
        </Link>
    )
}
export default Item


