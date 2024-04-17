import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from "./authService";
import toast from "react-hot-toast";
import { login, logout, register } from "./authAction";

interface User {
  username: string,
  email: string,
  fullName: string,
  password: string,
  phone: string,
  companyName: string,
  companyLogo: string,
  token: string
}

type RegisterUser = Pick<User, 'email' | 'username' | 'fullName' | 'password' | 'phone'>

interface LoginUser {
  username: string,
  password: string
}

interface InitialState {
  user: User | {};
  isError: boolean;
  isSuccess: boolean;
  isLoading: boolean;
  message: any;
}

const initialState: InitialState = {
  user: {},
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: ''
};



export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.message = action.payload.message;
      })
      .addCase(register.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.user = {};
      })
      .addCase(logout.fulfilled, state => {
        state.user = {}
        localStorage.removeItem('token');
        localStorage.removeItem('user');
      })
      .addCase(login.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        toast.success('Login successful', {
          position: "top-right",
        });
        console.log("action", action)
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload;
        localStorage.setItem('token', action.payload.token);
      })
      .addCase(login.rejected, (state, action) => {
        toast.error('Unsuccessful login', {
          position: "top-right",
        });
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.user = {};
      });
  }
});


export default authSlice.reducer;