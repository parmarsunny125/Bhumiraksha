'use client'
import Login from './login/page'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import app from '../lib/config'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import Dashboard from './dashboard/page'
// import { app } from "./config";
// import { useRouter } from "next/navigation";
// import { useEffect } from "react";
// import Image from "next/image";
// import {
//   InputOTP,
//   InputOTPGroup,
//   InputOTPSeparator,
//   InputOTPSlot,
// } from "@/components/ui/input-otp"

export default function Home() {
    const router = useRouter()
    // router.push('login')
    return (
        <>
            <Dashboard />

            {/* <button onClick={() => router.push('login')}>Login</button> */}
        </>
    )
}

/*
<div className="flex flex-col items-center justify-center min-h-screen py-4 px-2 bg-green-100">
      <img src="/icons/login1.png" className="w-27 h-27 mb-16" />
      <h1 className="text-3xl font-bold mb-4 text-green-900">Enter OTP</h1>
      <div className="flex flex-col items-center space-y-4">
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

          className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
        >
          Verify
        </button>
        <p className="text-sm text-green-500 hover:underline cursor-pointer"> Resend </p>
      </div>
    </div>
  */

/*
Login Page
<div className="flex flex-col items-center justify-center min-h-screen py-4 px-2 bg-green-100">
      <img src="/icons/login1.png" className="w-27 h-27 mb-16" />
      <h1 className="text-3xl font-bold mb-8 text-green-900">Login!</h1>
      <div className="flex flex-col items-center space-y-4">
        <input
          type="tel"
          placeholder="Enter your phone number"
          className="border-2 border-green-500 rounded-lg px-4 py-2 text-green-900 placeholder-green-500 focus:outline-none focus:ring-2 focus:ring-green-600 w-full max-w-md"
        />
        <button

          className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
        >
          Login
        </button>
        <p className="text-sm text-green-500 hover:underline cursor-pointer" > Continue without signing in</p>
      </div>
    </div>
*/

/*
Loading Page
<div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Image
        src="/icons/logo.png"
        alt="logo"
        width={400}
        height={400}
      />
      <h1 className="text-3xl font-bold mt-6">Farmer's Best Friend</h1>
    </div>
*/
