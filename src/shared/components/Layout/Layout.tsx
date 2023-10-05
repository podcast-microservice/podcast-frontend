import { Outlet } from 'react-router-dom';
import Header from '../Header';
import Footer from '../Footer';
import Grid from '@mui/material/Grid';

const Layout = () => {
  return (
    <>
      <Header />
      <Grid container className='tw-h-full tw-bg-background tw-mt-20'>
        <Grid item xs={6} md={1}></Grid>
        <Grid item xs={6} md={10}>
          <Outlet />
        </Grid>
        <Grid item xs={6} md={1}></Grid>
      </Grid>
      <Footer />
    </>
  );
};

export default Layout;
