'use client'

import React, { use } from 'react'
import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { Suspense } from 'react'

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger
} from '@/components/ui/accordion'

const cropDescription = {
    Rice: 'Bajra is a type of millet that is grown in India. It is a staple food in many parts of the country.'
}

function SoilRec() {
    const [Results, setResults] = useState([])
    const searchParams = useSearchParams()
    console.log(searchParams.forEach((value, name) => console.log(name, value)))
    useEffect(() => {
        console.log(searchParams.get('soilType'))
        const do_fetch = async () => {
            let res = await fetch('/api/soil', {
                method: 'POST',
                body: JSON.stringify({
                    soilType: searchParams.get('soilType'),
                    pH: searchParams.get('pH'),
                    pH: searchParams.get('pH'),
                    N: searchParams.get('nitrogen'),
                    N: searchParams.get('nitrogen'),
                    P: searchParams.get('phosphorus'),
                    P: searchParams.get('phosphorus'),
                    K: searchParams.get('potassium'),
                    K: searchParams.get('potassium'),
                    Ca: searchParams.get('calcium'),
                    Ca: searchParams.get('calcium'),
                    Mg: searchParams.get('magnesium'),
                    Mg: searchParams.get('magnesium'),
                    S: searchParams.get('sulphur'),
                    S: searchParams.get('sulphur'),
                    loc: searchParams.get('location')
                })
            }).then(res => res.json())
            console.log(res)
            setResults(res.soilResults)
        }
        do_fetch()
    }, [])
    return (
        <>
            <div>Recommendation based on soil & location:</div>
            <button>refill the soil nutrient form</button>
            {Results.map((result, index) => (
                <Accordion key={index} type='single' collapsible>
                    <AccordionItem value={result.result}>
                        <AccordionTrigger>{result.result}</AccordionTrigger>
                        <AccordionContent>
                            {cropDescription[result.result]}
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            ))}
        </>
    )
}

function SoilRecPage() {
    return (
        <Suspense fallback='Loading...'>
            <SoilRec />
        </Suspense>
    )
}

export default SoilRecPage

// useEffect(() => {
//     const db_query = async () => {
//         const [columns, values] = await db.query(
//             'SELECT * FROM soil WHERE soil_type = ? AND ?<=phHigh AND ?>=phLow AND ?>=Nlow AND ?<=Nhigh AND ?>=Plow AND ?<=Phigh AND ?>=Klow AND ?<=Khigh AND ?>=Calow AND ?<=Cahigh AND ?>=Mglow AND ?<=Mghigh AND ?>=Slow AND ?<=Shigh',
//             [
//                 searchParams.get('soilType'),
//                 searchParams.get('pH'),
//                 searchParams.get('pH'),
//                 searchParams.get('nitrogen'),
//                 searchParams.get('nitrogen'),
//                 searchParams.get('phosphorus'),
//                 searchParams.get('phosphorus'),
//                 searchParams.get('potassium'),
//                 searchParams.get('potassium'),
//                 searchParams.get('calcium'),
//                 searchParams.get('calcium'),
//                 searchParams.get('magnesium'),
//                 searchParams.get('magnesium'),
//                 searchParams.get('sulphur'),
//                 searchParams.get('sulphur')
//             ]
//         )
//         console.log(columns, values)
//     }
//     db_query()
// }, [])
