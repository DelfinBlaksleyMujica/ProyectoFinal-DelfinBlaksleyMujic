import { useEffect, useState } from "react";
import { collection , getDocs , getFirestore} from "firebase/firestore";
import Item from "./Item"


const ItemList = ( {items} ) => {

    

    return (
        <div>
        { items.map( p => <Item key={p.id} {...p} />) }
        </div>
    )
}
export default ItemList