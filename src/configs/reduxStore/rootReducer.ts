import { combineReducers } from '@reduxjs/toolkit';
import { authReducer } from '~/features/auth';
import { adminPodcastReducer } from '~/features/admin-podcast';

const createReducer = (injectedReducers = {}) => {
  const appReducer = combineReducers({
    auth: authReducer,
    adminPodcasts: adminPodcastReducer,
    ...injectedReducers
  });

  return appReducer;
};

export default createReducer;
