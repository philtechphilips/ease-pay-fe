"use client"
import PaymentTable from "@/components/dashboard/paymentTable";
import { RootState } from "@/store/store";
import { useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";

export default function Dashboard() {
  const user = useSelector((state: RootState) => state.auth.user);

  useEffect(() => {
    {!(user) && (
      toast.error('Complete Your Profile in The Settings Page!',  {
        duration: 6000,})
    )}
  }, [])
  return (
    <div className="w-full md:px-10 px-5 md:py-5 pt-5 pb-20 gap-3 bg-[#F7F8FA] min-h-screen">
      <div className="flex md:flex-row flex-col gap-3 pb-3 w-full">
        <div className="border border-[#d2d3d4] bg-white rounded-lg px-5 py-6 flex flex-col gap-2">
          <div className="border border-[#d2d3d4] h-10 w-10 rounded-full flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#006FFE" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="m9 14.25 6-6m4.5-3.493V21.75l-3.75-1.5-3.75 1.5-3.75-1.5-3.75 1.5V4.757c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0c1.1.128 1.907 1.077 1.907 2.185ZM9.75 9h.008v.008H9.75V9Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm4.125 4.5h.008v.008h-.008V13.5Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
            </svg>
          </div>
          <p className="text-gary-400 font-[Gilroy-Regular] font-[500] text-gray-500">Total Receipts</p>
          <h1 className="text-3xl font-[Gilroy]">345</h1>
          <div className="flex gap-1">
            <div className="flex items-center bg-red-100 px-3 py-[1px] rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="rgb(239 68 68)" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6 9 12.75l4.286-4.286a11.948 11.948 0 0 1 4.306 6.43l.776 2.898m0 0 3.182-5.511m-3.182 5.51-5.511-3.181" />
              </svg>
              <p className="trext-red-500 font-[Gilroy-Regular]">14%</p>
            </div>
            <div className="flex">
              <p className="text-gray-500 font[Gilroy-Regular]">vs previous month</p>
            </div>
          </div>
        </div>

        <div className="border border-[#d2d3d4] bg-white  rounded-lg px-5 py-6 flex flex-col gap-2">
          <div className="border border-[#d2d3d4] h-10 w-10 rounded-full flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#006FFE" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="m9 14.25 6-6m4.5-3.493V21.75l-3.75-1.5-3.75 1.5-3.75-1.5-3.75 1.5V4.757c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0c1.1.128 1.907 1.077 1.907 2.185ZM9.75 9h.008v.008H9.75V9Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm4.125 4.5h.008v.008h-.008V13.5Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
            </svg>
          </div>
          <p className="text-gary-400 font-[Gilroy-Regular] font-[500] text-gray-500">Pending Receipts</p>
          <h1 className="text-3xl font-[Gilroy]">345</h1>
          <div className="flex gap-1">
            <div className="flex items-center bg-red-100 px-3 py-[1px] rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="rgb(239 68 68)" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6 9 12.75l4.286-4.286a11.948 11.948 0 0 1 4.306 6.43l.776 2.898m0 0 3.182-5.511m-3.182 5.51-5.511-3.181" />
              </svg>
              <p className="trext-red-500 font-[Gilroy-Regular]">14%</p>
            </div>
            <div className="flex">
              <p className="text-gray-500 font[Gilroy-Regular]">vs previous month</p>
            </div>
          </div>
        </div>

        <div className="border border-[#d2d3d4] bg-white  rounded-lg px-5 py-6 flex flex-col gap-2">
          <div className="border border-[#d2d3d4] h-10 w-10 rounded-full flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#006FFE" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="m9 14.25 6-6m4.5-3.493V21.75l-3.75-1.5-3.75 1.5-3.75-1.5-3.75 1.5V4.757c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0c1.1.128 1.907 1.077 1.907 2.185ZM9.75 9h.008v.008H9.75V9Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm4.125 4.5h.008v.008h-.008V13.5Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
            </svg>
          </div>
          <p className="text-gary-400 font-[Gilroy-Regular] font-[500] text-gray-500">Successful Receipts</p>
          <h1 className="text-3xl font-[Gilroy]">345</h1>
          <div className="flex gap-1">
            <div className="flex items-center bg-red-100 px-3 py-[1px] rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="rgb(239 68 68)" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6 9 12.75l4.286-4.286a11.948 11.948 0 0 1 4.306 6.43l.776 2.898m0 0 3.182-5.511m-3.182 5.51-5.511-3.181" />
              </svg>
              <p className="trext-red-500 font-[Gilroy-Regular]">14%</p>
            </div>
            <div className="flex">
              <p className="text-gray-500 font[Gilroy-Regular]">vs previous month</p>
            </div>
          </div>
        </div>

        <div className="border border-[#d2d3d4] bg-white  rounded-lg px-5 py-6 flex flex-col gap-2">
          <div className="border border-[#d2d3d4] h-10 w-10 rounded-full flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#006FFE" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="m9 14.25 6-6m4.5-3.493V21.75l-3.75-1.5-3.75 1.5-3.75-1.5-3.75 1.5V4.757c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0c1.1.128 1.907 1.077 1.907 2.185ZM9.75 9h.008v.008H9.75V9Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm4.125 4.5h.008v.008h-.008V13.5Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
            </svg>
          </div>
          <p className="text-gary-400 font-[Gilroy-Regular] font-[500] text-gray-500">Total Income</p>
          <h1 className="text-3xl font-[Gilroy]">345</h1>
          <div className="flex gap-1">
            <div className="flex items-center bg-red-100 px-3 py-[1px] rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="rgb(239 68 68)" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6 9 12.75l4.286-4.286a11.948 11.948 0 0 1 4.306 6.43l.776 2.898m0 0 3.182-5.511m-3.182 5.51-5.511-3.181" />
              </svg>
              <p className="trext-red-500 font-[Gilroy-Regular]">14%</p>
            </div>
            <div className="flex">
              <p className="text-gray-500 font[Gilroy-Regular]">vs previous month</p>
            </div>
          </div>
        </div>
      </div>
      <div className="border border-[#d2d3d4] bg-white rounded-lg px-5 py-6">
        <PaymentTable />
      </div>
      <Toaster
  position="top-right"
  reverseOrder={false}
/>
    </div>
  );
}
