import { useState } from "react";

//Lo que hace este custom hook es leer el valor de un campo cuando cambia
//Establecer un nuevo estado con la funcion handleInputChange
//Resetear el formulario
//Poner value={name} en el input
//Poner onChange={handleInputChange} en el input

const useForm = ( initialState = {} ) => {

    const [values, setValues] = useState(initialState);

    const reset = () =>{
        setValues(initialState);
    }
    
    const handleInputChange = (e) => {
        console.log('handleInputChange called');
        setValues({
            ...values,
            [e.target.name]: e.target.value
        });
    };

    return [values, handleInputChange,reset];
}

export default useForm