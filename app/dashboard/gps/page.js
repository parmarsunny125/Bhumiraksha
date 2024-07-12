'use client'
// pages/LocationInfo.js
// pages/LocationInfo.js

import React, { Suspense, useState } from 'react'
import NavBar from '@/components/NavBar'
import { useRouter } from 'next/navigation'
import { useSearchParams } from 'next/navigation'
import { useCallback } from 'react'

const LocationInfo = () => {
    const [showModal, setShowModal] = useState(false)
    const [locationData, setLocationData] = useState(null)
    const [latitude, setLatitude] = useState('')
    const [longitude, setLongitude] = useState('')
    const [error, setError] = useState('')
    const API_endpoint = 'https://api.opencagedata.com/geocode/v1/json'
    const API_KEY = 'eca3366723164bfa85e84bebb9ade989'

    const getLocation = () => {}
    const router = useRouter()

    const handleNotNowClick = () => {
        setShowModal(true)
    }

    const handleCloseModal = () => {
        setShowModal(false)
    }

    const handleContinueWithoutLocation = () => {
        // Handle continue without location logic here
        const params = new URLSearchParams(searchParams)
        router.push('/dashboard/soilRec' + '?' + params.toString())
    }

    const handleEnableClick = async () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                position => {
                    setLatitude(position.coords.latitude)
                    setLongitude(position.coords.longitude)
                    setError(null)
                },
                error => {
                    setError(error.message)
                    setLatitude(null)
                    setLongitude(null)
                }
            )
        } else {
            setError('Geolocation is not supported by this browser.')
        }

        console.log('Latitude:', latitude)
        console.log('Longitude:', longitude)

        let query = `${latitude},${longitude}`
        let apiURL = `${API_endpoint}?key=${API_KEY}&q=${query}&pretty=1`
        try {
            const response = await fetch(apiURL)
            const data = await response.json()
            console.log(data)
            setLocationData(data.results[0].components.city_district)
        } catch (error) {
            console.error('Error fetching location data:', error)
        }

        // try {
        //     const response = await fetch('your_api_endpoint_here');
        //     if (response.ok) {
        //         const data = await response.json();
        //         setLocationData(data);
        //     } else {
        //         throw new Error('Failed to fetch location data');
        //     }
        // } catch (error) {
        //     console.error('Error fetching location data:', error);
        // }
    }

    const searchParams = useSearchParams()
    console.log(searchParams.forEach((value, name) => console.log(name, value)))
    const createQueryString = useCallback(
        (name, value) => {
            const params = new URLSearchParams(searchParams)
            params.set(name, value)

            return params.toString()
        },
        [searchParams]
    )

    return (
        <div className='flex flex-col items-center justify-center h-screen w-screen bg-green-200'>
            <NavBar />
            <div className='flex flex-col items-center justify-center flex-grow'>
                {/* Location Icon */}
                <img
                    src='/icons/gps.png'
                    alt='Location Icon'
                    className='h-48 w-48 mb-8'
                />
                {/* Location Access Text */}
                <p className='text-lg text-center text-green-900 mb-2'>Let </p>
                <p className='text-lg font-semibold text-center text-green-900 mb-2'>
                    BhumiRaksha{' '}
                </p>
                <p className='text-lg text-center text-green-900 mb-12'>
                    access your location ?
                </p>
                {/* Buttons */}
                <div className='flex justify-center space-x-8'>
                    <button
                        onClick={handleEnableClick}
                        className='bg-green-500 hover:bg-green-600 text-white py-2 px-8 rounded'
                    >
                        Enable
                    </button>
                    <button
                        onClick={handleNotNowClick}
                        className='bg-brown-700  hover:bg-brown-800 text-white py-2 px-8 rounded'
                    >
                        Not Now
                    </button>
                </div>
            </div>

            {/* Display location data if available */}
            {locationData && (
                <>
                    <div className='mt-0 w-full flex items-center justify-center'>
                        <h2 className='text-lg font-semibold mb-2'>
                            Location Data:
                        </h2>
                        <pre>{JSON.stringify(locationData)}</pre>
                    </div>
                    <button
                        onClick={() => {
                            router.push(
                                '/dashboard/soilRec' +
                                    '?' +
                                    createQueryString('location', locationData)
                            )
                        }}
                    >
                        Confirm
                    </button>
                </>
            )}

            {/* Modal */}
            {showModal && (
                <div className='fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50'>
                    <div className='bg-white p-8 rounded-md w-4/5'>
                        <p className='text-lg font-semibold mb-4 text-center'>
                            Accurate recommendations require location access
                        </p>
                        <div className='flex justify-center space-x-4'>
                            <button
                                className='bg-green-500 hover:bg-green-600 text-white py-2 px-8 rounded'
                                onClick={handleCloseModal}
                            >
                                Go Back
                            </button>
                            <button
                                className='bg-brown-700 hover:bg-brown-800 text-white py-2 px-8 rounded'
                                onClick={handleContinueWithoutLocation}
                            >
                                Continue
                            </button>
                        </div>
                    </div>
                </div>
            )}
            {/* {showModal && (
                <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
                    <div className="bg-white p-4 rounded-md">
                        <p className="text-lg font-semibold mb-2">Can't do accurate recommendation without Location</p>
                        <div className="flex justify-end space-x-4">
                            <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded" onClick={handleCloseModal}>
                                Go Back
                            </button>
                            <button className="bg-gray-500 hover:bg-gray-600 text-white py-2 px-4 rounded" onClick={handleContinueWithoutLocation}>
                                Continue without location
                            </button>
                        </div>
                    </div>
                </div>
            )} */}
        </div>
    )
}

function LocationInfoPage() {
    return (
        <Suspense fallback='Loading...'>
            <LocationInfo />
        </Suspense>
    )
}

export default LocationInfoPage

// import React from 'react';
// import NavBar from '@/components/NavBar';
// import { useState } from 'react';

// const LocationInfo = () => {
//     const [showModal, setShowModal] = useState(false);

//     const handleNotNowClick = () => {
//         setShowModal(true);
//     };

//     const handleCloseModal = () => {
//         setShowModal(false);
//     };

//     const handleContinueWithoutLocation = () => {
//         // Handle continue without location logic here
//     };

//     return (
//         <div>
//             <NavBar />
//             <div className="items-center justify-center min-h-screen py-2 px-3 mt-3">
//                 {/* Location Icon */}
//                 <img src="/icons/gps.png" alt="Location Icon" className="h-24 w-24 mx-auto mb-14 mt-14" width={1200}
//                     height={1200} />
//                 {/* Location Access Text */}
//                 <p className="text-lg text-center text-green-900 mb-16 mt-16">Let BhumiRaksha access your location </p>
//                 {/* Buttons */}
//                 <div className="flex justify-center space-x-4">
//                     <button className="text-center bg-green-500 hover:bg-green-600 text-white py-2 px-10 rounded-sm w-9/20">
//                         Enable
//                     </button>
//                     <button onClick={handleNotNowClick} className="text-center bg-gray-500 hover:bg-gray-600 text-white py-2 px-10 rounded-sm w-9/20">
//                         Not Now
//                     </button>
//                 </div>
//             </div>

//             {/* Modal */}
//             {showModal && (
//                 <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
//                     <div className="bg-white p-4 rounded-md">
//                         <p className="text-lg font-semibold mb-2">Can't do accurate recommendation without Location</p>
//                         <div className="flex justify-end space-x-4">
//                             <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded" onClick={handleCloseModal}>
//                                 Go Back
//                             </button>
//                             <button className="bg-gray-500 hover:bg-gray-600 text-white py-2 px-4 rounded" onClick={handleContinueWithoutLocation}>
//                                 Continue without location
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//             )
//             }
//         </div>
//     );
// };

// export default LocationInfo;

{
    /* <div className="flex flex-col items-center justify-center min-h-screen py-2">
    <Image
        src="/icons/logo.png"
        alt="logo"
        width={400}
        height={400}
    />
    <h1 className="text-3xl font-bold mt-6">Farmer's Best Friend</h1>
</div> */
}
