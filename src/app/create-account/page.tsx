"use client"

import { useState } from "react"

const page = () => {
    const [formState, setFormState] = useState("sign-up");

    const handleFormState = (formInput: string) => {
        setFormState(formInput);
    }

    return (
        <div className="bg-[#080613] flex justify-center items-center py-20 px-5">
            <div className="md:w-[500px] w-full  bg-white py-5 md:px-10 px-5">
                <div className="rounded-full py-2 flex bg-gray-100 px-2 justify-between items-center">
                    <p onClick={() => handleFormState("sign-up")} className={`text-gray-500 cursor-pointer font-[Gilroy-Regular] font-semibold md:text-md text-sm px-10 ${formState === 'sign-up' ? 'bg-[#006FEE] text-white rounded-full py-4 px-10' : 'px-10'}`}>Create Account</p>
                    <p onClick={() => handleFormState("sign-in")} className={`text-gray-500 cursor-pointer font-[Gilroy-Regular] font-semibold md:text-md text-sm px-10 ${formState === 'sign-in' ? 'bg-[#006FEE] text-white rounded-full py-4' : 'px-10'}`}>Sign In</p>
                </div>
                
                {formState === 'sign-up' && (
                    <form className="mt-8 flex flex-col gap-5">
                        <div className="flex flex-col gap-2">
                            <label className="font-[Gilroy-Regular] font-bold">Full Name:</label>
                            <input type="text" className="outline-none py-4 px-2 border-2 border-gray-700 focus:border-[#006FEE] focus:border  rounded-md" placeholder="Enter Your Full Name"></input>
                        </div>

                        <div className="flex flex-col gap-2">
                            <label className="font-[Gilroy-Regular] font-bold">Email Address:</label>
                            <input type="email" className="outline-none py-4 px-2 border-2 border-gray-700 focus:border-[#006FEE] focus:border  rounded-md" placeholder="Enter Your Email Address"></input>
                        </div>

                        <div className="flex flex-col gap-2">
                            <label className="font-[Gilroy-Regular] font-bold">Username:</label>
                            <input type="text" className="outline-none py-4 px-2 border-2 border-gray-700 focus:border-[#006FEE] focus:border  rounded-md" placeholder="Enter a Username"></input>
                        </div>

                        <div className="flex flex-col gap-2">
                            <label className="font-[Gilroy-Regular] font-bold">Phone:</label>
                            <input type="phone" className="outline-none py-4 px-2 border-2 border-gray-700 focus:border-[#006FEE] focus:border  rounded-md" placeholder="Enter Your Phone Number"></input>
                        </div>

                        <div className="flex flex-col gap-2">
                            <label className="font-[Gilroy-Regular] font-bold">Password:</label>
                            <input type="password" className="outline-none py-4 px-2 border-2 border-gray-700 focus:border-[#006FEE] focus:border  rounded-md" placeholder="Enter Your Password"></input>
                        </div>

                        <button className="bg-[#006FEE] font-[Gilroy-Regular] font-bold rounded-lg py-[18px] text-white text-xl">Create Account</button>
                    </form>
                )}

                {formState === 'sign-in' && (
                    <form className="mt-8 flex flex-col gap-5">

                        <div className="flex flex-col gap-2">
                            <label className="font-[Gilroy-Regular] font-bold">Username:</label>
                            <input type="text" className="outline-none py-4 px-2 border-2 border-gray-700 focus:border-[#006FEE] focus:border  rounded-md" placeholder="Enter a Username"></input>
                        </div>

                        <div className="flex flex-col gap-2">
                            <label className="font-[Gilroy-Regular] font-bold">Password:</label>
                            <input type="password" className="outline-none py-4 px-2 border-2 border-gray-700 focus:border-[#006FEE] focus:border  rounded-md" placeholder="Enter Your Password"></input>
                        </div>

                        <button className="bg-[#006FEE] font-[Gilroy-Regular] font-bold rounded-lg py-[18px] text-white text-xl">Sign In</button>
                    </form>
                )}
            </div>
        </div>
    )
}

export default page
