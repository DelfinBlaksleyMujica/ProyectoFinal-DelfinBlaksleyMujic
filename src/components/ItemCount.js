import { useEffect , useState } from "react"



const ItemCount = ({stock}) => {

    
    const [counter, setCounter] = useState(0);

    useEffect( () => {
        console.log("Se modificaron los items en contador");
    }, [counter]);

    const addItem = () => {
        if (counter < stock ) {
            setCounter(counter + 1);
        }else{
            alert("No hay más unidades en stock")
        }
    }

    const takeItem = () => {
        if (counter > 0) {
            setCounter(counter - 1);
        }

    }
    
    return (
    <div className="flex justify-center w-full">
        <button className="btn m-5" onClick={ takeItem }>-</button>
        <div className="m-8">{ counter }</div>
        <button className="btn m-5" onClick={ addItem }>+</button>
    </div>
    )
}
export default ItemCount