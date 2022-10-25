import ItemList from "./ItemList";
import { useEffect, useState } from "react";
import { collection , getDocs , getFirestore, query, where} from "firebase/firestore";
import Item from "./Item"
import { useParams } from "react-router-dom";


const ItemListContainer = () => {

    const { category } = useParams();

    
    const [ products , setProducts ] = useState( [] );

    useEffect ( () => {
        getProducts()
    } , [] )

    const getProducts = () => {
        const db = getFirestore();
        const productsCollection = collection( db , "Items" );
        const q = query(productsCollection , where("category", "==" , {category} ) );
        getDocs( q ).then( res => {
            const productsData = res.docs.map( d => ({id: d.id , ...d.data() } ) );
            console.log( productsData );
            setProducts( productsData );
        })
    }


    return (
        <div>
            <ItemList items={products}/>
        </div>
    )
}
export default ItemListContainer