import { Provider } from "react-redux";
import { Store } from "redux"; // Import the type for your Redux store
import { AppProps } from "next/app";
import { RootState, store, persistor } from "../store/store";
import { PersistGate } from "redux-persist/integration/react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "../globals.css";
import "../fonts.css";

function MyApp({ Component, pageProps }: AppProps) {
    console.log("Hello")
    return (
        <Provider store={store as Store<RootState>}>
            <PersistGate loading={null} persistor={persistor}>
                {/* <Component {...pageProps} /> */}
                <ToastContainer />
            </PersistGate>

        </Provider>
    );
}

export default MyApp;
