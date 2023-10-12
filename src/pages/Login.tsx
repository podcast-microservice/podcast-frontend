import { useDispatch, useSelector } from 'react-redux';
import { authActions, authSelectors } from '~/features/auth';
import { LoginForm } from '../features/auth/components/LoginForm';
const Login = () => {
  const dispatch = useDispatch();

  const isUserAuthenticated = useSelector(authSelectors.isUserAuthenticated);

  const login = () => {
    dispatch(authActions.setIsAuthenticated(true));
  };
  return (
    <div className='tw-h-[calc(100vh-5rem)] tw-flex tw-justify-center tw-items-center tw-bg-gradient'>
      {/* {!isUserAuthenticated && <Button onClick={login}>Login</Button>} */}
      <LoginForm />
    </div>
  );
};

export default Login;
