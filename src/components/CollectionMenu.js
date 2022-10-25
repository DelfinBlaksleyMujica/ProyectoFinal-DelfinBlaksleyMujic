import { Link } from "react-router-dom"


const CollectionMenu = ( { category , season } ) => {
  return (
    <Link to={`/category/${category}`}>
      <ul className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        <li>{season}</li>
      </ul>
    </Link>
  )
}
export default CollectionMenu