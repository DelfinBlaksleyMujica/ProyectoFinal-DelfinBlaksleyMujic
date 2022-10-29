import { Link } from "react-router-dom";



const DeployableMenu = ( { category , name } ) => {
    return (
        <Link to={`/category/${category}`}>
            <li>{category}</li>
        </Link>
    )
}
export default DeployableMenu