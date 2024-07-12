// components/CropInfo.js

const CropInfo = ({ crop, metadata }) => {
    const maxPrice = crop.predictions.reduce((a, b) => Math.max(a, b), 0)
    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1)
    }
    const timeToYield =
        metadata && metadata[crop.crop] && metadata[crop.crop].time

    return (
        <div className='bg-gray-100 p-4 mb-4'>
            <h3 className='text-lg font-bold mb-2'>
                {capitalizeFirstLetter(crop.crop)}
            </h3>

            <p>
                <strong>Maximum Price:</strong> Rs. {parseInt(maxPrice)}
            </p>
            <p>
                <strong>Yield:</strong>{' '}
                {timeToYield ? `${timeToYield} months` : 'Unknown'}
            </p>
            <p>
                <strong>Price at Yield:</strong> Rs. {parseInt(crop.yield)}
            </p>
        </div>
    )
}

export default CropInfo
