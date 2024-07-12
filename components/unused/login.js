'use client'
import React, { useState, useEffect } from 'react'
import {
	getAuth,
	RecaptchaVerifier,
	signInWithPhoneNumber,
} from 'firebase/auth'
import app from '../../lib/config'
import { Router } from 'next/navigation'

export default function Login() {
	const [phoneNumber, setPhoneNumber] = useState('')
	const [otp, setOtp] = useState('')
	const [confirmationResult, setConfirmationResult] = useState(null)
	const [otpSent, setOtpSent] = useState(false)

	const auth = getAuth(app)
	const router = useRouter()

	useEffect(() => {
		window.recaptchaVerifier = new RecaptchaVerifier(
			auth,
			'recaptcha-container',
			{
				size: 'normal',
				callback: (response) => {
					console.log(response)
				},
				'expired-callback': () => {
					console.log('expired')
				},
			}
		)
	}, [auth])

	const handlePhoneNumberChange = (e) => {
		setPhoneNumber(e.target.value)
	}

	const handleOtpChange = (e) => {
		setOtp(e.target.value)
	}

	const handleSendOtp = async () => {
		try {
			const formattedPhoneNumber = `+91${phoneNumber.replace(/\D/g, '')}`
			const confirmation = await signInWithPhoneNumber(
				auth,
				formattedPhoneNumber,
				window.recaptchaVerifier
			)
			setConfirmationResult(confirmation)
			setOtpSent(true)
			setPhoneNumber('')
			alert('OTP sent successfully')
		} catch (error) {
			console.error(error)
			alert('Failed to send OTP')
		}
	}

	const handleOtpSubmit = async () => {
		try {
			await confirmationResult.confirm(otp)
			setOtp('')
			alert('OTP verified successfully')
			router.push('/dashboard')
		} catch (error) {
			console.error(error)
			alert('Failed to verify OTP')
		}
	}

	return (
		<div>
			{!otpSent ? <div id="recaptcha-container"></div> : null}
			<input
				type="tel"
				value={phoneNumber}
				onChange={handlePhoneNumberChange}
				placeholder="Enter your phone number"
				className="border-2 border-green-500 rounded-lg px-4 py-2 text-green-900 placeholder-green-500 focus:outline-none focus:ring-2 focus:ring-green-600 w-full max-w-md"
			/>
			<input
				type="text"
				value={otp}
				onChange={handleOtpChange}
				placeholder="Enter 6-digit OTP"
				maxLength={6}
				className="border-2 border-green-500 rounded-lg px-4 py-2 text-green-900 placeholder-green-500 focus:outline-none focus:ring-2 focus:ring-green-600 w-full max-w-md"
			/>
			<button
				onClick={!otpSent ? handleSendOtp : handleOtpSubmit}
				className={`bg-${
					otpSent ? 'green' : 'blue'
				}-500 text-white p-2 rounded-md m-2`}
				style={{ backgroundColor: otpSent ? 'green' : 'blue' }}
			>
				{!otpSent ? 'Submit OTP' : 'Send OTP'}
			</button>
		</div>
	)
}
