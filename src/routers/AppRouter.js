import React from 'react'
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom'
import LoginScreen from '../components/login/LoginScreen'
import DashboardRoutes from './DashboardRoutes'
import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute'

const AppRouter = () => {
    return (
        <Router>
            <Routes>
                {/* Solo mostramos el login a los usuarios no autenticados */}
                <Route path="/login" element={
                    <PublicRoute>
                        <LoginScreen />
                    </PublicRoute>
                } />

                {/* Si se introduce una ruta incorrecta lo llevamos a la pagina principal */}
                <Route path="/*" element={
                        <PrivateRoute>
                            <DashboardRoutes />
                        </PrivateRoute>
                    }
                />

                {/* <Route path="*" element={<DashboardRoutes />} /> */}

            </Routes>
        </Router>
    )
}

export default AppRouter
