import {
    createContext, useContext, useState
} from "react";
import axios from "axios"
import { useNavigate } from "react-router-dom";
import { getToken } from "../utils/auth"

const dataContext = createContext()
export function DataContextProvider({ children }) {
    const token = JSON.parse(getToken())
    const [dataList, setDataList] = useState([])
    const navigate = useNavigate();

    const handleGetData = async () => {
        try {
            const response = await axios.get("http://94.74.86.174:8080/api/checklist",
                {
                    headers: { "Authorization": `Bearer ${token}` }
                })
            if (response) {
                setDataList(response.data.data)
            }
        } catch (error) {
            console.log(error);
        }
    }

    const handleDeleteChecklist = async (id) => {
        try {
            const response = await axios.delete(`http://94.74.86.174:8080/api/checklist/${id}`,
                {
                    headers: { "Authorization": `Bearer ${token}` }
                })
            if (response) {
                console.log(response);
            }
        } catch (error) {
            console.log(error);
        }
    }

    const handleAddData = async () => {
        try {
            const response = await axios.post(`http://94.74.86.174:8080/api/checklist/${id}`,
                {
                    headers: { "Authorization": `Bearer ${token}` }
                })
            if (response) {
                console.log(response);
            }
        } catch (error) {
            console.log(error);
        }
    }

    const value = {
        handleGetData,
        dataList,
        handleDeleteChecklist,
        handleAddData
    }
    return (
        <dataContext.Provider value={value}>{children}</dataContext.Provider>
    )
}

export const useData = () => useContext(dataContext)