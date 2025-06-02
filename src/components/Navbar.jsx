import React from 'react'

const Navbar = () => {
    return (
        <nav className='bg-slate-800 text-white'>
            <div className="mycontainer flex justify-between items-center h-14 px-4 py-5">
                <div className='logo font-bold text-2xl text-white '>
                    <span className='text-green-700 '> &lt;</span>
                    Pass
                    <span className='text-green-500'>Man/&gt; </span>
                </div>
                {/* <ul>
                    <li className='flex gap-4'>
                        <a className='hover:font-bold' href="#">Home</a>
                        <a className='hover:font-bold' href="/about">About</a>
                        <a className='hover:font-bold' href="/contact">Contact</a>
                    </li>
                </ul> */}
                <button className='text-white bg-green-500 rounded-full flex items-center justify-center'>
                    <img className='invert px-3 w-16' src="/github.svg" alt="git hub icon" />
                   <span className='font-bold px-2'>GitHub</span>  
                </button>
            </div>
        </nav>
    )
}

export default Navbar
