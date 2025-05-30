import React from 'react'

const Manager = () => {
    return (
        <>
            <div class="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
                <div class="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-fuchsia-400 opacity-20 blur-[100px]"></div>
            </div>
            <div className="bg-slate-50 mycontainer">
                <h1 className='text-4xl font-bold text text-center'>
                    <span className='text-green-700 '> &lt;</span>
                    Pass
                    <span className='text-green-700'>Man/&gt; </span>
                </h1>
                <p className='text-green-700 text-lg text-center'>Your Password Manager</p>
                <div className="text-white flex flex-col p-4">
                    <input className='rounded-full ' type="text" name='' id='' />
                    <div className="flex">
                        <input type="text" />
                        <input type="text" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Manager
