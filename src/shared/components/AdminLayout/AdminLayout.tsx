import { Outlet } from 'react-router-dom';
import Header from '../Header';

const AdminLayout = () => {
  return (
    <>
      <Header />
      <div className='tw-bg-background tw-mt-20'>
        <Outlet />
      </div>
    </>
  );
};

export default AdminLayout;
