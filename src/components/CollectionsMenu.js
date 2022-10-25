import { Link } from "react-router-dom"



const CollectionsMenu = () => {
    return (
        <>
        <div className="flex">
        <div>
            <Link to="/category/SpringCollection" className="mr-20 ml-20" >SPRING/22</Link>
        </div>
        <div>
            <Link to="/category/SummerCollection" className="mr-20 ml-20">SUMMER/23</Link>
        </div>
        <div>
            <Link to="7category/SaleCollecion" className="mr-20 ml-20">/SALE</Link>
        </div>

        </div>
        </>
  )
}
export default CollectionsMenu