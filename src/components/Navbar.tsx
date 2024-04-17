"use client"
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import 'remixicon/fonts/remixicon.css';


const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { user } = useSelector((state: any) => state.auth);
    const [userState, setUserState] = useState();
    const dispatch = useDispatch();
    const router = useRouter();

    console.log(user)

    useEffect(() => {
        setUserState(user);
    }, [user])

    const toggleNavBar = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen)
    }

    return (
        <>
            <div className="bg-[#001433] py-5 md:px-24 px-5 flex items-center justify-between">
                <Link href="/" className="rounded-full w-10 h-10 bg-[#006FFE] flex items-center justify-center">
                    <Image src="/easepay.png" alt="logo" width={20} height={20} />
                </Link> 

                <ul className="md:flex gap-16 hidden">
                    <li className="text-white hover:text-[#006FEE] font-[Urbanist]"><Link href="/">Home</Link></li>
                    <li className="text-white hover:text-[#006FEE] font-[Urbanist]"><Link href="/">About Us</Link></li>
                    <li className="text-white hover:text-[#006FEE] font-[Urbanist]"><Link href="/">Faqs</Link></li>
                    <li className="text-white hover:text-[#006FEE] font-[Urbanist]"><Link href="/">Contact Us</Link></li>
                </ul>

                <i className="ri-menu-2-fill text-white text-3xl md:hidden flex" onClick={toggleNavBar}></i>
                {userState ? (
                    <Link href="/dashboard" className="text-white font-[Urbanist] hidden md:flex bg-[#006FEE] px-6 py-3 rounded-md">Dashboard</Link>
                ) : (
                    <Link href="/create-account" className="text-white font-[Urbanist] hidden md:flex bg-[#006FEE] px-6 py-3 rounded-md">Get Started</Link>
                )}

            </div>

            {/* Mobile Menu */}
            <div className={`bg-[#080613] h-screen fixed top-0 right-0 w-screen pt-5 pb-10 px-5 md:hidden items-center gap-24 flex flex-col transition-transform ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full transition-transform'}`}>
                <div className="flex items-center justify-between w-full">
                    <Link href="/" className=" w-12 h-12 flex items-center justify-center bg-[#006FFE] rounded-full">
                        <Image src="/easepay.png" alt="logo" width={30} height={30} />
                    </Link>

                    <i className="ri-close-line text-white text-4xl" onClick={toggleNavBar}></i>
                </div>
                <ul className="flex flex-col gap-10">
                    <li className="text-white text-center text-2xl hover:text-[#006FEE] font-[Urbanist]"><Link href="/">Home</Link></li>
                    <li className="text-white text-center text-2xl hover:text-[#006FEE] font-[Urbanist]"><Link href="/">About Us</Link></li>
                    <li className="text-white text-center text-2xl hover:text-[#006FEE] font-[Urbanist]"><Link href="/">Faqs</Link></li>
                    <li className="text-white text-center text-2xl hover:text-[#006FEE] font-[Urbanist]"><Link href="/">Contact Us</Link></li>
                    <li>  <Link href="/create-account" className="text-white text-2xl font-[Urbanist] bg-[#006FEE] px-10 py-4 rounded-md">Get Started</Link></li>
                </ul>
            </div>
            {/* Mobile Menu */}
        </>
    )
}

export default Navbar
