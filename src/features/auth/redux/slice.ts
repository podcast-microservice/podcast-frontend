import { createSlice } from '@reduxjs/toolkit';
import { login, checkSession } from './actions';

export interface AuthCognitoState {
  isLoading: boolean;
  userData?: { email: string; role: string };
  isUserAuthenticated: boolean;
}

const initialState: AuthCognitoState = {
  isLoading: false,
  userData: undefined,
  isUserAuthenticated: false
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setIsAuthenticated: (state, { payload }) => {
      state.isUserAuthenticated = payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, { payload }) => {
        state.isUserAuthenticated = true;
        state.userData = payload.userData;
        state.isLoading = false;
      })
      .addCase(login.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(checkSession.fulfilled, (state, { payload }) => {
        state.isUserAuthenticated = true;
        state.userData = payload.userData;
      })
      .addCase(checkSession.rejected, (state) => {
        state.isUserAuthenticated = false;
        state.userData = undefined;
      });
  }
});

export const { name, reducer } = authSlice;
export const actions = {
  ...authSlice.actions,
  login,
  checkSession
};
