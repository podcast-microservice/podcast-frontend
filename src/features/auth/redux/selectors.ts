import { RootState } from '~/configs/configureStore';

const isUserAuthenticated = (state: RootState): boolean => state?.auth?.isUserAuthenticated;

export const authSelectors = { isUserAuthenticated };
