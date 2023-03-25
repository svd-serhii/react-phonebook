import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

import * as api from 'services/authApi';

const register = createAsyncThunk(
  'auth/register',
  async (data, { rejectWithValue }) => {
    try {
      const result = await api.signup(data);
      toast.success(`Registration completed`);
      return result;
    } catch (error) {
      toast.error(`Registration failed`);
      return rejectWithValue(error);
    }
  }
);

const logIn = createAsyncThunk(
  'auth/login',
  async (data, { rejectWithValue }) => {
    try {
      const result = await api.login(data);
      toast.success(`You are log in`);
      return result;
    } catch (error) {
      toast.error(`Log in failed`);
      return rejectWithValue(error);
    }
  }
);

const logOut = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      const data = await api.logout();
      toast.info(`You are log out`);
      return data;
    } catch ({ response }) {
      return rejectWithValue({ response });
    }
  }
);

const fetchCurrentUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue();
    }

    try {
      const data = await api.getCurrent(persistedToken);
      return data;
    } catch (error) {
      console.log(`${error.message}`);
    }
  }
);

const operations = {
  register,
  logOut,
  logIn,
  fetchCurrentUser,
};
export default operations;
