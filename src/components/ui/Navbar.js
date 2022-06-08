import { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../auth/authContext';
import { types } from '../../types/types';


export const Navbar = () => {


    const navigate = useNavigate()

    const { user ,authDispatch } =useContext(AuthContext);

    const handleLogout = () => {
        localStorage.removeItem('token')
        localStorage.removeItem('user')
        const action = {
            type: types.logout
        }

        authDispatch(action)
        navigate('/login',{
            replace : true
        })

    }

    /* const kickUser = () => {
        localStorage.removeItem('token')
        localStorage.removeItem('nombre')
        alert("I'am sorry , but don't try to hack me again")
        window.location = '/login'
    } */

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-3">
            
            <Link 
                className="navbar-brand" 
                to="/"
            >
                Asociaciones
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink 
                        className="nav-item nav-link" 
                        to="/marvel"
                    >
                        Marvel
                    </NavLink>

                    <NavLink 
                        className="nav-item nav-link" 
                        to="/dc"
                    >
                        DC
                    </NavLink>
                    
                    <NavLink 
                        className="nav-item nav-link" 
                        to="/search"
                    >
                        Search
                    </NavLink>
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto">
                    <span className="nav-item nav-link text-info ">
                        
                        {user.name.toUpperCase()}

                        {/* { 
                                localStorage.getItem('token') 
                            ? 
                                localStorage.getItem('nombre').toUpperCase()
                            :
                            
                                console.log('You are not logged in')
                        } */}
                    </span>
                    <button 
                        className="nav-item nav-link btn"
                        onClick={ handleLogout }
                    >
                        Logout
                    </button>
                </ul>
            </div>
        </nav>
    )
}
