import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <div className="w-full md:px-10 px-5 md:py-5 pt-5 pb-20 gap-3 bg-[#F7F8FA] min-h-screen">
      <div className='flex'>
       <h1 className='font-[Gilroy] text-xl font-white opacity-60'>User Settings</h1>
      </div>

      <div className='flex flex-col md:flex-row gap-10 mt-8 w-full items-start'>
      <div className='bg-white border border-[#F7F8FA] rounded-lg p-5 w-full md:w-1/2'>
          <h1 className='font-[Gilroy-Medium] font-medium text-xl'>User Details</h1>
          <form className='mt-8 flex flex-col gap-5'>
          <div className="flex flex-col gap-2">
                    <label className="font-[Gilroy-Regular] font-bold">Username:</label>
                    <input type="text" disabled  name='username' className="outline-none py-4 px-2 border-2 border-gray-700 focus:border-[#006FEE] focus:border  rounded-md" placeholder="Enter a Username"></input>
                </div>

                <div className="flex flex-col gap-2">
                    <label className="font-[Gilroy-Regular] font-bold">Email:</label>
                    <input type="text" disabled  name='username' className="outline-none py-4 px-2 border-2 border-gray-700 focus:border-[#006FEE] focus:border  rounded-md" placeholder="Enter an Email Address"></input>
                </div>

                <div className="flex flex-col gap-2">
                    <label className="font-[Gilroy-Regular] font-bold">Phone:</label>
                    <input type="phone"  name='username' className="outline-none py-4 px-2 border-2 border-gray-700 focus:border-[#006FEE] focus:border  rounded-md" placeholder="Enter Phone Number"></input>
                </div>

                <div className="flex flex-col gap-2">
                    <label className="font-[Gilroy-Regular] font-bold">Company Name:</label>
                    <input type="text"  name='username' className="outline-none py-4 px-2 border-2 border-gray-700 focus:border-[#006FEE] focus:border  rounded-md" placeholder="Enter Company Name"></input>
                </div>

                <div className="flex flex-col gap-2">
                    <label className="font-[Gilroy-Regular] font-bold">Company Address:</label>
                    <input type="text"  name='username' className="outline-none py-4 px-2 border-2 border-gray-700 focus:border-[#006FEE] focus:border  rounded-md" placeholder="Enter Company Address"></input>
                </div>

                <button className="bg-[#006FEE] font-[Gilroy-Regular] font-bold rounded-lg py-[18px] text-white text-xl">Update Details</button>
          </form>
        </div>

        <div className='bg-white border border-[#F7F8FA] rounded-lg p-5 w-full md:w-1/2'>
        <h1 className='font-[Gilroy-Medium] font-medium text-xl'>Company Logo</h1>
        
        <div className='flex flex-col py-10'>
          <Image className='rounded-full bg-blue-600 p-10' src='/easepay.png' alt='logo' width={300} height={300}></Image>
          
          <div className='cursor-pointer bg-[#006FEE] w-fit  items-end text-white font-[Gilroy-Regular] font-semibold mt-8 px-10 py-3 rounded-lg'>
            Update Image
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default page
