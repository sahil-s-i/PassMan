import React from 'react'

const Manager = () => {
    return (
        <>
            <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
                <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-fuchsia-400 opacity-20 blur-[100px]"></div>
            </div>
            <div className="bg-slate-50 mycontainer">
                <h1 className='text-4xl font-bold text text-center'>
                    <span className='text-green-700 '> &lt;</span>
                    Pass
                    <span className='text-green-700'>Man/&gt; </span>
                </h1>
                <p className='text-green-700 text-lg text-center'>Your Password Manager</p>
                <div className="flex flex-col p-4 text-black gap-6 items-center">
                    <input className='rounded-full border border-green-500 w-full p-4 py-1' type="text" name='' id='' />
                    <div className="flex w-full gap-8">
                        <input className='rounded-full border border-green-500 w-full p-4 py-1' type="text" name='' id='' />
                        <input className='rounded-full border border-green-500 w-full p-4 py-1' type="text" name='' id='' />
                    </div>

                    <button className='flex justify-center items-center bg-green-400 rounded-full px-4 py-2 w-fit hover:bg-green-300'>
                        <lord-icon
                            src="https://cdn.lordicon.com/ueoydrft.json"
                            trigger="hover"
                        >
                        </lord-icon>
                        Add Password
                    </button>
                </div>
            </div>
        </>
    )
}

export default Manager
