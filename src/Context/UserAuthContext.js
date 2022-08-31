import {
    createContext, useContext, useState
} from "react";
import axios from "axios"
import { useNavigate } from "react-router-dom";
import { setUser } from "../utils/auth"

const userAuthContext = createContext()
export function UserAuthContextProvider({ children }) {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    const navigate = useNavigate();

    const handleLogin = async (event) => {
        event.preventDefault()
        try {
            const response = await axios.post("http://94.74.86.174:8080/api/login", {
                username: username,
                password: password
            })
            if (response) {
                setUser(response.data.data.token)
                navigate("/dashboard")
            }
        } catch (error) {
            console.log(error);
        }
    }

    const handleRegister = async (event) => {
        event.preventDefault()
        try {
            const response = await axios.post("http://94.74.86.174:8080/api/register", {
                email: email,
                username: username,
                password: password
            })
            if (response) {
                console.log(response);
                navigate("/")
            }
        } catch (error) {
            console.log(error);
        }
    }

    const value = {
        handleLogin,
        setUsername,
        setPassword,
        username,
        handleRegister,
        setEmail
    }
    return (
        <userAuthContext.Provider value={value}>{children}</userAuthContext.Provider>
    )
}

export const useUserAuth = () => useContext(userAuthContext)