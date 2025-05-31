import React, { useRef } from 'react'

const Manager = () => {
    const ref = useRef();
    const showPassword = () => {
        const src = ref.current.src;
        console.log(src);
        
        if (src.endsWith("hide.png")) {
            ref.current.src = "/show.png"
        }
        else {
            ref.current.src = "/hide.png"
        }
    }

    return (
        <>
            <div className="absolute inset-0 -z-10 h-full w-full bg-green-50 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
                <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-fuchsia-400 opacity-20 blur-[100px]"></div>
            </div>
            <div className=" mycontainer">
                <h1 className='text-4xl font-bold text text-center'>
                    <span className='text-green-700 '> &lt;</span>
                    Pass
                    <span className='text-green-500'>Man/&gt; </span>
                </h1>
                <p className='text-green-700 text-lg text-center'>Your Password Manager</p>
                <div className="flex flex-col p-4 text-black gap-6 items-center">
                    <input placeholder='Enter website URL' className='rounded-full border border-green-500 w-full p-4 py-1' type="text" name='' id='' />
                    <div className="flex w-full gap-8">
                        <input placeholder='Enter Username' className='rounded-full border border-green-500 w-full p-4 py-1' type="text" name='' id='' />
                        <div className="relative">
                            <input placeholder='Enter Password' className='rounded-full border border-green-500 w-full p-4 py-1' type="text" name='' id='' />
                            <span className="absolute right-0 top-0 cursor-pointer" onClick={showPassword}>
                                <img ref={ref} width={35} className='p-2' src="/show.png" alt="Show icon" />
                            </span>
                        </div>
                    </div>

                    <button className='flex justify-center items-center bg-green-400 rounded-full gap-2 border border-green-900 px-8 py-2 w-fit hover:bg-green-300'>
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
