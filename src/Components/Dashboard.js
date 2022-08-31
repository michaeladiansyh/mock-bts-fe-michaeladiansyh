import React, { useEffect } from 'react'
import { useData } from "../Context/DataContext"
import { getToken } from "../utils/auth"

const Dashboard = () => {
    const { handleGetData, dataList, handleDeleteChecklist } = useData()
    useEffect(() => {
        handleGetData()
    }, [])
    return (
        <div className='w-1/2 mx-auto grid grid-cols-2 gap-60'>
            <div className='flex flex-col items-center'>
                <div>
                    <h1>Your Checklist</h1>
                </div>
                <div>
                    {
                        dataList.map((item, index) => (
                            <div key={index} className="space-x-2 space-y-2">
                                <input value={item.name} type="checkbox" />
                                <span className='pr-5'>{item.name}</span>
                                <button className='bg-gray-500 px-3' onClick={() => handleDeleteChecklist(item.id)}>Delete</button>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className='flex flex-col items-center'>
                <div>
                    <h1>Create New List</h1>
                </div>
                <div className='space-y-5'>
                    <form>
                        <input className='border-2 w-full mt-2' placeholder='List Name' />
                        <button className='bg-gray-500 px-3 w-full'>Create</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Dashboard