import { Link } from "react-router-dom"
import CartWidget from "./CartWidget"


const NavBar = ({ nombreDeEmpresa }) => {






    return (
    <div className="navbar bg-base-100">
        <div className="flex-1">
            <Link to="/" className="btn btn-ghost normal-case text-xl">{ nombreDeEmpresa }</Link>
        </div>
        <div>
            
        </div>
        <div className="flex-none">
            <CartWidget/>
            <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                        <img src="/images/ActivaLogo.png" />
                    </div>
                </label>
            </div>
        </div>
    </div>
    )
}
export default NavBar