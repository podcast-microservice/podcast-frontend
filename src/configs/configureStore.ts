import { configureStore } from '@reduxjs/toolkit';
import createReducer from './rootReducer';

const store = configureStore({
  reducer: createReducer()
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
