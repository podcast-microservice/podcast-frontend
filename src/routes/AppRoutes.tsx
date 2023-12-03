import { useEffect, lazy, Suspense } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { AppDispatch } from '~/configs/reduxStore';
import { authActions, authSelectors } from '~/features/auth';
import Layout from '~/shared/components/Layout';
import { AdminRoutes } from './AdminRoutes';
import { routes } from './routes';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import KidsplazaPage from '~/pages/Kidsplaza';

const LoginPage = lazy(() => import('~/pages/LoginPage'));
const RegisterPage = lazy(() => import('~/pages/RegisterPage'));
const HomePage = lazy(() => import('~/pages/HomePage'));
const PodcastPage = lazy(() => import('~/pages/PodcastPage'));
const BasicComponent = lazy(() => import('~/pages/BasicComponent'));
const ComplexComponent = lazy(() => import('~/pages/ComplexComponent'));
const NotFoundPage = lazy(() => import('~/pages/NotFoundPage'));

const AppRoutes = () => {
  const dispatch = useDispatch<AppDispatch>();
  const isUserAuthenticated = useSelector(authSelectors.isUserAuthenticated);
  const userData = useSelector(authSelectors.userData);

  useEffect(() => {
    // TODO: check session after access token expires
    if (!isUserAuthenticated) {
      dispatch(authActions.checkSession());
    }
  }, [isUserAuthenticated, dispatch]);

  return (
    <BrowserRouter>
      <Suspense
        fallback={
          <Backdrop className='tw-bg-background' open={true}>
            <CircularProgress color='primary' />
          </Backdrop>
        }
      >
        <Routes>
          <Route element={<Layout />}>
            <Route path='/' element={<Navigate to={routes.homePath} />} />
            <Route path={routes.homePath} element={<HomePage />} />
            <Route path={routes.podcastPath} element={<PodcastPage />} />
            <Route path={routes.componentPath} element={<BasicComponent />} />
            <Route path={routes.componentComplexPath} element={<ComplexComponent />} />
            <Route path='/kids' element={<KidsplazaPage />} />
            <Route
              path={routes.loginPath}
              element={isUserAuthenticated ? <Navigate to={routes.homePath} /> : <LoginPage />}
            />
            <Route
              path={routes.registerPath}
              element={isUserAuthenticated ? <Navigate to={routes.homePath} /> : <RegisterPage />}
            />
          </Route>
          {userData && userData.role === 'admin' && <Route path='/admin/*' element={<AdminRoutes />} />}
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default AppRoutes;
