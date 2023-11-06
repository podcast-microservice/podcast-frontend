import { RootState } from '~/configs/reduxStore';

const isUserAuthenticated = (state: RootState): boolean => state?.auth?.isUserAuthenticated;

const isLoading = (state: RootState): boolean => state?.auth?.isLoading;

export const authSelectors = { isUserAuthenticated, isLoading };
