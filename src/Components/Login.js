import React from 'react'
import { useUserAuth } from "../Context/UserAuthContext"
const Login = () => {
    const { handleLogin, setUsername, setPassword } = useUserAuth()
    return (
        <div className='h-screen flex flex-col justify-center items-center'>
            <div className='w-1/4 p-5 bg-white rounded shadow-lg'>
                <h1 className='text-center text-2xl mb-10'>Login</h1>
                <form onSubmit={handleLogin} className='flex flex-col'>
                    <div className='mb-5'>
                        <label className='mr-5'>Username</label>
                        <input className='border-2 w-2/3' type="text" placeholder='Username' onChange={(e) => setUsername(e.target.value)}></input>
                    </div>
                    <div className='mb-5'>
                        <label className='mr-5'>Password</label>
                        <input className='border-2 w-2/3' type="password" placeholder='Password' onChange={(e) => setPassword(e.target.value)}></input>
                    </div>
                    <button type='submit' className='bg-slate-700 p-1'>Login</button>
                </form>
            </div >
        </div >
    )
}

export default Login