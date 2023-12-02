import { Outlet } from 'react-router-dom';
import Header from '../Header';
import Footer from '../Footer';

const Layout = () => {
  return (
    <>
      <Header />
      <div className='tw-bg-background tw-mt-20'>
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Layout;
