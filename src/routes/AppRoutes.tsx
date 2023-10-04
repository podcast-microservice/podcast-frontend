import { useSelector } from 'react-redux';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { authSelectors } from '~/features/auth';
import BasicComponent from '~/pages/BasicComponent';
import HomePage from '~/pages/HomePage';
import Login from '~/pages/Login';
import { routes } from './routes';

const AppRoutes = () => {
  const isUserAuthenticated = useSelector(authSelectors.isUserAuthenticated);
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navigate to='/home' />} />
        <Route path={routes.homePath} element={<HomePage />} />
        <Route path={routes.componentPath} element={<BasicComponent />} />
        <Route path={routes.loginPath} element={isUserAuthenticated ? <Navigate to='/home' /> : <Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
