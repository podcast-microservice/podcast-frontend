import { useDispatch, useSelector } from 'react-redux';
import { authActions, authSelectors } from '~/features/auth';
import Button from '@mui/material/Button';

const Login = () => {
  const dispatch = useDispatch();

  const isUserAuthenticated = useSelector(authSelectors.isUserAuthenticated);

  const login = () => {
    dispatch(authActions.setIsAuthenticated(true));
  };
  return (
    <div className='h-screen flex justify-center items-center'>
      {!isUserAuthenticated && <Button onClick={login}>Login</Button>}
    </div>
  );
};

export default Login;
