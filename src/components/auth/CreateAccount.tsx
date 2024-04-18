"use client";
import { register } from "@/features/auth/authAction";
import { AppDispatch } from "@/store/store";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";

const CreateAccount = () => {
    const dispatch = useDispatch<AppDispatch>();
    const router = useRouter();

    const { user, isLoading, isError, isSuccess, message } = useSelector(
        (state: any) => state.auth
    );

    useEffect(() => {
        if (user) router.push("/dashboard")
    }, [user]);

    const [formData, setFormData] = useState({
        fullName: "",
        username: "",
        email: "",
        password: "",
        phone: "",
    });

    const { email, password, username, phone } = formData;

    const onChange = (e: any) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    };

    const onSubmit = async (e: any) => {
        try {
            e.preventDefault();
            const userData = {
                email,
                password,
                username,
                phone,
            };
            await dispatch(register(userData));
            if (isSuccess) toast.success(message)
            if (isError) toast.error(message)
        } catch (error) {
            if (isError) toast.error(message)
        }
    };
    return (
        <div>
            <form className="mt-8 flex flex-col gap-5" onSubmit={onSubmit}>
                <div className="flex flex-col gap-2">
                    <label className="font-[Gilroy-Regular] font-semibold">Username:</label>
                    <input
                        type="text"
                        name="username"
                        value={username}
                        onChange={onChange}
                        className="outline-none py-2 text-sm px-2 border border-gray-300 focus:border-[#006FEE] focus:border  rounded-md"
                        placeholder="Enter a Username"
                    ></input>
                </div>

                <div className="flex flex-col gap-2">
                    <label className="font-[Gilroy-Regular] font-semibold">
                        Email Address:
                    </label>
                    <input
                        type="email"
                        name="email"
                        value={email}
                        onChange={onChange}
                        className="outline-none py-2 text-sm px-2 border border-gray-300 focus:border-[#006FEE] focus:border  rounded-md"
                        placeholder="Enter Your Email Address"
                    ></input>
                </div>

                <div className="flex flex-col gap-2">
                    <label className="font-[Gilroy-Regular] font-semibold">Phone:</label>
                    <input
                        name="phone"
                        value={phone}
                        onChange={onChange}
                        type="phone"
                        className="outline-none py-2 text-sm px-2 border border-gray-300 focus:border-[#006FEE] focus:border  rounded-md"
                        placeholder="Enter Your Phone Number"
                    ></input>
                </div>

                <div className="flex flex-col gap-2">
                    <label className="font-[Gilroy-Regular] font-semibold">Password:</label>
                    <input
                        type="password"
                        name="password"
                        value={password}
                        onChange={onChange}
                        className="outline-none py-2 text-sm px-2 border border-gray-300 focus:border-[#006FEE] focus:border  rounded-md"
                        placeholder="Enter Your Password"
                    ></input>
                </div>

                <button
                    disabled={isLoading}
                    className="bg-[#006FEE] font-[Gilroy-Regular] font-semibold rounded-lg py-[10px] text-white"
                >
                    {isLoading ? "Submitting.." : "Create Account"}
                </button>
            </form>
        </div>
    );
};

export default CreateAccount;
