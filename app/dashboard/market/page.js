'use client'
// pages/CropRecommendation.js

import React, { useState } from 'react'
import NavBar from '@/components/NavBar'
import { useRouter } from 'next/navigation'
// import recommend from '@/dashboard/market/recommend';

const CropRecommendation = () => {
    const [loading, setLoading] = useState(false)
    const router = useRouter()

    const handleRecommendation = async () => {
        setLoading(true)
        // Implement your algorithm to fetch crop recommendations here
        // For example, make an API call to a backend service
        // Once you get the recommendations, navigate to the result page
        router.push('/dashboard/trendRecommend')
    }

    return (
        <div className='flex flex-col items-center justify-center h-screen'>
            <NavBar />
            <div className='max-w-md p-6 space-y-6'>
                <h1 className='text-2xl font-bold mb-4 text-brown-800'>
                    Unlock Agricultural Potential
                </h1>
                <p className='mb-4 text-justify text-sm text-brown-800'>
                    Step into the future of farming with our Crop Recommendation
                    System. <br /> Harnessing the power of advanced algorithms
                    and predictive analytics, we delve into vast datasets of
                    market trends and historical prices. Our system carefully
                    analyzes this wealth of information to forecast the future
                    prices of various crops over the next 24 months. By
                    integrating the estimated growth periods of each crop, we
                    curate personalized recommendations tailored to your unique
                    needs. <br /> Take the first step towards agricultural
                    success by clicking the button below.&quot;
                </p>
                <button
                    onClick={handleRecommendation}
                    className={`bg-green-600 hover:bg-green-400 text-white py-3 px-6 items-center rounded ${loading ? 'opacity-50 text-brown-800 cursor-not-allowed' : ''}`}
                    disabled={loading}
                >
                    {loading ? 'Loading...' : 'Recommend'}
                </button>
            </div>
        </div>
    )
}

export default CropRecommendation
