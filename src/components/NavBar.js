import { Link } from "react-router-dom"
import CartWidget from "./CartWidget"


const NavBar = ({ nombreDeEmpresa }) => {


    return (
    <nav className="navbar bg-base-100">
        <div className="flex-1">
            <Link to="/" className="btn btn-ghost normal-case text-xl">{ nombreDeEmpresa }</Link>
        </div>
        <div className="flex justify-around items-center w-full">
            <Link to="/category/SpringCollection">SPRING/22</Link>
            <Link to="/category/SummerCollection">SUMMER/23</Link>
            <Link to="/category/SaleCollection" className="text-red-400">SALE</Link>

        </div>
        <div className="flex-none">
            <CartWidget/>
            <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                        <Link to="/"><img src="/images/ActivaLogo.png" /></Link>
                    </div>
                </label>
            </div>
        </div>
    </nav>
    )
}
export default NavBar