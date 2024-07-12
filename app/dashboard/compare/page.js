'use client'
import NavBar from '@/components/NavBar'
import RecommendationPage from '@/components/recommend'
import { useRouter } from 'next/navigation'
// CropComparisonPage.js

import React, { useState, useEffect } from 'react'

const CropComparisonPage = () => {
    const router = useRouter()
    const [selectedCrops, setSelectedCrops] = useState([])
    const [shownCrops, setShownCrops] = useState([])
    const [searchInput, setSearchInput] = useState('')
    const [availableCrops, setAvailableCrops] = useState([
        'Bajra',
        'Banana',
        'Brinjal',
        'Cabbage',
        'Cauliflower',
        'Cucumber',
        'Guar',
        'Guava',
        'Jowar',
        'Lauki',
        'Maize',
        'Methi',
        'Moong',
        'Okra',
        'Onion',
        'Orange',
        'Paddy',
        'Peas',
        'Pomegranate',
        'Potato',
        'Radish',
        'Rice',
        'Soy',
        'Tur',
        'Urad',
        'Wheat'
    ])
    const [selectedIndex, setSelectedIndex] = useState(-1)
    const [submitted, setSubmitted] = useState(false)

    const handleCropAddition = crop => {
        if (selectedCrops.length < 3 && !selectedCrops.includes(crop)) {
            setSelectedCrops([...selectedCrops, crop])
            setSearchInput('') // Clear search input after adding crop
        }
    }

    const handleCropRemoval = cropToRemove => {
        setSelectedCrops(selectedCrops.filter(crop => crop !== cropToRemove))
    }

    const handleInputChange = e => {
        setSearchInput(e.target.value)
        setSelectedIndex(-1) // Reset selected index when input changes
    }

    const handleSearchSelect = crop => {
        handleCropAddition(crop)
    }

    const handleKeyDown = e => {
        if (e.key === 'ArrowDown') {
            e.preventDefault()
            setSelectedIndex(prevIndex =>
                prevIndex < filteredCrops.length - 1 ? prevIndex + 1 : prevIndex
            )
        } else if (e.key === 'ArrowUp') {
            e.preventDefault()
            setSelectedIndex(prevIndex =>
                prevIndex > 0 ? prevIndex - 1 : prevIndex
            )
        } else if (e.key === 'Enter' && selectedIndex !== -1) {
            handleSearchSelect(filteredCrops[selectedIndex])
        } else if (
            e.key === 'Enter' &&
            selectedIndex === -1 &&
            filteredCrops.length > 0
        ) {
            handleSearchSelect(filteredCrops[0]) // Add the first crop in the filtered list if no item is selected
        }
    }

    useEffect(() => {
        const handleKeyNavigation = e => {
            if (e.key === 'Escape') {
                setSearchInput('')
                setSelectedIndex(-1)
            }
        }

        document.addEventListener('keydown', handleKeyNavigation)
        return () => {
            document.removeEventListener('keydown', handleKeyNavigation)
        }
    }, [])

    const filteredCrops = availableCrops.filter(crop =>
        crop.toLowerCase().startsWith(searchInput.toLowerCase())
    )

    const submit = () => {
        // console.log(selectedCrops);
        setShownCrops(selectedCrops)
        setSubmitted(true)
        //router.refresh()
    }

    return (
        <div className='pt-20'>
            <NavBar />
            <div className='container mx-auto'>
                {/* Crop Selection */}
                <div className='mb-4 relative'>
                    <label htmlFor='cropInput'>
                        Add up to 3 crops to compare:
                    </label>
                    <div className='flex items-center pt-2'>
                        <input
                            type='text'
                            id='cropInput'
                            placeholder='Search for crops'
                            value={searchInput}
                            onChange={handleInputChange}
                            onKeyDown={handleKeyDown}
                            className='border border-brown-500 rounded px-3 py-2 w-full'
                        />
                        <button
                            onClick={submit}
                            className='bg-green-500 text-white font-semibold py-2 px-4 rounded'
                        >
                            Go!
                        </button>
                    </div>
                    {searchInput && (
                        <ul className='absolute top-full left-0 right-0 border border-gray-300 bg-white rounded-b shadow-lg'>
                            {filteredCrops.map((crop, index) => (
                                <li
                                    key={crop}
                                    onClick={() => handleSearchSelect(crop)}
                                    className={`px-4 py-2 cursor-pointer hover:bg-gray-100 ${index === selectedIndex ? 'bg-gray-100' : ''}`}
                                >
                                    {crop}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>

                {/* Selected Crops */}
                <div className='flex flex-wrap mb-4'>
                    {selectedCrops.map(crop => (
                        <div
                            key={crop}
                            className='bg-gray-200 rounded-full px-3 py-1 flex items-center mr-2 mb-2'
                        >
                            <span className='mr-2'>{crop}</span>
                            <button onClick={() => handleCropRemoval(crop)}>
                                &times;
                            </button>
                        </div>
                    ))}
                </div>
            </div>
            {submitted && <RecommendationPage crops={shownCrops} />}
        </div>
    )
}

export default CropComparisonPage

// CropComparisonPage.js

// import React, { useState } from 'react';

// const CropComparisonPage = () => {
//     const [selectedCrops, setSelectedCrops] = useState([]);
//     const [searchInput, setSearchInput] = useState('');
//     const [availableCrops, setAvailableCrops] = useState(['Wheat', 'Corn', 'Rice', 'Barley', 'Soybean']);

//     const handleCropAddition = (crop) => {
//         if (!selectedCrops.includes(crop)) {
//             setSelectedCrops([...selectedCrops, crop]);
//             setSearchInput(''); // Clear search input after adding crop
//         }
//     };

//     const handleCropRemoval = (cropToRemove) => {
//         setSelectedCrops(selectedCrops.filter(crop => crop !== cropToRemove));
//     };

//     const handleInputChange = (e) => {
//         setSearchInput(e.target.value);
//     };

//     const handleSearchKeyDown = (e) => {
//         if (e.key === 'Enter') {
//             handleCropAddition(searchInput);
//         }
//     };

//     const handleAddButtonClick = () => {
//         if (searchInput.trim()) {
//             handleCropAddition(searchInput);
//         }
//     };

//     return (
//         <div className="container mx-auto">
//             {/* Crop Selection */}
//             <div className="mb-4">
//                 <label htmlFor="cropInput">Search and add up to 3 crops:</label>
//                 <div className="flex items-center">
//                     <input
//                         type="text"
//                         id="cropInput"
//                         placeholder="Search for crops"
//                         value={searchInput}
//                         onChange={handleInputChange}
//                         onKeyDown={handleSearchKeyDown}
//                         className="border border-gray-300 rounded px-3 py-1 mr-2"
//                     />
//                     <button
//                         type="button"
//                         onClick={handleAddButtonClick}
//                         className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
//                     >
//                         Add
//                     </button>
//                 </div>
//             </div>

//             {/* Selected Crops */}
//             <div className="flex flex-wrap mb-4">
//                 {selectedCrops.map(crop => (
//                     <div key={crop} className="bg-gray-200 rounded-full px-3 py-1 flex items-center mr-2 mb-2">
//                         <span className="mr-2">{crop}</span>
//                         <button onClick={() => handleCropRemoval(crop)}>&times;</button>
//                     </div>
//                 ))}
//             </div>

//             {/* Available Crops List (for demonstration) */}
//             <div>
//                 <p className="font-bold">Available Crops:</p>
//                 <ul>
//                     {availableCrops.map(crop => (
//                         <li key={crop}>{crop}</li>
//                     ))}
//                 </ul>
//             </div>
//         </div>
//     );
// };

// export default CropComparisonPage;
