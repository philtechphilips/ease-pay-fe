import { createAsyncThunk } from "@reduxjs/toolkit";
import authService from "./authService";

interface User {
    username: string,
    email: string,
    fullName: string,
    password: string,
    phone: string,
    companyName: string,
    companyLogo: string
  }
  
  type RegisterUser = Pick<User, 'email' | 'username' | 'password' | 'phone'>
  
  interface LoginUser {
    username: string,
    password: string
  }

export const register = createAsyncThunk('auth/register', async (user: RegisterUser, thunkApi) => {
    try {
      return await authService.register(user);
    } catch (error: any) {
      const message = (() => {
        if (error.response && error.response.data && error.response.data.message) {
          const errorMessage = error.response.data.message;
          if (Array.isArray(errorMessage)) {
            return errorMessage[0];
          } else if (typeof errorMessage === 'string') {
            return errorMessage;
          }
        }
        return error.message || error.toString();
      })();
  
      return thunkApi.rejectWithValue(message);
    }
  });
  
  export const login = createAsyncThunk('auth/login', async (user: LoginUser, thunkApi) => {
    try {
      const response = await authService.login(user);
      return {name: response.fullName, email: response.email, token: response.token, phone: response.phone, username: response.username}
    } catch (error: any) {
      console.log(error);
      const message = (error.response && error.response.data && error.response.message) || error.message || error.toString();
      return thunkApi.rejectWithValue(message);
    }
  });
  
  export const logout = createAsyncThunk('auth/logout', async () => {
    authService.logout();
  });