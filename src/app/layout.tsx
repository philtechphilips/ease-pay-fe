import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { ReduxProvider } from "@/redux/provider";
import "react-toastify/dist/ReactToastify.css";
import Sidebar from "@/components/dashboard/Sidebar";
import NavBar from "@/components/dashboard/NavBar";
import Footer from "@/components/dashboard/Footer";


export const metadata: Metadata = {
  title: "Ease Pay - Invoice Generator",
  description: "Digital Invoice, Easepay, Fast payment",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ReduxProvider>
          <Sidebar />
          <NavBar />
          {children}

          <Footer />
        </ReduxProvider>
      </body>
    </html>
  );
}
