// helper function for auth feature
export function getRoleFromSession(session: any): string {
  const { accessToken } = session;
  const { payload } = accessToken;
  const roles = payload['cognito:groups'];
  if (roles.includes('admin')) {
    return 'admin';
  }
  return 'user';
}
