import type { Metadata } from "next";
import { ReduxProvider } from "@/redux/provider";
import "react-toastify/dist/ReactToastify.css";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
  <div>
        <ReduxProvider>
          {children}
        </ReduxProvider>
   </div>
  );
}
