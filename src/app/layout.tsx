"use client";
import "./globals.css";;
import { Provider } from "react-redux";
import { Store } from "redux";
import { RootState, store, persistor } from "../store/store";
import { PersistGate } from "redux-persist/integration/react";

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
          </PersistGate>
        </Provider>
      </body>
    </html>
  );
}
