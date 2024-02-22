import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { ReduxProvider } from "@/redux/provider";
import "react-toastify/dist/ReactToastify.css";


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
        <Navbar />
        <ReduxProvider>
          {children}
        </ReduxProvider>
      </body>
    </html>
  );
}
