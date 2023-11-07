import { Auth } from 'aws-amplify';

export function checkSession() {
  return Auth.currentAuthenticatedUser();
}
