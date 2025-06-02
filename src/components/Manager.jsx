import React, { useRef, useState, useEffect } from 'react'

const Manager = () => {
    const ref = useRef();
    const [form, setForm] = useState({
        site: "",
        username: "",
        password: ""
    });
    const [passwordArray, setPasswordArray] = useState([]);
    const passwordRef = useRef();

    useEffect(() => {
        let passwords = localStorage.getItem("passwords");
        if (passwords) {
            setPasswordArray(JSON.parse(passwords));
        }
    }, [])


    const showPassword = () => {
        passwordRef.current.type = "text";
        const src = ref.current.src;
        console.log(src);

        if (src.endsWith("hide.png")) {
            ref.current.src = "/show.png"
            passwordRef.current.type = "password";
        }
        else {
            ref.current.src = "/hide.png"
        }
    }

    const savePassword = () => {
        setPasswordArray([...passwordArray, form]);
        localStorage.setItem("passwords", JSON.stringify([...passwordArray, form]));
        console.log([...passwordArray, form]);

    }

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
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
                    <input value={form.site} onChange={handleChange} placeholder='Enter website URL' className='rounded-full border border-green-500 w-full p-4 py-1' type="text" name='site' id='site' />
                    <div className="flex w-full gap-8">
                        <input value={form.username} onChange={handleChange} placeholder='Enter Username' className='rounded-full border border-green-500 w-full p-4 py-1' type="text" name='username' id='username' />
                        <div className="relative">
                            <input ref={passwordRef} value={form.password} onChange={handleChange} placeholder='Enter Password' className='rounded-full border border-green-500 w-full p-4 py-1' type="password" name='password' id='password' />
                            <span className="absolute right-0 top-0 cursor-pointer" onClick={showPassword}>
                                <img ref={ref} width={35} className='p-2' src="/show.png" alt="Show icon" />
                            </span>
                        </div>
                    </div>

                    <button onClick={savePassword} className='cursor-pointer flex justify-center items-center bg-green-400 rounded-full gap-2 border border-green-900 px-8 py-2 w-fit hover:bg-green-300'>
                        <lord-icon
                            src="https://cdn.lordicon.com/ueoydrft.json"
                            trigger="hover"
                        >
                        </lord-icon>
                        Add Password
                    </button>
                </div>

                <div className="passwords">
                    <h2 className='font-bold text-2xl py-4'>Your Passwords</h2>
                    {passwordArray.length === 0 && <div>No passwords to show</div>}
                    {passwordArray.length != 0 && <table className="table-auto w-full rounded-sm overflow-hidden">
                        <thead className='bg-green-800 text-white'>
                            <tr>
                                <th className='py-2'>Site</th>
                                <th className='py-2'>Username</th>
                                <th className='py-2'>Password</th>
                            </tr>
                        </thead>
                        <tbody className='bg-green-100'>
                            {passwordArray.map((data, index) => {
                                return (
                                    <tr key={index}>
                                        <td className='cursor-pointer py-2 border border-white text-center'>
                                            <div className="flex justify-center items-center">
                                                <a href={data.site} target='_blank'>{data.site}</a>
                                                <div className="lordiconcopy size-7 cursor-pointer" onClick={copyText(data.site)}>
                                                    <lord-icon
                                                        src="https://cdn.lordicon.com/hnqamtrw.json"
                                                        trigger="hover"
                                                        style={{ width: "20px", height: "20px", paddingTop: "4px" }}
                                                    >
                                                    </lord-icon>
                                                </div>
                                            </div>
                                        </td>
                                        <td className='py-2 border border-white text-center'>
                                            <div className="flex justify-center items-center">
                                                <span>{data.username}</span>
                                                <div className="lordiconcopy size-7 cursor-pointer" onClick={copyText(data.username)}>
                                                    <lord-icon
                                                        src="https://cdn.lordicon.com/hnqamtrw.json"
                                                        trigger="hover"
                                                        style={{ width: "20px", height: "20px", paddingTop: "4px" }}
                                                    >
                                                    </lord-icon>
                                                </div>
                                            </div>
                                        </td>
                                        <td className='py-2 border border-white text-center'>
                                            <div className="flex justify-center items-center">
                                                <span>{data.password}</span>
                                                <div className="lordiconcopy size-7 cursor-pointer" onClick={copyText(data.password)}>
                                                    <lord-icon
                                                        src="https://cdn.lordicon.com/hnqamtrw.json"
                                                        trigger="hover"
                                                        style={{ width: "20px", height: "20px", paddingTop: "4px" }}
                                                    >
                                                    </lord-icon>
                                                </div>
                                            </div>

                                        </td>
                                    </tr>
                                )
                            })}


                        </tbody>
                    </table>}
                </div>
            </div>
        </>
    )
}

export default Manager
