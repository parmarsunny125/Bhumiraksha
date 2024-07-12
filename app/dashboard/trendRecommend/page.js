'use client'
// pages / recommendation.js

import { useEffect, useState } from 'react'
import NavBar from '@/components/NavBar'
import LineGraph from '@/components/LineGraph'
import CropInfo from '@/components/CropInfo'
import { useRouter } from 'next/navigation'
import { BsGraphUp } from 'react-icons/bs'
// import { getCropRecommendation } from '@/api'; // Assuming you have an API function to fetch crop recommendations

const RecommendationPage = () => {
    const [loading, setLoading] = useState(true)
    const [cropRecommendations, setCropRecommendations] = useState([])
    const [cropRecommendations_3top, setCropRecommendations_3top] = useState([])
    const router = useRouter()
    const crops = [
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
    ]
    const metadata = {
        bajra: { time: 4 },
        banana: { time: 11 },
        brinjal: { time: 3 },
        cabbage: { time: 3 },
        cauliflower: { time: 3 },
        cucumber: { time: 2 },
        guar: { time: 5 },
        guava: { time: 4 },
        jowar: { time: 4 },
        lauki: { time: 3 },
        maize: { time: 3 },
        methi: { time: 2 },
        moong: { time: 3 },
        okra: { time: 3 },
        onion: { time: 4 },
        orange: { time: 15 },
        paddy: { time: 6 },
        peas: { time: 3 },
        pomegranate: { time: 12 },
        potato: { time: 4 },
        radish: { time: 2 },
        rice: { time: 6 },
        soy: { time: 4 },
        tur: { time: 6 },
        urad: { time: 3 },
        wheat: {
            // description: 'Wheat is a cereal grain. It is a staple food that is grown worldwide. Wheat is a grass widely cultivated for its seed, a cereal grain which is a worldwide staple food. The many species of wheat together make up the genus Triticum; the most widely grown is common wheat (T. aestivum).',
            time: 6
        }
    }
    const handleRecommendation = async () => {
        // setLoading(true);

        // Implement your algorithm to fetch crop recommendations here
        // For example, make an API call to a backend service
        // Once you get the recommendations, navigate to the result page
        router.push('/dashboard/recommend')
    }

    const label = [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec'
    ]
    useEffect(() => {
        // Fetch crop recommendations when component mounts
        const fetchCropRecommendations = async () => {
            try {
                setLoading(true)
                let d = new Date()
                let month = d.getMonth()
                const res = await Promise.all(
                    crops.map(async crop => {
                        let a = fetch('http://192.168.1.107:8000/predict', {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify({
                                crop: crop.toLowerCase(),
                                month: month
                            })
                        }).then(res => res.json())
                        return a
                    })
                )
                console.log(res)
                let best = []
                Object.keys(metadata).forEach(crop => {
                    var pred = res.filter(x => x.crop == crop.toLowerCase())[0]
                    var at_time = metadata[crop].time + 2
                    console.log(pred)
                    var at_pred = pred.predictions[parseInt(at_time)]
                    best.push({ crop: crop, predictions: at_pred })
                })
                best.sort((a, b) => b.predictions - a.predictions)
                let best_3top = best.slice(0, 3)
                let best_names = best_3top.map(x => x.crop.toLowerCase())
                let best_full = []
                res.map(x => {
                    if (best_names.includes(x.crop.toLowerCase())) {
                        best_full.push({
                            crop: x.crop,
                            predictions: x.predictions,
                            yield: best.filter(
                                y =>
                                    y.crop.toLowerCase() == x.crop.toLowerCase()
                            )[0].predictions
                        })
                    }
                })
                console.log(best_3top)
                console.log(best_names)
                console.log(best_full)
                setCropRecommendations_3top(best_full)
                setCropRecommendations(res)
                setLoading(false)
            } catch (error) {
                console.error('Error fetching crop recommendations:', error)
            }
        }
        fetchCropRecommendations()
    }, [])

    const handleBackClick = () => {
        router.push('/dashboard/compare') // Navigate back to home page
    }

    return (
        <div className='pt-16'>
            <NavBar />
            <div className='p-4'>
                {loading ? ( // Display loading indicator if loading is true
                    <div className='flex items-center justify-center h-screen'>
                        <div
                            className='spinner-border text-primary'
                            role='status'
                        >
                            <span className='visually-hidden'>Fetching...</span>
                        </div>
                    </div>
                ) : (
                    // Display content once loading is complete
                    <>
                        {/* Line graph component */}
                        <LineGraph
                            cropRecommendations={cropRecommendations_3top}
                        />
                        {/* Crop information for top 3 recommendations */}
                        {cropRecommendations_3top.map((crop, index) => (
                            <CropInfo
                                key={index}
                                crop={crop}
                                metadata={metadata}
                            />
                        ))}
                        <button
                            onClick={handleBackClick}
                            className='bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded mt-8 block mx-auto'
                        >
                            Compare Prices For Other Crops
                        </button>
                    </>
                )}
            </div>
        </div>
    )
}

export default RecommendationPage

// return (
//         <div className="pt-16">
//             <NavBar />
//             <div className="p-4">
//                 {/* <h1 className="text-2xl font-bold mb-4">Crop Recommendations</h1> */}
//                 <div className="mb-8">
//                     {/* Line graph component */}
//                     <LineGraph cropRecommendations={cropRecommendations_3top} />
//                 </div>
//                 <div>
//                     {/* Crop information for top 5 recommendations */}
//                     {cropRecommendations_3top.map((crop, index) => (
//                         <CropInfo key={index} crop={crop} />
//                     ))}
//                 </div>
//                 <button onClick={handleBackClick} className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded mt-8 block mx-auto">Compare Prices For Other Crops</button>
//             </div>
//         </div>
//     );
