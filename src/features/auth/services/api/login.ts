import { Auth } from 'aws-amplify';
import { LoginPayload } from '../../models/requestModel';

export function login({ username, password }: LoginPayload) {
  return Auth.signIn({
    username,
    password
  });
}
