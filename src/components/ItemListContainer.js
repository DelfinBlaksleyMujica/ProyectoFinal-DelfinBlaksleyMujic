import ItemList from "./ItemList";
import { useEffect, useState } from "react";
import { collection , getDocs , getFirestore, query, where} from "firebase/firestore";
import Item from "./Item"
import { useParams } from "react-router-dom";


const Loading = () => {
    return(
        <section className="flex w-full justify-center ">
            <div className="flex-column justify-center text-center">
                <img className="loading__logo" src="/images/ActivaLogo.png" alt="" />
                <button className="btn loading">lOADING</button>
            </div>
            
        </section>
    )
}

const ItemListContainer = () => {

    const { category } = useParams();

    const [ loading , setLoading ] = useState(true);

    
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
            setLoading(false)
        } , 2000 )
        }
        
        getData();
        
    } , [ category ])


    return (
        <>

        { loading ? <Loading/> : <div>
            <section className="flex w-full justify-center">
                <h1 className="text-5xl border-b-2 border-red-900 w-4/5 text-center"> {category} </h1>
            </section>
            <div>
                <ItemList items={products}/>
            </div>
        </div>}
        
        </>
        
    )
}
export default ItemListContainer