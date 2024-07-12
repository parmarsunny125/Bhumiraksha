// Description.js

import { Wheat } from 'lucide-react'
import React from 'react'

const Description = ({ title, description, minValue, maxValue, meanValue }) => {
    return (
        <div className='p-4'>
            <div>
                {/* Title and description */}
                <h2 className='text-lg font-bold pb-4'>{title}</h2>
                <p className='pb-4 text-justify'>{description}</p>
            </div>
            <div>
                {/* Statistical values */}
                <p className='font-semibold'>Minimum Price : {minValue}</p>
                <p className='font-semibold'>Maximum Price : {maxValue}</p>
                <p className='font-semibold'>Mean Price : {meanValue}</p>
            </div>
        </div>
    )
}

export default Description
