import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Provider } from "react-redux";
import { store } from "../store/"

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
    <Provider store={store}>
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
    </Provider>
  );
}
