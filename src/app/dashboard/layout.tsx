import { ReduxProvider } from "@/redux/provider";
import Sidebar from "@/components/dashboard/Sidebar";
import NavBar from "@/components/dashboard/NavBar";


export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <ReduxProvider>
      <div className="flex items-start dark:bg-black w-screen min-h-screen h-[100vh] overflow-x-hidden relative">
        <Sidebar />
        <div className="md:ml-20 md:w-[calc(100vw-80px)] w-full">
        <NavBar />
        {children}
        </div>
        <div /></div>
      </ReduxProvider>
    </div>
  );
}
