"use client"
import { setOpen } from '@/features/sidebar/sideBarSlice';
import { RootState } from '@/store/store';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

const NavBar = () => {
  const openn = useSelector((state: RootState) => state.open.open);
  const [userState, setUserState] = useState();
  const { user } = useSelector((state: any) => state.auth);
  const dispatch = useDispatch();
  const handleToggle = () => {
    dispatch(setOpen(!openn));
  };

  useEffect(() => {
    setUserState(user);
  }, [user]);

  return (
    <div className='bg-[#F7F8FA] border-b border-[#d2d3d4] w-full flex items-center justify-between  h-28 px-5 md:px-10'>
      <i className="md:hidden flex ri-arrow-right-s-line text-4xl cursor-pointer" onClick={handleToggle}></i>

      <div>
        <h1 className='font-[Gilroy] text-xl'>Dashboard</h1>
      </div>

      <div className='flex items-center md:gap-4 gap-2 border rounded-full border-gray-300 px-2 md:px-4 py-2'>
        <div className='w-10 h-10 flex items-center justify-center rounded-full bg-[#006FFE]'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#fff" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
          </svg>
        </div>
        <div className='flex gap-3 items-center'>
          <div className='hidden md:block'>
            <h1 className='font-[Gilroy-Regular] text-lg font-semibold text-gray-700'>{user?.username}</h1>
            <p className='font-[Gilroy-Regular] text-gray-600'>{user?.email}</p>
          </div>
          <div className='cursor-pointer'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
            </svg>
          </div>

        </div>
      </div>
    </div>
  )
}

export default NavBar
