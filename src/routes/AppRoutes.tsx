import { useSelector } from 'react-redux';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { authSelectors } from '~/features/auth';
import BasicComponent from '~/pages/BasicComponent';
import HomePage from '~/pages/HomePage';
import LoginPage from '~/pages/LoginPage';
import { routes } from './routes';
import Layout from '~/shared/components/Layout';
import ComplexComponent from '~/pages/ComplexComponent';
import Podcasts from '~/pages/Podcasts';
import RegisterPage from '~/pages/RegisterPage';

const AppRoutes = () => {
  const isUserAuthenticated = useSelector(authSelectors.isUserAuthenticated);
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<Navigate to='/home' />} />
          <Route path={routes.homePath} element={<HomePage />} />
          <Route path={routes.podcastPath} element={<Podcasts />} />
          <Route path={routes.componentPath} element={<BasicComponent />} />
          <Route path={routes.componentComplexPath} element={<ComplexComponent />} />
          <Route path={routes.loginPath} element={isUserAuthenticated ? <Navigate to='/home' /> : <LoginPage />} />
          <Route
            path={routes.registerPath}
            element={isUserAuthenticated ? <Navigate to='/home' /> : <RegisterPage />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
