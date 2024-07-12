// Filter.js

import React from 'react'

const Filter = () => {
    return (
        <div className='p-4'>
            <select className='px-4 py-2 rounded border border-gray-600 text-gray-800'>
                <option value='wheat'>Wheat</option>
                <option value='jowar'>Jowar</option>
            </select>
        </div>
    )
}

export default Filter
