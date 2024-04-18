"use client"
import Navbar from "@/components/Navbar";
import LoginAccount from "@/components/auth/LoginAccount";

const page = () => {
    return (
        <>
            <Navbar />
            <div className="bg-[#001433] flex justify-center items-center py-20 px-5">
                <div className="md:w-[500px] w-full  bg-white py-5 md:px-10 px-5">
                    <h1 className="text-center text-3xl font-bold">Welcome back</h1>
                    <LoginAccount />
                </div>
            </div>
        </>
    )
}

export default page
