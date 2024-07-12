'use client'
import React from 'react'
import { useRouter } from 'next/navigation'
import Verify from '../verify/page'

function Login() {
    const router = useRouter()
    const handleNavigation = () => {
        router.push('verify')
    }
    return (
        <div className='flex flex-col items-center justify-center min-h-screen py-4 px-2 bg-green-100'>
            <img src='/icons/login1.png' className='w-27 h-27 mb-16' />
            <h1 className='text-3xl font-bold mb-8 text-green-900'>Login!</h1>
            <div className='flex flex-col items-center space-y-4'>
                <input
                    type='tel'
                    placeholder='Enter your phone number'
                    className='border-2 border-green-500 rounded-lg px-4 py-2 text-green-900 placeholder-green-500 focus:outline-none focus:ring-2 focus:ring-green-600 w-full max-w-md'
                />
                <button
                    onClick={handleNavigation}
                    className='bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600'
                >
                    Login
                </button>
                <p className='text-sm text-green-500 hover:underline cursor-pointer'>
                    {' '}
                    Continue without signing in
                </p>
            </div>
        </div>
    )
}

export default Login
