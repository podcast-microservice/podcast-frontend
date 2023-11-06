import { createAsyncThunk } from '@reduxjs/toolkit';
import { LoginPayload } from '../models/requestModel';
import { authApi } from '..';

export const login = createAsyncThunk('auth/login', async (payload: LoginPayload) => {
  try {
    const response = await authApi.login(payload);
    return {
      userData: {
        email: response.attributes.email as string
      }
    };
  } catch (error: any) {
    alert(error.message);
    throw error;
  }
});
