"use client"

import CreateAccount from "@/components/auth/CreateAccount";
import LoginAccount from "@/components/auth/LoginAccount";
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
                    <CreateAccount />
                )}

                {formState === 'sign-in' && (
                    <LoginAccount />
                )}
            </div>
        </div>
    )
}

export default page
