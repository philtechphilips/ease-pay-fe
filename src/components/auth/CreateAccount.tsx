"use client";
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from "react-toastify";

const CreateAccount = () => {
    const dispatch = useDispatch();

    const { user, isLoading, isError, isSuccess, message} = useSelector((state) => state.auth)

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        password2: ''
    });

    const { name, email, password, password2 } = formData;

    useEffect(() => {
        if (isError){
            toast.error(message);
        }

        if (isSuccess || user){
            // navigate("/");
        }

        dispatch(reset())
    }, [user, isError, isLoading, isSuccess, message, dispatch]);
    const onChange = (e) => { 
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name] : e.target.value,
        }))
    };

    const onSubmit = (e) => { 
        e.preventDefault();
        if (password !== password2){
            toast.error("Passwords do not match")
        }else{
            const userData = {
                name, email, password
            }

            dispatch(register(userData))
        }
    };
    return (
        <div>
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
        </div>
    )
}

export default CreateAccount
