import {  configureStore} from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import sideBarSlice from "@/features/sidebar/sideBarSlice";

export const store = configureStore({
    reducer: {
        auth: authReducer,
        open: sideBarSlice,
    },
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;