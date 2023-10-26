import PersonIcon from '@mui/icons-material/Person';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { routes } from '~/routes';
import Logo from '~/shared/components/Logo';
import IconRound from '~/shared/components/ui/IconRound';
import NavigationMenu from '~/shared/components/ui/NavigationMenu';
import { DrawerMenu } from '../ui/DrawerMenu';
import { mainNavigationLinks } from '~/shared/utils/constants/navigation-link';
import ToggleTheme from '../ui/ToggleTheme';

const Header = () => {
  return (
    <header className='tw-h-20 tw-shadow-md tw-shadow-primary/60 tw-fixed tw-w-full tw-bg-background tw-top-0 tw-left-0 tw-z-[99]'>
      <nav className='tw-flex tw-flex-wrap tw-items-center tw-justify-between tw-mx-auto tw-p-4 tw-max-w-screen-xl'>
        <Link to={routes.homePath} className='tw-flex tw-flex-row tw-items-center'>
          <Logo className='tw-w-8 sm:tw-w-11' />
          <Typography className='tw-text-xl sm:tw-text-2xl tw-ml-2 tw-font-bold'>Psych</Typography>
          <Typography className='tw-text-xl sm:tw-text-2xl tw-font-bold tw-text-primary'>ology</Typography>
        </Link>
        {/* Mobile Menu */}
        <div className='tw-justify-self-end lg:tw-hidden'>
          <DrawerMenu />
        </div>
        <div className='tw-hidden lg:tw-block'>
          <NavigationMenu navigationLinks={mainNavigationLinks} />
        </div>
        <div className='tw-hidden lg:tw-flex'>
          <Link to={routes.loginPath} className='tw-hidden lg:tw-flex tw-flex-row tw-items-center tw-mr-2'>
            <Typography className='tw-font-bold'>Login</Typography>
            <IconRound
              icon={<PersonIcon className='tw-text-[20px] tw-text-background' />}
              backgroundColor='primary'
              className='tw-ml-2'
              hasRing
            />
          </Link>
          <ToggleTheme />
        </div>
      </nav>
    </header>
  );
};

export default Header;
