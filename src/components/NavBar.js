import { Link } from "react-router-dom"
import CartWidget from "./CartWidget"
import CollectionsMenu from "./CollectionsMenu"


const NavBar = ({ nombreDeEmpresa }) => {


    const collection = [
        { categoryId:"SummerCollection" , name:"SUMMER/23" , id:1 },
        { categoryId:"SpringCollection" , name:"SPRING/22" , id:2 },
        { categoryId:"SaleCollection" , name:"SALE" , id:3 }
    ]



    return (
    <div className="navbar bg-base-100">
        <div className="flex-1">
            <Link to="/" className="btn btn-ghost normal-case text-xl">{ nombreDeEmpresa }</Link>
        </div>
        <div>
            { collection.map ( s => <CollectionsMenu key={s.id} {...s} />)}
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