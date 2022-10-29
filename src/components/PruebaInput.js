import { useState } from "react";

const PruebaInput = () => {


    const [ message , setMessage ] = useState("");
    const [ name , setName ] = useState("");
    const [ adress , setAdress ] = useState("");
    const [ telephone , setTelephone ] = useState("");


    const handleChange = event => {
        setMessage( event.target.value );
    }

    const handleChange2 = event => {
        setName( event.target.value );
    }

    const handleChange3 = event => {
        setAdress( event.target.value );
    }

    const handleChange4 = event => {
        setTelephone( event.target.value );
    }
    

    const handleClick = event => {
        event.preventDefault();

        if ( (message.trim().length !== 0) && (name.trim().length !==0) && (adress.trim().length !==0) && (telephone.trim().length !==0) ){
            console.log("input values are NOT empty!");
        }else { 
            console.log("One or many Inputs are empty")
        }
    }

    return (
        <>
        <div>
            <h2>Name: { name } </h2>
            <h2>Adress: { adress } </h2> 
            <h2>Telephone: { telephone} </h2>
            <h2>String : { message } </h2>
        </div>
        <div>
        <label>Name:</label>
        <input id="name" name="name" onChange={ handleChange2 }/>
        </div>
        <div>
            <label>Adress:</label>
            <input id="adress" name="adress" onChange={ handleChange3 } />
        </div>
        <div>
            <label>Telephone:</label>
            <input id="telephone" name="telephone" onChange={ handleChange4 } />
        </div>
        <div>
            <input id="message" name="message" onChange={ handleChange } />
        </div>
        
        
        
        <button className="btn" onClick={handleClick} >Check if input empty</button>
        </>
    
    )
}
export default PruebaInput