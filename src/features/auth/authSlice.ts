import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from "./authService";

interface User {
  username: string,
  email: string,
  full_name: string,
  password: string,
  phone: string
}

const user: User | null = typeof window !== 'undefined' ? JSON.parse(localStorage.getItem("user") || "{}") as User : null;

interface InitialState {
  user: User | null;
  isError: boolean;
  isSuccess: boolean;
  isLoading: boolean;
  message: any;
}

const initialState: InitialState = {
  user: user,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: ''
};

export const register = createAsyncThunk('auth/register', async (user: User, thunkApi) => {
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

export const login = createAsyncThunk('auth/login', async (user: User, thunkApi) => {
  try {
    return await authService.login(user);
  } catch (error: any) {
    console.log(error);
    const message = (error.response && error.response.data && error.response.message) || error.message || error.toString();
    return thunkApi.rejectWithValue(message);
  }
});

export const logout = createAsyncThunk('auth/logout', async () => {
  authService.logout();
});

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    reset: (state) => {
      state.isError = false;
      state.isLoading = false;
      state.isSuccess = false;
      state.message = "";
    }
  },
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
        state.user = null;
      })
      .addCase(logout.fulfilled, (state) => {
        state.user = null;
      })
      .addCase(login.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload;
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.user = null;
      });
  }
});

export const { reset } = authSlice.actions;
export default authSlice.reducer;
