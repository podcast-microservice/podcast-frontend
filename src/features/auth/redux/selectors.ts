import { RootState } from '~/configs/reduxStore/configureStore';

const isUserAuthenticated = (state: RootState): boolean => state?.auth?.isUserAuthenticated;

export const authSelectors = { isUserAuthenticated };
