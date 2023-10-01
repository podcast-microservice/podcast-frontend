import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isUserAuthenticated: false
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setIsAuthenticated: (state, { payload }) => {
      state.isUserAuthenticated = payload;
    }
  }
});

export const { name, actions, reducer } = authSlice;
