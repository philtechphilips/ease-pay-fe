import React from 'react'

const LoginAccount = () => {
    return (
        <div>
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
        </div>
    )
}

export default LoginAccount
