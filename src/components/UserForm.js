export const UserForm = ( {setUser} ) => {

    const[ user , setUser ] = useState({})

    const confirmClient = ( event ) => {
        if( event.target.value >= 1){

        console.log(event.target.name)  
        console.log(event.target.value);
        }else{
        alert("LLENAR CAMPOS")
        }
    }



    return(
        <div className="bg-green-600 flex flex-col w-full justify-center h-full">
            <div className="flex flex-col  items-center mt-10">
                <h3 className="text-xl">Datos de compra</h3>
                <p>Completa tus datos para finalizar con tu compra.</p>
            </div>
            <form className="h-3/5">
                <div className="flex flex-col  items-center mt-10">
                    <label>Name:</label>
                    <input type="text" onChange={confirmClient} name="name" className="border border-indigo-900 "/>
                </div>
                <div className="flex flex-col  items-center" >
                    <label>Adress:</label>
                    <input type="text" onChange={confirmClient} name="adress" className="border border-indigo-900 "/>
                </div>
                <div className="flex flex-col  items-center">
                    <label>Telephone:</label>
                    <input type="tel" name="telephone" onChange={confirmClient} className="border border-indigo-900"/>
                </div>
                <div className="flex flex-col  items-center">
                    <label>E-mail:</label>
                    <input type="email" name="email" onChange={confirmClient} className="border border-indigo-900"/>
                </div>
                <div className="flex flex-col  items-center mb-10">
                    <label>E-mail:</label>
                    <input type="email" name="email" onChange={confirmClient} className="border border-indigo-900"/>
                </div>
                <div className="flex flex-col  items-center" >
                    <h3 className="text-xl">Reingresa tus datos para corroborar que este todo bien y puedas recibir tu pedido en los próximos 7 días hábiles.</h3>
                </div>
                <div className="flex flex-col  items-center mt-10">
                    <label>Name:</label>
                    <input type="text" onChange={confirmClient} name="name" className="border border-indigo-900 "/>
                </div>
                <div className="flex flex-col  items-center" >
                    <label>Adress:</label>
                    <input type="text" onChange={confirmClient} name="adress" className="border border-indigo-900 "/>
                </div>
                <div className="flex flex-col  items-center">
                    <label>Telephone:</label>
                    <input type="tel" name="telephone" onChange={confirmClient} className="border border-indigo-900"/>
                </div>
                <div className="flex flex-col  items-center">
                    <label>E-mail:</label>
                    <input type="email" name="email" onChange={confirmClient} className="border border-indigo-900"/>
                </div>
                <div className="flex flex-col  items-center mb-10">
                    <label>E-mail:</label>
                    <input type="email" name="email" onChange={confirmClient} className="border border-indigo-900"/>
                </div>
            </form>
        </div>
    )
}