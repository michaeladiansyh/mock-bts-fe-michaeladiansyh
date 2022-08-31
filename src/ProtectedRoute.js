import React from 'react'
import { Navigate, Outlet } from "react-router"

const ProtectedRoute = () => {
    const token = localStorage.getItem("USER")
    return token ? <Outlet /> : <Navigate to="/" />
}

export default ProtectedRoute