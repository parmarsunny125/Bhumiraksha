'use client'
// pages/Soil.js

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import NavBar from '@/components/NavBar'
import Link from 'next/link'

const Soil = () => {
    const [soilType, setSoilType] = useState('')
    const [pH, setPH] = useState('')
    const [nitrogen, setNitrogen] = useState('')
    const [phosphorus, setPhosphorus] = useState('')
    const [potassium, setPotassium] = useState('')
    const [calcium, setCalcium] = useState('')
    const [magnesium, setMagnesium] = useState('')
    const [sulphur, setSulphur] = useState('')
    const [isFormValid, setIsFormValid] = useState(false)

    const router = useRouter()

    const validateForm = () => {
        const fields = [
            soilType,
            pH,
            nitrogen,
            phosphorus,
            potassium,
            calcium,
            magnesium,
            sulphur
        ]
        // Check if all fields are filled
        const isValid = fields.every(field => field.trim() !== '')
        setIsFormValid(isValid)
    }

    // Function to handle form submission
    // const handleSubmit = e => {
    //     e.preventDefault()
    //     // Validate form before proceeding
    //     validateForm()
    //     if (isFormValid) {
    //         // Navigate to next page if form is valid
    //         router.push({
    //             pathname: '/dashboard/gps',
    //             query: {
    //                 soilType,
    //                 pH,
    //                 nitrogen,
    //                 phosphorus,
    //                 potassium,
    //                 calcium,
    //                 magnesium,
    //                 sulphur
    //             }
    //         })
    //     }
    // }

    const handleSubmit = e => {
        e.preventDefault()
        // Validate form inputs
        // Navigate to next page if validation passes
        router.push('/dashboard/gps')
    }

    return (
        <div className='pt-16'>
            <NavBar />
            <div className='p-4 bg-green-200 min-h-screen'>
                <h1 className='text-2xl font-bold mb-4 text-brown-900'>
                    Enter Soil Specific Details
                </h1>
                <form onSubmit={handleSubmit}>
                    {/* Soil Type Dropdown */}
                    <div className='mb-4'>
                        <label
                            htmlFor='soilType'
                            className='block font-semibold mb-1 text-brown-900'
                        >
                            Soil Type
                        </label>
                        <select
                            id='soilType'
                            className='px-4 py-2 rounded border border-brown-900 w-full md:w-1/2'
                            value={soilType}
                            onChange={e => setSoilType(e.target.value)}
                        >
                            <option value=''>Select Soil Type</option>
                            <option value='loamy'>Loamy</option>
                            <option value='sandy'>Sandy</option>
                            <option value='clayey'>Clayey</option>
                            {/* Add more options as needed */}
                        </select>
                    </div>
                    {/* pH Value Input */}
                    <div className='mb-4'>
                        <label
                            htmlFor='pH'
                            className='block font-semibold mb-1 text-brown-900'
                        >
                            pH Value
                        </label>
                        <input
                            id='pH'
                            type='number'
                            min='1'
                            max='14'
                            step='0.1'
                            className='px-4 py-2 rounded border border-brown-900 w-full'
                            value={pH}
                            onChange={e => setPH(e.target.value)}
                        />
                    </div>
                    {/* Nitrogen, Phosphorus, Potassium, Calcium, Magnesium, Sulfur Inputs */}
                    <div className='mb-4'>
                        <label
                            htmlFor='nitrogen'
                            className='block font-semibold mb-1 text-brown-900'
                        >
                            Nitrogen (%)
                        </label>
                        <input
                            id='nitrogen'
                            type='number'
                            min='1'
                            max='100'
                            step='0.1'
                            className='px-4 py-2 rounded border border-brown-900 w-full'
                            value={nitrogen}
                            onChange={e => setNitrogen(e.target.value)}
                        />
                    </div>
                    <div className='mb-4'>
                        <label
                            htmlFor='phosphorus'
                            className='block font-semibold mb-1 text-brown-900'
                        >
                            Phosphorus (%)
                        </label>
                        <input
                            id='phosphorus'
                            type='number'
                            min='1'
                            max='100'
                            step='0.1'
                            className='px-4 py-2 rounded border border-brown-900 w-full'
                            value={phosphorus}
                            onChange={e => setPhosphorus(e.target.value)}
                        />
                    </div>
                    <div className='mb-4'>
                        <label
                            htmlFor='potassium'
                            className='block font-semibold mb-1 text-brown-900'
                        >
                            Potassium (%)
                        </label>
                        <input
                            id='potassium'
                            type='number'
                            min='1'
                            max='100'
                            step='0.1'
                            className='px-4 py-2 rounded border border-brown-900 w-full'
                            value={potassium}
                            onChange={e => setPotassium(e.target.value)}
                        />
                    </div>
                    <div className='mb-4'>
                        <label
                            htmlFor='calcium'
                            className='block font-semibold mb-1 text-brown-900'
                        >
                            Calcium (%)
                        </label>
                        <input
                            id='calcium'
                            type='number'
                            min='1'
                            max='100'
                            step='0.1'
                            className='px-4 py-2 rounded border border-brown-900 w-full'
                            value={calcium}
                            onChange={e => setCalcium(e.target.value)}
                        />
                    </div>
                    <div className='mb-4'>
                        <label
                            htmlFor='magnesium'
                            className='block font-semibold mb-1 text-brown-900'
                        >
                            Magnesium (%)
                        </label>
                        <input
                            id='magnesium'
                            type='number'
                            min='1'
                            max='100'
                            step='0.1'
                            className='px-4 py-2 rounded border border-brown-900 w-full'
                            value={magnesium}
                            onChange={e => setMagnesium(e.target.value)}
                        />
                    </div>
                    <div className='mb-4'>
                        <label
                            htmlFor='sulphur'
                            className='block font-semibold mb-1 text-brown-900'
                        >
                            Sulphur (%)
                        </label>
                        <input
                            id='sulphur'
                            type='number'
                            min='1'
                            max='100'
                            step='0.1'
                            className='px-4 py-2 rounded border border-brown-900 w-full'
                            value={sulphur}
                            onChange={e => setSulphur(e.target.value)}
                        />
                    </div>
                    <Link
                        href={{
                            pathname: '/dashboard/gps',
                            query: {
                                soilType,
                                pH,
                                nitrogen,
                                phosphorus,
                                potassium,
                                calcium,
                                magnesium,
                                sulphur
                            }
                        }}
                    >
                        <button
                            type='submit'
                            className='bg-brown-900 border border-brown-900 hover:bg-brown-700 hover:border-brown-700 text-white py-2 px-4 rounded'
                        >
                            Next
                        </button>
                        {/*<button
                            type='submit'
                            className={`bg-brown-900 border border-brown-900 hover:bg-brown-700 hover:border-brown-700 text-white py-2 px-4 rounded ${isFormValid ? '' : 'cursor-not-allowed opacity-50'}`}
                            disabled={!isFormValid}
                        >
                            Next
                        </button>*/}
                    </Link>
                </form>
            </div>
        </div>
    )
}

export default Soil

// 'use client'
// // pages/Soil.js

// import React, { useState } from 'react';
// import { useRouter } from 'next/navigation';

// const Soil = () => {
//     const [soilType, setSoilType] = useState('');
//     const [pH, setPH] = useState('');
//     const [nitrogen, setNitrogen] = useState('');
//     const [phosphorus, setPhosphorus] = useState('');
//     const [potassium, setPotassium] = useState('');
//     const [calcium, setCalcium] = useState('');
//     const [magnesium, setMagnesium] = useState('');
//     const [sulfur, setSulfur] = useState('');

//     const router = useRouter();

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         // Validate form inputs
//         // Navigate to next page if validation passes
//         router.push('/dashboard/gps');
//     };

//     return (
//         <div className="p-4">
//             <h1 className="text-2xl font-bold mb-4">Enter Soil Specific Details</h1>
//             <form onSubmit={handleSubmit}>
//                 {/* Soil Type Dropdown */}
//                 <div className="mb-4">
//                     <label htmlFor="soilType" className="block font-semibold mb-1">Soil Type</label>
//                     <select
//                         id="soilType"
//                         className="px-4 py-2 rounded border border-gray-300 w-full"
//                         value={soilType}
//                         onChange={(e) => setSoilType(e.target.value)}
//                     >
//                         <option value="">Select Soil Type</option>
//                         <option value="loamy">Loamy</option>
//                         <option value="sandy">Sandy</option>
//                         <option value="clayey">Clayey</option>
//                         {/* Add more options as needed */}
//                     </select>
//                 </div>
//                 {/* pH Value Input */}
//                 <div className="mb-4">
//                     <label htmlFor="pH" className="block font-semibold mb-1">pH Value (0-14)</label>
//                     <input
//                         id="pH"
//                         type="number"
//                         min="0"
//                         max="14"
//                         step="0.1"
//                         className="px-4 py-2 rounded border border-gray-300 w-full"
//                         value={pH}
//                         onChange={(e) => setPH(e.target.value)}
//                     />
//                 </div>
//                 {/* Nitrogen, Phosphorus, Potassium, Calcium, Magnesium, Sulfur Inputs */}
//                 <div className="mb-4">
//                     <label htmlFor="nitrogen" className="block font-semibold mb-1">Nitrogen (%)</label>
//                     <input
//                         id="nitrogen"
//                         type="number"
//                         min="1"
//                         max="100"
//                         className="px-4 py-2 rounded border border-gray-300 w-full"
//                         value={nitrogen}
//                         onChange={(e) => setNitrogen(e.target.value)}
//                     />
//                 </div>
//                 <div className="mb-4">
//                     <label htmlFor="phosphorus" className="block font-semibold mb-1">Phosphorus(%)</label>
//                     <input
//                         id="phosphorus"
//                         type="number"
//                         min="1"
//                         max="100"
//                         className="px-4 py-2 rounded border border-gray-300 w-full"
//                         value={phosphorus}
//                         onChange={(e) => setPhosphorus(e.target.value)}
//                     />
//                 </div>
//                 <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
//                     Next
//                 </button>
//             </form>
//         </div>
//     );
// };

// export default Soil;
