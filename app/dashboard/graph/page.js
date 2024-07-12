'use client'
// pages/HomePage.js

import React, { useEffect, useState } from 'react'
import NavBar from '@/components/NavBar'
import Filter from '@/components/Filter'
import Graph from '@/components/Graph'
import Description from '@/components/Description'
import { Average } from 'next/font/google'

const HomePage = () => {
    const [crop, setCrop] = useState('Wheat')
    const [data, setData] = useState({
        minValue: 0,
        maxValue: 0,
        meanValue: 0
    })
    const description = {
        bajra: `Bajra, a hardy crop, thrives in Maharashtra's semi-arid regions, requiring minimal water. Its growth cycle typically spans 3-4 months, making it a popular choice for farmers in drought-prone areas.`,
        banana: `Banana cultivation in Maharashtra benefits from the state's tropical climate. With a growth period of 9-12 months, bananas are a staple crop for many farmers, contributing to Maharashtra's agricultural diversity.`,
        brinjal: `Brinjal cultivation in Maharashtra is characterized by its adaptability to diverse soil conditions. With a growth cycle of 2-3 months, brinjal farming contributes significantly to the state's vegetable production.`,
        cabbage: `Cabbage cultivation in Maharashtra follows a 2-3 month growth pattern, thriving in the state's cool climate and fertile soils. Its high yield potential makes it a lucrative option for farmers in the region.`,
        cauliflower: `Cauliflower cultivation in Maharashtra is favored for its short growth cycle of 2-3 months. With proper irrigation and soil management, cauliflower farms contribute to the state's vegetable supply.`,
        cucumber: `Cucumber cultivation in Maharashtra benefits from the state's warm climate and ample sunlight. Its rapid growth cycle of 1-2 months makes it a profitable choice for farmers, especially in the summer months.`,
        guar: `Guar cultivation in Maharashtra is well-suited to the state's arid and semi-arid regions. With a growth period of 4-5 months, guar farming provides economic opportunities for farmers in drought-prone areas.`,
        guava: `Guava orchards flourish in Maharashtra's tropical climate, with trees bearing fruit within 2-4 years of planting. The state's favorable growing conditions contribute to guava's status as a prominent horticultural crop.`,
        jowar: `Jowar (Sorghum Millet) cultivation is integral to Maharashtra's agriculture, with its drought-resistant nature suiting the state's rain-fed farming regions. With a growth period of 3-4 months, jowar is a vital food crop for many farmers.`,
        lauki: `Lauki (Bottle Gourd) cultivation in Maharashtra follows a growth cycle of 2-3 months, benefiting from the state's warm climate and fertile soils. Its high nutritional value makes it a popular choice among consumers.`,
        maize: `Maize cultivation in Maharashtra thrives in the state's diverse agro-climatic zones. With a growth period of 2-3 months, maize farming plays a significant role in Maharashtra's food security and livestock feed supply.`,
        methi: `Methi (Fenugreek) cultivation in Maharashtra typically takes 1-2 months from sowing to harvest. Its quick growth cycle and high demand in local cuisine make it a profitable crop for farmers.`,
        moong: `Moong (Green Gram) cultivation in Maharashtra is favored for its short growth cycle of 2-3 months. With proper irrigation and soil management, moong farming contributes to the state's pulse production.`,
        okra: `Okra cultivation in Maharashtra benefits from the state's warm climate and fertile soils. With a growth period of 2-3 months, okra farming provides a steady income source for many farmers.`,
        onion: `Onion cultivation in Maharashtra follows a growth cycle of 3-4 months, with the state being one of the leading producers in the country. Its storage potential and high market demand make it a lucrative crop for farmers.`,
        orange: `Orange orchards thrive in Maharashtra's subtropical climate, with trees bearing fruit within 6-12 months of planting. The state's rich agricultural heritage includes extensive orange cultivation in regions like Nagpur.`,
        paddy: `Paddy (Rice) cultivation in Maharashtra is a vital component of the state's agriculture, with its growth cycle spanning 3-6 months. The state's irrigated and rain-fed rice fields contribute significantly to its food security.`,
        peas: `Peas cultivation in Maharashtra benefits from the state's cool climate and fertile soils. With a growth period of 2-3 months, peas farming provides valuable income opportunities for farmers.`,
        pomegranate: `Pomegranate orchards flourish in Maharashtra's semi-arid regions, with trees bearing fruit within 2-3 years of planting. The state's favorable growing conditions contribute to pomegranate's status as a premium horticultural crop.`,
        potato: `Potato cultivation in Maharashtra follows a growth cycle of 2-4 months, with the state being a major producer in the country. Its versatility and high market demand make it a profitable crop for farmers.`,
        radish: `Radish cultivation in Maharashtra typically takes 1-2 months from sowing to harvest. Its fast growth cycle and high nutritional value make it a popular choice among consumers and farmers.`,
        rice: `Rice cultivation in Maharashtra is a staple practice, with its growth cycle spanning 3-6 months. The state's diverse agro-climatic zones support both irrigated and rain-fed rice cultivation.`,
        soy: `Soybean cultivation in Maharashtra benefits from the state's diverse agro-climatic zones. With a growth period of 3-4 months, soy farming plays a crucial role in the state's oilseed production.`,
        tur: `Tur (Pigeon Pea) cultivation in Maharashtra is favored for its adaptability to diverse soil and climatic conditions. With a growth period of 4-6 months, tur farming contributes significantly to the state's pulse production.`,
        urad: `Urad (Black Gram) cultivation in Maharashtra typically takes 2-3 months from sowing to harvest. Its quick growth cycle and high protein content make it a valuable crop for farmers.`,
        wheat: 'Wheat cultivation in Maharashtra follows a growth cycle of 4-6 months, with the state being one of the leading producers in the country. Its high yield potential and market demand make it a profitable crop for farmers.'
    }
    const [graphData, setGraphData] = useState({
        labels: [
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
        ],
        datasets: [
            {
                label: 'Solid Line',
                data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                borderColor: 'blue',
                fill: true
            }
            //     {
            //         label: 'Dotted Line',
            //         data: [80, 110, 90, 150, 180, 190],
            //         borderColor: 'red',
            //         borderDash: [5],
            //         fill: false
            //     }
        ]
    })
    useEffect(() => {
        console.log('Fetching Data for ', crop)
        async function fetchData() {
            // Fetch data for the selected crop
            const res = await fetch('http://192.168.1.107:8000/predict', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ crop: crop.toLowerCase() })
            })
            const data = await res.json()
            console.log(data)
            setGraphData(prev => {
                return {
                    ...prev,
                    datasets: [
                        {
                            ...prev.datasets[0],
                            data: data.predictions,
                            label: data.crop
                        }
                    ]
                }
            })
            setData(prev => {
                return {
                    ...prev,
                    minValue: Math.floor(Math.min(...data.predictions)),
                    maxValue: Math.floor(Math.max(...data.predictions)),
                    meanValue: Math.floor(
                        data.predictions.reduce((a, b) => a + b, 0) /
                            data.predictions.length
                    )
                }
            })
        }
        fetchData()
        // graphData.datasets[0].data = [100, 300, 400, 450, 400, 350]
    }, [crop])

    return (
        <div className='pt-16'>
            {/* Navigation Bar */}
            <NavBar />
            {/* Filter Component */}
            <div className='p-4'>
                <select
                    className='px-4 py-2 rounded border border-gray-600 text-gray-800'
                    onClick={e => setCrop(e.target.value)}
                >
                    <option value='bajra'>Bajra</option>
                    <option value='banana'>Banana</option>
                    <option value='brinjal'>Brinjal</option>
                    <option value='cabbage'>Cabbage</option>
                    <option value='cauliflower'>Cauliflower</option>
                    <option value='cucumber'>Cucumber</option>
                    <option value='guar'>Guar</option>
                    <option value='guava'>Guava</option>
                    <option value='jowar'>Jowar</option>
                    <option value='lauki'>Lauki</option>
                    <option value='maize'>Maize</option>
                    <option value='methi'>Methi</option>
                    <option value='moong'>Moong</option>
                    <option value='okra'>Okra</option>
                    <option value='onion'>Onion</option>
                    <option value='orange'>Orange</option>
                    <option value='paddy'>Paddy</option>
                    <option value='peas'>Peas</option>
                    <option value='pomegranate'>Pomegranate</option>
                    <option value='potato'>Potato</option>
                    <option value='radish'>Radish</option>
                    <option value='rice'>Rice</option>
                    <option value='soy'>Soybean</option>
                    <option value='tur'>Tur</option>
                    <option value='urad'>Urad</option>
                    <option value='wheat'>Wheat</option>
                </select>
            </div>
            {/* Graph Component */}
            <Graph data={graphData} />
            {/* Description Component */}
            <Description
                title={crop.toUpperCase()}
                description={description[crop.toLowerCase()]}
                minValue={data.minValue}
                maxValue={data.maxValue}
                meanValue={data.meanValue}
            />
        </div>
    )
}

export default HomePage
