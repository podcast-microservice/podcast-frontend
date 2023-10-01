import { useSelector } from 'react-redux';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { authSelectors } from '~/features/auth';
import HomePage from '~/pages/HomePage';
import Login from '~/pages/Login';

const AppRoutes = () => {
  const isUserAuthenticated = useSelector(authSelectors.isUserAuthenticated);
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navigate to='/home' />} />
        <Route path='home' element={<HomePage />} />
        <Route path='login' element={isUserAuthenticated ? <Navigate to='/home' /> : <Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
