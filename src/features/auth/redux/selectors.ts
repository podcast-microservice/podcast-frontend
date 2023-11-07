import { RootState } from '~/configs/reduxStore';

const isUserAuthenticated = (state: RootState): boolean => state?.auth?.isUserAuthenticated;

const isLoading = (state: RootState): boolean => state?.auth?.isLoading;

const userData = (state: RootState): { email: string; role: string } | undefined => state?.auth?.userData;

export const authSelectors = { isUserAuthenticated, isLoading, userData };
