'use client'

// pages/dashboard.js

import { useRouter } from 'next/navigation'
import React from 'react'
import NavBar from '@/components/NavBar'
import { BsGraphUp, BsCloudSun, BsGraphDown } from 'react-icons/bs'
import { IoMdLeaf } from 'react-icons/io'

export default function Dashboard() {
    const router = useRouter()
    return (
        <div className='flex-col h-screen pt-20 '>
            <NavBar />
            {/* Carousel section */}
            <div className='flex flex-col h-1/4 items-center justify-center px-2'>
                <p className='text-2xl pb-2 font-bold text-brown-900'>
                    Welcome to BhumiRaksha!{' '}
                </p>
                <p className='text-sm text-center'>
                    Explore the various features of our application to get the
                    best out of your farming experience.
                </p>
            </div>
            {/* <div className='w-full h-full bg-gray-200 flex items-center justify-center'>
                    <h2 className='text-3xl text-gray-600'>Carousel</h2>
                </div> */}

            {/* Buttons section */}
            <div className='flex-grow flex flex-col justify-center items-center bg-white p-3'>
                <div className='grid grid-cols-2 gap-6'>
                    <button
                        onClick={() => router.push('/dashboard/graph')}
                        className='bg-greens-300 hover:bg-greens-200 text-white font-bold pt-1 pb-1 rounded-md flex gap-3 flex-col items-center justify-center'
                    >
                        <div className='h-12 w-16 flex items-center justify-center'>
                            <BsGraphUp size={40} color='white' />
                        </div>
                        <div className='h-8 flex items-center justify-center'>
                            <span className='text-md text-center'>
                                Check Current Market Trends
                            </span>
                        </div>
                    </button>
                    <button
                        onClick={() => router.push('/dashboard/soil')}
                        className='bg-yellows-300 hover:bg-yellows-200 text-black font-bold py-12 rounded-lg flex gap-3 flex-col items-center justify-center'
                    >
                        <div className='h-16 w-16 flex items-center justify-center'>
                            <BsCloudSun size={40} color='black' />
                        </div>
                        <div className='h-8 flex items-center justify-center'>
                            <span className='text-md text-center'>
                                Soil, Weather Based Recommendation
                            </span>
                        </div>
                    </button>
                    <button
                        onClick={() => router.push('/dashboard/market')}
                        className='bg-yellows-300 hover:bg-yellows-200 text-black font-bold py-12 rounded-lg flex flex-col items-center justify-center'
                    >
                        <div className='h-12 w-16 flex items-center justify-center'>
                            <BsGraphDown size={40} color='black' />
                        </div>
                        <div className='h-12 flex items-center justify-center'>
                            <span className='text-md text-center'>
                                Trend Based Crop Recommendation
                            </span>
                        </div>
                    </button>
                    <button
                        onClick={() => router.push('/dashboard/another-page')}
                        className='bg-greens-300 hover:bg-greens-200 text-white font-bold py-12 rounded-lg flex flex-col items-center justify-center'
                    >
                        <div className='h-12 w-16 flex items-center justify-center pb-2'>
                            <IoMdLeaf size={40} color='white' />
                        </div>
                        <div className='h-8 flex items-center justify-center'>
                            <span className='text-md text-center'>
                                Crop Disease Detection
                            </span>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    )
}

// import { useRouter } from "next/navigation";
// import React from 'react'
// import Image from 'next/image'
// import NavBar from '@/components/NavBar';
// import Link from 'next/link';

// export default function Dashboard() {
//     const router = useRouter()
//     return (
//         <div className="flex flex-col h-screen">
//             <NavBar />
//             {/* Carousel section */}
//             <div className="flex-shrink-0 h-1/3">
//                 {/* Add your carousel component here */}
//                 <div className="w-full h-full bg-gray-200 flex items-center justify-center">
//                     <h2 className="text-3xl text-gray-600">Carousel</h2>
//                 </div>
//             </div>

//             {/* Buttons section */}
//             <div className="flex-grow flex flex-col justify-center items-center bg-gray-100 pl-3 pr-3 pt-3 pb-3">
//                 <div className="flex flex-col space-y-4">
//                     <button onClick={() => router.push('/dashboard/graph')} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg">
//                         Check Current Market Trends
//                     </button>
//                     <button onClick={() => router.push('/dashboard/soil')} className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg">
//                         Soil & Weather Based Crop Recommendation
//                     </button>
//                     <button onClick={() => router.push('/dashboard/market')} className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-6 rounded-lg">
//                         Crop Recommendation Based on Market Trends
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// };
