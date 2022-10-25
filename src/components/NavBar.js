import CartWidget from "./CartWidget"
import CollectionsMenu from "./CollectionsMenu"


const NavBar = ({ nombreDeEmpresa }) => {

    return (
    <div className="navbar bg-base-100">
        <div className="flex-1">
            <a className="btn btn-ghost normal-case text-xl">{ nombreDeEmpresa }</a>
        </div>
        <div>
        <CollectionsMenu/>
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