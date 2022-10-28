import ItemList from "./ItemList";
import { useEffect, useState } from "react";
import { collection , getDocs , getFirestore, query, where} from "firebase/firestore";
import Item from "./Item"
import { useParams } from "react-router-dom";


const ItemListContainer = () => {

    const { category } = useParams();

    
    const [ products , setProducts ] = useState( [] );


    useEffect( () => {
        const getData = async () => {
            const db = getFirestore();    
            const queryRef = !category ? collection(db , "Items") : query(collection(db , "Items"),where("category" , "==" , category));
            const response = await getDocs(queryRef)
            const productos = response.docs.map((doc) => {
            const newProduct = {...doc.data(), id:doc.id};
            return newProduct;
        });
        setTimeout(() => {
            setProducts(productos);
        } , 2000 )
        }
        getData();
    } , [ category ])



    const getData = async () => {
        const db = getFirestore();
        const queryRef = 
        !category 
        ?
        collection(db , "Items")
        :
        query(collection(db , "Items"),where("category" , "==" , category));
        const response = await getDocs( queryRef )    
    }

    return (
        <div>
            <ItemList items={products}/>
        </div>
    )
}
export default ItemListContainer