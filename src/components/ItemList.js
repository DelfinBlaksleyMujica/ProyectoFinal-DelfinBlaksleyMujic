import { useEffect, useState } from "react";
import { collection , getDocs , getFirestore} from "firebase/firestore";
import Item from "./Item"


const ItemList = ( {items} ) => {

    

    return (
        <div className="flex justify-center">
    
            <div className="flex justify-center flex-wrap flex-row w-10/12">
                { items.map( p => <Item key={p.id} {...p} />) }
            </div>
        
        </div>
    )
}
export default ItemList