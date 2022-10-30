import { useEffect , useState } from "react"
import Swal from "sweetalert2";



const ItemCount = ( { stock , addHandler } ) => {

    
    const [counter, setCounter] = useState(0);

    useEffect( () => {
        console.log("Se modificaron los items en contador");
    }, [counter]);

    const addItem = () => {
        if (counter < stock ) {
            setCounter(counter + 1);
        }else{
            Swal.fire({
                position: 'center',
                icon: 'error',
                text: "No hay mas unidades en stock.",
                showConfirmButton: false,
                timer: 3000
                })
        }
    }

    const takeItem = () => {
        if (counter > 0) {
            setCounter(counter - 1);
        }

    }
    
    return (
    <div className="flex flex-col items-center">
        <div className="flex justify-center w-full">
            <button className="btn m-5" onClick={ takeItem }>-</button>
            <div className="m-8">{ counter }</div>
            <button className="btn m-5" onClick={ addItem }>+</button>
        </div>
        <div className="card-actions justify-end">
            <button onClick={ ()=> addHandler(counter) } className="btn btn-primary">Add to shopping Cart</button>
        </div>
   
    </div>
    
    )
}
export default ItemCount