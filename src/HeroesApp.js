import { useEffect, useReducer } from 'react'
import { AuthContext } from './auth/authContext'
import { authReducer } from './auth/authReducer';
import AppRouter from './routers/AppRouter'

const init = () => {
    return JSON.parse(localStorage.getItem('user')) || {logged: false}
}


const HeroesApp = () => {

    const [user, authDispatch] = useReducer(authReducer, {},init);

    useEffect(() => {
        if(!user) return

        localStorage.setItem('user', JSON.stringify(user))
    }, [user])

    return (
        <AuthContext.Provider value={{
            user,
            authDispatch
        }} >
            <AppRouter />
        </AuthContext.Provider>
    )
}

export default HeroesApp;