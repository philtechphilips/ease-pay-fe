import type { Metadata } from "next";
import { ReduxProvider } from "@/redux/provider";
import "react-toastify/dist/ReactToastify.css";
import Sidebar from "@/components/dashboard/Sidebar";
import NavBar from "@/components/dashboard/NavBar";
import Footer from "@/components/dashboard/Footer";

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
        <div className="ml-20 w-[calc(100vw-80px)] ">
        <NavBar />
        {children}
        </div>
        <div /></div>
      </ReduxProvider>
    </div>
  );
}
