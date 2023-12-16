import { createAsyncThunk } from '@reduxjs/toolkit';

import {
  getAllUsers,
  getUserDetail,
  loginUser,
  registerUser,
  setProfilePicture,
} from 'apis/auth';

export const login = createAsyncThunk('auth/login', async (data, thunkAPI) => {
  try {
    const res = await loginUser(data);
    return res.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});
export const register = createAsyncThunk('auth/signup', async (data) => {
  try {
    const res = await registerUser(data);
    return res.data;
  } catch (error) {
    return 'Error during Register', error;
  }
});

export const verifyToken = createAsyncThunk('auth/me', async () => {
  try {
    const res = await getUserDetail(); //currentUser
    // console.log(res.data);
    return res.data;
  } catch (error) {
    console.log('Error during verifying token', error);
    throw error;
  }
});

export const gettingAllUsers = createAsyncThunk('auth/allUsers', async () => {
  try {
    const res = await getAllUsers(); // all users except current one
    return res.data;
  } catch (error) {
    return 'Error during verifying token', error;
  }
});

export const setUserProfilePicture = createAsyncThunk(
  'auth/setUserProfilePicture',
  async ({ data, cb }) => {
    try {
      const res = await setProfilePicture(data); // all users except current one
      return { data: res.data, cb };
    } catch (error) {
      console.log(error);
      return 'Error setting profile picture', error;
    }
  }
);
