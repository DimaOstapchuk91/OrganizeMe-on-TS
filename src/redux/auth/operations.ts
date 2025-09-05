import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import {
  AuthResponse,
  LoginPayload,
  RegisterPayload,
  UserResponse,
} from './auth.types';
import { handleAsyncError } from '../config/asyncError';
import { ThunkConfig } from '../../types/reduxTypes/common.types';

export const goitApi = axios.create({
  baseURL: 'https://connections-api.goit.global',
});

export const setAuthHeader = (token: string) => {
  goitApi.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const register = createAsyncThunk<
  AuthResponse,
  RegisterPayload,
  ThunkConfig
>('auth/register', async (credentials, thunkApi) => {
  try {
    const { data } = await goitApi.post<AuthResponse>(
      '/users/signup',
      credentials
    );
    setAuthHeader(data.token);
    return data;
  } catch (error) {
    return thunkApi.rejectWithValue(handleAsyncError(error));
  }
});

export const login = createAsyncThunk<AuthResponse, LoginPayload, ThunkConfig>(
  'auth/login',
  async (userLogin, thunkApi) => {
    try {
      const { data } = await goitApi.post<AuthResponse>(
        '/users/login',
        userLogin
      );
      setAuthHeader(data.token);

      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(handleAsyncError(error));
    }
  }
);

export const logaut = createAsyncThunk<{}, void, ThunkConfig>(
  'auth/logaut',
  async (_, thunkApi) => {
    try {
      const { data } = await goitApi.post<{}>('/users/logout');
      return data;
    } catch (error: unknown) {
      return thunkApi.rejectWithValue(handleAsyncError(error));
    }
  }
);

export const refreshUser = createAsyncThunk<UserResponse, void, ThunkConfig>(
  'auth/refresh',
  async (_, thunkApi) => {
    const token = thunkApi.getState().auth.token;
    if (!token) {
      return thunkApi.rejectWithValue({ message: 'token not found' });
    }

    setAuthHeader(token);

    try {
      const { data } = await goitApi.get<UserResponse>('/users/current');
      return data;
    } catch (error: unknown) {
      return thunkApi.rejectWithValue(handleAsyncError(error));
    }
  }
);
