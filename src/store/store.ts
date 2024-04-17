import authReducer from "../features/auth/authSlice";
import sideBarSlice from "@/features/sidebar/sideBarSlice";
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'


const persistConfig = {
    key: 'root',
    storage,
}

export const rootReducers = combineReducers({
    auth: authReducer,
    open: sideBarSlice,
})


const persistedReducer = persistReducer(persistConfig, rootReducers)

// const logoutMiddleware = store => next => action => {
//     if (action.type === 'auth/logout') {
//         persistStore(store, null, () => {
//             store.dispatch({ type: 'persist/PURGE', result: () => null })
//             store.dispatch({
//                 type: 'persist/REHYDRATE',
//                 payload: {},
//                 error: null,
//             })
//         })
//     }
//     return next(action)
// }

const store = configureStore({
    reducer: persistedReducer,

    devTools: process.env.NODE_ENV === 'development',
    // middleware: getDefaultMiddleware =>
    //     getDefaultMiddleware({
    //         serializableCheck: false,
    //     }).concat([logoutMiddleware]),
})


const persistor = persistStore(store)
export { store, persistor }
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector