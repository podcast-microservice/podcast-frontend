import { createSlice } from '@reduxjs/toolkit';
import { login } from './actions';

export interface AuthCognitoState {
  isLoading: boolean;
  userData?: { email: string };
  isUserAuthenticated: boolean;
  isCheck: boolean;
}

const initialState: AuthCognitoState = {
  isLoading: false,
  userData: undefined,
  isUserAuthenticated: false,
  isCheck: false
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setIsAuthenticated: (state, { payload }) => {
      state.isUserAuthenticated = payload;
    },
    setIsCheckToTrue: (state) => {
      state.isCheck = true;
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
      });
  }
});

export const { name, reducer } = authSlice;
export const actions = {
  ...authSlice.actions,
  login
};
