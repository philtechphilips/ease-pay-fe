"use client";
import { register, reset } from '@/features/auth/authSlice';
import { AppDispatch } from '@/store/store';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer, toast } from "react-toastify";

const CreateAccount = () => {
    const dispatch = useDispatch<AppDispatch>();
    const router = useRouter();

    const { user, isLoading, isError, isSuccess, message } = useSelector((state: any) => state.auth)
    console.log(isLoading)

    const [formData, setFormData] = useState({
        full_name: '',
        username: '',
        email: '',
        password: '',
        phone: ''
    });

    const { full_name, email, password, username, phone } = formData;

    useEffect(() => {
        if (isError) {
            toast.error(message);
        }

        if (isSuccess) {
            toast.success(message);
            setFormData({
                full_name: '',
                username: '',
                email: '',
                password: '',
                phone: ''
            })
        }

        if(user){
            router.push("/");
        }

        dispatch(reset())
    }, [user, isError, isLoading, isSuccess, message, dispatch]);
    const onChange = (e: any) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }))
    };

    const onSubmit = (e: any) => {
        e.preventDefault();
        const userData = {
            full_name, email, password, username, phone
        }
        dispatch(register(userData))
    };
    return (
        <div>
            <form className="mt-8 flex flex-col gap-5" onSubmit={onSubmit}>
                <div className="flex flex-col gap-2">
                    <label className="font-[Gilroy-Regular] font-bold">Full Name:</label>
                    <input type="text" id="name"
                        name="full_name"
                        value={full_name} onChange={onChange} className="outline-none py-4 px-2 border-2 border-gray-700 focus:border-[#006FEE] focus:border  rounded-md" placeholder="Enter Your Full Name"></input>
                </div>

                <div className="flex flex-col gap-2">
                    <label className="font-[Gilroy-Regular] font-bold">Email Address:</label>
                    <input type="email" name="email"
                        value={email} onChange={onChange} className="outline-none py-4 px-2 border-2 border-gray-700 focus:border-[#006FEE] focus:border  rounded-md" placeholder="Enter Your Email Address"></input>
                </div>

                <div className="flex flex-col gap-2">
                    <label className="font-[Gilroy-Regular] font-bold">Username:</label>
                    <input type="text" name="username"
                        value={username} onChange={onChange} className="outline-none py-4 px-2 border-2 border-gray-700 focus:border-[#006FEE] focus:border  rounded-md" placeholder="Enter a Username"></input>
                </div>

                <div className="flex flex-col gap-2">
                    <label className="font-[Gilroy-Regular] font-bold">Phone:</label>
                    <input name="phone"
                        value={phone} onChange={onChange} type="phone" className="outline-none py-4 px-2 border-2 border-gray-700 focus:border-[#006FEE] focus:border  rounded-md" placeholder="Enter Your Phone Number"></input>
                </div>

                <div className="flex flex-col gap-2">
                    <label className="font-[Gilroy-Regular] font-bold">Password:</label>
                    <input type="password" name="password"
                        value={password} onChange={onChange} className="outline-none py-4 px-2 border-2 border-gray-700 focus:border-[#006FEE] focus:border  rounded-md" placeholder="Enter Your Password"></input>
                </div>

                <button disabled={isLoading} className="bg-[#006FEE] font-[Gilroy-Regular] font-bold rounded-lg py-[18px] text-white text-xl">{isLoading ? "Submitting.." : "Create Account"}</button>
            </form>
            <ToastContainer />
        </div>
    )
}

export default CreateAccount
