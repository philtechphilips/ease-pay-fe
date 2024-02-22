import { login, reset } from '@/features/auth/authSlice';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';

const LoginAccount = () => {
    const dispatch = useDispatch();
    const router = useRouter();

    const { user, isLoading, isError, isSuccess, message} = useSelector((state: any) => state.auth)

    useEffect(() => {
        if (isError){
            toast.error(message);
        }
        if (isSuccess || user ){
             router.push("/");
        }
        dispatch(reset())
    }, [user, isError, isLoading, isSuccess, message, dispatch]);

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
        if (!password){
            toast.error("Passwords is required")
        }else{
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
                    <input type="text" value={username} name='username' onChange={onChange} className="outline-none py-4 px-2 border-2 border-gray-700 focus:border-[#006FEE] focus:border  rounded-md" placeholder="Enter a Username"></input>
                </div>

                <div className="flex flex-col gap-2">
                    <label className="font-[Gilroy-Regular] font-bold">Password:</label>
                    <input type="password" value={password} name='password' onChange={onChange} className="outline-none py-4 px-2 border-2 border-gray-700 focus:border-[#006FEE] focus:border  rounded-md" placeholder="Enter Your Password"></input>
                </div>

                <button className="bg-[#006FEE] font-[Gilroy-Regular] font-bold rounded-lg py-[18px] text-white text-xl">Sign In</button>
            </form>
        </div>
    )
}

export default LoginAccount
