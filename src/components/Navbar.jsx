import React from 'react'

const Navbar = () => {
    return (
        <nav className='bg-purple-200 flex justify-between items-center h-14'>
            <div className='logo font-bold'>
                PassMan
            </div>
            <ul>
                <li className='flex gap-4'>
                    <a className='hover:font-bold' href="#">Home</a>
                    <a className='hover:font-bold' href="/about">About</a>
                    <a className='hover:font-bold' href="/contact">Contact</a>
                </li>
            </ul>

        </nav>
    )
}

export default Navbar
