import { combineReducers } from '@reduxjs/toolkit';
import { authReducer } from '~/features/auth';

const createReducer = (injectedReducers = {}) => {
  const appReducer = combineReducers({
    auth: authReducer,
    ...injectedReducers
  });

  return appReducer;
};

export default createReducer;
