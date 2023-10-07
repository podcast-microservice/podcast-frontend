import PersonIcon from '@mui/icons-material/Person';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { routes } from '~/routes';
import Logo from '~/shared/components/Logo';
import IconRound from '~/shared/components/ui/IconRound';
import NavigationMenu from '~/shared/components/ui/NavigationMenu';
import { mainNavigationLinks } from '~/shared/utils/constants/navigation-link';

const Header = () => {
  return (
    <header className='tw-h-20 tw-shadow-md tw-shadow-primary/60 tw-fixed tw-w-full tw-bg-background tw-top-0 tw-left-0 tw-z-[99]'>
      <Grid container className='tw-h-full'>
        <Grid item xs={6} md={1}></Grid>
        <Grid item xs={6} md={10} className='tw-flex tw-flex-row tw-items-center tw-justify-between'>
          <Link to={routes.homePath} className='tw-flex tw-flex-row tw-items-center'>
            <Logo />
            <Typography className='tw-text-2xl tw-ml-2 tw-font-bold'>Psych</Typography>
            <Typography className='tw-text-2xl tw-font-bold tw-text-primary'>ology</Typography>
          </Link>
          <NavigationMenu navigationLinks={mainNavigationLinks} />
          <Link to={routes.loginPath} className='tw-flex tw-flex-row tw-items-center'>
            <Typography className='tw-font-bold'>Login</Typography>
            <IconRound
              icon={<PersonIcon className='tw-text-[20px] tw-text-background' />}
              backgroundColor='primary'
              className='tw-ml-2'
              hasRing
            />
          </Link>
        </Grid>
        <Grid item xs={6} md={1}></Grid>
      </Grid>
    </header>
  );
};

export default Header;
