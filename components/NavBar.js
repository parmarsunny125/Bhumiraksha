// NavBar.js

import React from 'react'

const NavBar = () => {
    return (
        <nav className='flex justify-between items-center bg-green-300 py-4 px-8 fixed w-full top-0 z-10'>
            <div className='flex items-center'>
                {/* Centered circle logo */}
                <div className='h-8 w-8 rounded-full bg-white'></div>
                {/* Profile image */}
                <img
                    src='https://api.dicebear.com/8.x/pixel-art/svg'
                    alt='Profile'
                    className='h-8 w-8 rounded-full ml-4'
                    width={50}
                    height={50}
                />
            </div>
            {/* Language selection dropdown */}
            <select className='px-4 py-2 rounded border border-gray-600 text-black items-center'>
                <option value='en'>EN</option>
                <option value='hi'>HI</option>
            </select>
        </nav>
    )
}

export default NavBar
