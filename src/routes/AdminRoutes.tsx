import { Route, Routes } from 'react-router-dom';
import AdminLayout from '~/shared/components/AdminLayout';
import { adminRoutes } from '.';
import NotFoundPage from '~/pages/NotFoundPage';
import { lazy } from 'react';

const AdminPodcastPage = lazy(() => import('~/pages/AdminPodcastPage'));

export const AdminRoutes = () => {
  return (
    <Routes>
      <Route element={<AdminLayout />}>
        <Route path={adminRoutes.podcast} element={<AdminPodcastPage />} />
      </Route>
      <Route path='*' element={<NotFoundPage />} />
    </Routes>
  );
};
