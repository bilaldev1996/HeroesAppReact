import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../auth/authContext";
import useForm from "../../hooks/useForm";
import { types } from "../../types/types";

const LoginScreen = () => {
    const navigate = useNavigate();


    const { authDispatch } =useContext(AuthContext);

    const lastPath = localStorage.getItem("location") || "/marvel";



    const [values, handleInputChange ] = useForm({
        nombre: "",
        correo: "",
        password: ""
    });


    const { nombre,correo,password } = values;
    
    //Hacer peticion a una para autenticar usuario
    const url = 'https://rest-serverb.herokuapp.com/api/auth/login';


    const handleLogin = async(e) => {
        e.preventDefault();

        //Validar que los campos no esten vacios
        if(nombre.trim() === "" || correo.trim() === "" || password.trim() === ""){
            alert("All fields are required");
            return;
        }

        //Hacer peticion
        const peticion = await fetch(url, {
            method: 'POST',
            body: JSON.stringify({
                correo,
                password
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const respuesta = await peticion.json();

        const { token  } = respuesta

        if(!token){
            alert("Invalid credentials");
            return;
        }

        const action = {
            type: types.login,
            payload: {
                token,
                name: nombre
            }
        }

        //Dispatch para actualizar el estado
        authDispatch(action);

        navigate(`${lastPath}`,{
            replace: true
        });
    }

    useEffect(() => {
        if(localStorage.getItem('token')){
            navigate('/marvel',{
                replace: true
            });
        }
    }, [navigate])


    return (
        <div className="container mt-5">
            <h1>LoginScreen</h1>
            <hr />
            <form className="form-group" onSubmit={handleLogin}>
                <input
                    type="text"
                    name="nombre"
                    className="form-control w-25"
                    placeholder="Nombre"
                    autoComplete="off"
                    onChange={handleInputChange}
                    value={nombre}
                />
                <input
                    type="email"
                    name="correo"
                    className="form-control w-25 my-2"
                    placeholder="Email Address"
                    autoComplete="off"
                    onChange={handleInputChange}
                    value={correo}
                />
                <input
                    type="password"
                    name="password"
                    className="form-control w-25 my-2"
                    placeholder="*******"
                    autoComplete="off"
                    onChange={handleInputChange}
                    value={password}
                />
                <button className="btn btn-danger mt-3 w-25" type="submit">Login</button>
            </form>
        </div>
    );
};

export default LoginScreen;
