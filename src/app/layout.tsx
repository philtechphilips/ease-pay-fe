"use client"
import type { Metadata } from "next";
import "./globals.css";;
import "react-toastify/dist/ReactToastify.css";
import { Provider } from "react-redux";
import { Store } from "redux";
import { RootState, store, persistor } from "../store/store";
import { PersistGate } from "redux-persist/integration/react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// export const metadata: Metadata = {
//   title: "Ease Pay - Invoice Generator",
//   description: "Digital Invoice, Easepay, Fast payment",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Provider store={store as Store<RootState>}>
          <PersistGate loading={null} persistor={persistor}>
            {children}
            <ToastContainer />
          </PersistGate>
        </Provider>
      </body>
    </html>
  );
}
