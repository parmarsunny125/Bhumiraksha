// Graph.js
import { Chart as ChartJS } from 'chart.js/auto'
import { Chart } from 'react-chartjs-2'
import React from 'react'
import { Line } from 'react-chartjs-2'

const Graph = ({ data }) => {
    return (
        <div className='p-1'>
            <Line data={data} />
        </div>
    )
}

export default Graph
