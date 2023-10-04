import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { authActions, authSelectors } from '~/features/auth';
import Button from '@mui/material/Button';

const HomePage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isUserAuthenticated = useSelector(authSelectors.isUserAuthenticated);

  const logout = () => {
    dispatch(authActions.setIsAuthenticated(false));
  };
  return (
    <div className='h-screen flex justify-center items-center'>
      <Button
        onClick={() => {
          navigate('/login');
        }}
      >
        Go To Login
      </Button>
      <Button
        onClick={() => {
          navigate('/components');
        }}
        className='ml-2'
      >
        Go To Components
      </Button>
      {isUserAuthenticated && (
        <Button className='ml-2' onClick={logout}>
          Logout
        </Button>
      )}
    </div>
  );
};

export default HomePage;
