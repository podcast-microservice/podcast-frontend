import React, { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import PersonIcon from '@mui/icons-material/Person';
import Typography from '@mui/material/Typography';
import IconRound from '~/shared/components/ui/IconRound';
import Box from '@mui/material/Box';
import { routes } from '~/routes';
import Drawer from '@mui/material/Drawer';
import { Link, useLocation } from 'react-router-dom';
import Divider from '@mui/material/Divider';
import { mainNavigationLinks } from '~/shared/utils/constants/navigation-link';
import { ToggleTheme } from '../ToggleTheme';
import cx from 'classnames';

const DrawerMenu = () => {
  const location = useLocation();
  const currentRoute = location.pathname;
  const [isOpenSidebar, setIsOpenSidebar] = useState(false);
  const toggleDrawer = (isOpen: boolean) => {
    setIsOpenSidebar(isOpen);
  };
  const drawerContent = () => (
    <Box
      sx={{
        width: 250,
        height: '100%',
        display: 'flex',
        'flex-direction': 'column',
        'justify-content': 'space-between'
      }}
      role='presentation'
      onClick={() => {
        toggleDrawer(false);
      }}
      onKeyDown={() => {
        toggleDrawer(false);
      }}
    >
      <List className='tw-mb-10'>
        {mainNavigationLinks.map((link, index) => {
          const listItemTextClass = cx(
            'hover:tw-text-primary',
            currentRoute && currentRoute.includes(link.path) && 'tw-text-primary'
          );
          return (
            <Link key={index} to={link.path}>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemText className={listItemTextClass} primary={link.title} />
                </ListItemButton>
              </ListItem>
              {index !== mainNavigationLinks.length - 1 && <Divider light className='tw-border-primary' />}
            </Link>
          );
        })}
      </List>
      <div className='tw-flex tw-justify-between'>
        <ToggleTheme />
        <Link to={routes.loginPath} className='tw-flex tw-flex-row tw-items-center tw-justify-center'>
          <IconRound
            icon={<PersonIcon className='tw-text-[20px] tw-text-background' />}
            backgroundColor='primary'
            className='tw-mr-2'
            hasRing
          />
          <Typography className='tw-font-bold'>Login</Typography>
        </Link>
      </div>
    </Box>
  );
  return (
    <>
      <IconButton
        size='large'
        onClick={() => {
          toggleDrawer(true);
        }}
      >
        <MenuIcon className='tw-text-primary' fontSize='inherit' />
      </IconButton>
      <Drawer
        anchor={'right'}
        open={isOpenSidebar}
        onClose={() => {
          toggleDrawer(false);
        }}
        transitionDuration={{ enter: 300, exit: 300 }}
        className='tw-drawer'
      >
        {drawerContent()}
      </Drawer>
    </>
  );
};

export default DrawerMenu;
