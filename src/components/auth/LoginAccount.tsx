import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import { login } from '@/features/auth/authAction';
import toast from 'react-hot-toast';

const LoginAccount = () => {
    const dispatch = useDispatch();
    const router = useRouter();

    const { user, isLoading, isError, isSuccess, message } = useSelector((state: any) => state.auth)

    // useEffect(() => {
    //     if (isError){
    //         toast.error(message);
    //     }
    //     if (isSuccess || user ){
    //          router.push("/");
    //     }
    // }, [user, isError, isLoading, isSuccess, message]);

    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });

    const { username, password } = formData;

    const onChange = (e: any) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }))
    };

    const onSubmit = (e: any) => {
        e.preventDefault();
        if (!password) {
            toast.error("Passwords is required")
        } else {
            const userData = {
                username, password
            }

            dispatch(login(userData))
        }
    };

    return (
        <div>
            <form className="mt-8 flex flex-col gap-5" onSubmit={onSubmit}>

                <div className="flex flex-col gap-2">
                    <label className="font-[Gilroy-Regular] font-bold">Username:</label>
                    <input type="text" value={username} name='username' onChange={onChange} className="outline-none py-2 text-sm px-2 border border-gray-300 focus:border-[#006FEE] focus:border rounded-md" placeholder="Enter a Username"></input>
                </div>

                <div className="flex flex-col gap-2">
                    <label className="font-[Gilroy-Regular] font-bold">Password:</label>
                    <input type="password" value={password} name='password' onChange={onChange} className="outline-none py-2 text-sm px-2 border border-gray-300 focus:border-[#006FEE] focus:border rounded-md" placeholder="Enter Your Password"></input>
                </div>

                <button className="bg-[#006FEE] font-[Gilroy-Regular] font-semibold rounded-lg py-[10px] text-white">Sign In</button>
            </form>
        </div>
    )
}

export default LoginAccount
