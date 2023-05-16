import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  authAvatar,
  authLogin,
  authRegister,
  authUpdate,
  authUser,
} from "./authService";

export const register = createAsyncThunk(
  "auth/register",
  async (user, thunkApi) => {
    try {
      return await authRegister(user);
    } catch (error) {
      const message = error.message;
      return thunkApi.rejectWithValue(message);
    }
  }
);

export const update = createAsyncThunk(
  "auth/update",
  async (user, thunkApi) => {
    try {
      return await authUpdate(user);
    } catch (error) {
      const message = error.message;
      return thunkApi.rejectWithValue(message);
    }
  }
);

export const login = createAsyncThunk("auth/login", async (user, thunkApi) => {
  try {
    return await authLogin(user);
  } catch (error) {
    const message = error.message;
    return thunkApi.rejectWithValue(message);
  }
});

export const user = createAsyncThunk("auth/user", async (thunkApi) => {
  try {
    return await authUser();
  } catch (error) {
    const message = error.message;
    return thunkApi.rejectWithValue(message);
  }
});

export const avatar = createAsyncThunk("auth/avatar", async (file,thunkApi) => {
  try {
    return await authAvatar(file);
  } catch (error) {
    const message = error.message;
    return thunkApi.rejectWithValue(message);
  }
});

const initialState = {
  allUsers: [],
  activeUser: "",
  isLoggedIn: false,
  isLoading: "",
  isSuccess: "",
  isError: "",
  message: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signout: (state) => {
      state.isLoggedIn = false;
      state.activeUser = null;
      state.isLoading = "";
      state.isSuccess = "";
      state.isError = "";
      state.message = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.allUsers = [...state.allUsers, action.payload];
      })
      .addCase(register.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.message = action.payload;
      })
      .addCase(login.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isLoggedIn = true;
      })
      .addCase(login.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.message = action.payload;
      })
      .addCase(user.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(user.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.activeUser = action.payload;
      })
      .addCase(user.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.message = action.payload;
      })
      .addCase(update.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(update.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
      })
      .addCase(update.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.message = action.payload;
      })
      .addCase(avatar.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(avatar.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.activeUser = action.payload
      })
      .addCase(avatar.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.message = action.payload;
      })
  },
});

export const { signout } = authSlice.actions;
export default authSlice.reducer;
