import { Link } from "react-router-dom"



const CollectionsMenu = ( {categoryId} , {name} ) => {
    return (
        <>
        <div>
            <Link to={`/category/${categoryId}`}>
                <ul className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                    <li>{name}</li>
                </ul>
            </Link>
        </div>
        </>
    )
}
export default CollectionsMenu