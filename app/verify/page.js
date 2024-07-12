'use client'
import { useRouter } from 'next/navigation'
import React from 'react'
import {
    InputOTP,
    InputOTPGroup,
    InputOTPSeparator,
    InputOTPSlot
} from '@/components/ui/input-otp'

function Verify() {
    const router = useRouter()
    const handleNavigation = () => {
        router.push('/dashboard')
    }
    return (
        <div className='flex flex-col items-center justify-center min-h-screen py-4 px-2 bg-green-100'>
            <img src='/icons/login1.png' className='w-27 h-27 mb-16' />
            <h1 className='text-3xl font-bold mb-4 text-green-900'>
                Enter OTP
            </h1>
            <div className='flex flex-col items-center space-y-4'>
                <InputOTP maxLength={6}>
                    <InputOTPGroup>
                        <InputOTPSlot index={0} />
                        <InputOTPSlot index={1} />
                        <InputOTPSlot index={2} />
                    </InputOTPGroup>
                    <InputOTPSeparator />
                    <InputOTPGroup>
                        <InputOTPSlot index={3} />
                        <InputOTPSlot index={4} />
                        <InputOTPSlot index={5} />
                    </InputOTPGroup>
                </InputOTP>

                <button
                    onClick={handleNavigation}
                    className='bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600'
                >
                    Verify
                </button>
                <p className='text-sm text-green-500 hover:underline cursor-pointer'>
                    {' '}
                    Resend{' '}
                </p>
            </div>
        </div>
    )
}

export default Verify
