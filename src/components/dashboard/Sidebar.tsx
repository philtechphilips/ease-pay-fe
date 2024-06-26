"use client"
import { sideBarArray } from '@/constants/sidebar';
import { logout } from '@/features/auth/authAction';
import { setOpen } from '@/features/sidebar/sideBarSlice';
import { RootState } from '@/store/store';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';
import 'remixicon/fonts/remixicon.css';

const Sidebar = () => {
  const pathname = usePathname();
  const openn = useSelector((state: RootState) => state.open.open);
  const user = useSelector((state: RootState) => state.auth.user);
  const dispatch = useDispatch();
  const router = useRouter();

  const handleToggle = () => {
    dispatch(setOpen(!openn));
  };

  const handleLogout = () => {
    dispatch(logout())
    router.push('/')
  }

  if (!user) {
    router.push('/login');
  }

  return (
    <>
      {openn && (
        <div className='bg-[#F7F8FA] h-screen border-r border-[#d2d3d4] w-20 flex z-[1000] flex-col gap-8 fixed bottom-0 left-0 py-12  items-center'>
          <div className='md:hidden flex items-center justify-center mt-16 cursor-pointer' onClick={handleToggle}>
            {openn ? (

              <i className="ri-arrow-left-s-line text-4xl"></i>
            ) : (
              <i className="ri-arrow-right-s-line text-4xl"></i>
            )}
          </div>

          <Link href="/" className="rounded-full w-10 h-10 bg-[#006FFE] flex items-center justify-center">
            <Image src="/easepay.png" alt="logo" width={20} height={20} />
          </Link>
          <div className='flex flex-col gap-10'>
            {sideBarArray.map((item) => (
              <div className='flex items-center justify-center' key={item.id}>
                <Link href={item.route}>
                  {item.icon}
                </Link>
                {pathname === item.route && (
                  <div className='bg-[#006FFE] h-8 w-1 rounded-tl-md rounded-bl-md absolute right-0' style={{ marginLeft: "auto" }}></div>
                )}
              </div>
            ))}

            <div className='flex items-center justify-center cursor-pointer'>
              <div onClick={handleLogout}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#969696" className="w-6 h-6 svg">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Sidebar
