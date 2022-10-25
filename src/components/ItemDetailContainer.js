import { collection, doc, getDoc, getFirestore } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail"

const ItemDetailContainer = () => {

    const { id }= useParams({});

    const [ product , setProduct ] = useState({});

    useEffect(() => {
        getProduct()
    } , [] );

    const getProduct = () => {
        const db = getFirestore();
        const productsCollection = collection( db , "Items" );
        const docRef = doc(productsCollection , id );
        getDoc( docRef ).then( res => {
            console.log( res.data() );
            setProduct( res.data() );
        })

    }
    return (
        <section className="">
            <ItemDetail item={product} />
        </section>
    )
}
export default ItemDetailContainer