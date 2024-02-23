"use client"
import { sideBarArray } from '@/constants/sidebar';
import Link from 'next/link';
import { usePathname } from 'next/navigation'
import 'remixicon/fonts/remixicon.css';

const Sidebar = () => {
  const pathname = usePathname();
  console.log(pathname)

  return (
    <div className='bg-[#F7F8FA] h-screen border-r border-[#d2d3d4] w-20 flex flex-col gap-8 fixed bottom-0 left-0 py-12  items-center'>
      <div className='bg-blue-600  h-10 w-10 rounded-full flex items-center justify-center'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="#fff" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
        </svg>
      </div>
      <div className='flex flex-col gap-10'>
        {sideBarArray.map((item) => (
          <div className='flex items-center justify-center'>
            <Link href={item.route} key={item.id}>
              {item.icon}
            </Link>
          {pathname === item.route && (
              <div className='bg-gray-900 h-8 w-1 rounded-tl-md rounded-bl-md absolute right-0' style={{ marginLeft: "auto" }}></div>
          )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Sidebar
