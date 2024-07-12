// components/LineGraph.js
import { Chart as ChartJS } from 'chart.js/auto'
import { Chart } from 'react-chartjs-2'
import React from 'react'
import { Line } from 'react-chartjs-2'

const LineGraph = ({ cropRecommendations }) => {
    // Assuming cropRecommendations is an array of objects with crop data
    const cropLabels = [
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
        'Dec',
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul'
    ]
    const colors = [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)'
    ]
    const cropData = cropRecommendations.map((crop, index) => ({
        label: crop.crop,
        data: crop.predictions, // Assuming prices is an array of prices for next 12 months
        fill: false,
        borderColor: colors[index],
        tension: 0
    }))

    const data = {
        labels: cropLabels,
        datasets: cropData
    }

    return (
        <div className='mb-8'>
            <h2 className='text-lg font-bold mb-2'>
                Crop Prices over Next 18 Months
            </h2>
            <Line data={data} />
        </div>
    )
}

export default LineGraph
