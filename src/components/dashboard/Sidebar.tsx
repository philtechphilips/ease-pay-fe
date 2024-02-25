"use client"
import { sideBarArray } from '@/constants/sidebar';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation'
import 'remixicon/fonts/remixicon.css';

const Sidebar = () => {
  const pathname = usePathname();
  console.log(pathname)

  return (
    <div className='bg-[#F7F8FA] h-screen border-r border-[#d2d3d4] w-20 flex flex-col gap-8 fixed bottom-0 left-0 py-12  items-center'>
       <Link href="/" className="rounded-full w-10 h-10 bg-[#006FFE] flex items-center justify-center">
                    <Image src="/easepay.png" alt="logo" width={20} height={20} />
                </Link> 
      <div className='flex flex-col gap-10'>
        {sideBarArray.map((item) => (
          <div className='flex items-center justify-center'>
            <Link href={item.route} key={item.id}>
              {item.icon}
            </Link>
          {pathname === item.route && (
              <div className='bg-[#006FFE] h-8 w-1 rounded-tl-md rounded-bl-md absolute right-0' style={{ marginLeft: "auto" }}></div>
          )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Sidebar
