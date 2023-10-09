import { combineReducers } from '@reduxjs/toolkit';
import { authReducer } from '~/features/auth';
import { podcastReducer } from '~/features/podcast';

const createReducer = (injectedReducers = {}) => {
  const appReducer = combineReducers({
    auth: authReducer,
    podcasts: podcastReducer,
    ...injectedReducers
  });

  return appReducer;
};

export default createReducer;
