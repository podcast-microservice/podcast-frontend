import { createAsyncThunk } from '@reduxjs/toolkit';
import { LoginPayload } from '../models/requestModel';
import { authApi } from '..';
import { getRoleFromSession } from '../services/helpers';
import { removeAccessToken, setAccessToken } from '~/configs/tokenConfig';

export const login = createAsyncThunk('auth/login', async (payload: LoginPayload) => {
  try {
    const response = await authApi.login(payload);
    return {
      userData: {
        email: response.attributes.email as string,
        role: getRoleFromSession(response.signInUserSession)
      }
    };
  } catch (error: any) {
    alert(error.message);
    throw error;
  }
});

export const checkSession = createAsyncThunk('auth/checkSession', async () => {
  try {
    const response = await authApi.checkSession();
    console.log(response);
    const accessToken = response.signInUserSession.accessToken.jwtToken;
    setAccessToken(accessToken);
    return {
      userData: {
        email: response.attributes.email,
        role: getRoleFromSession(response.signInUserSession)
      }
    };
  } catch (error: any) {
    console.log(error.message);
    removeAccessToken();
    throw error;
  }
});
