import { useEffect, useState } from 'react';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
const ToggleTheme = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');
  const toggleTheme = () => {
    const tempTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(tempTheme);
  };
  useEffect(() => {
    localStorage.setItem('theme', theme);
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);
  return (
    <>
      <Tooltip title={theme === 'dark' ? 'Light Mode' : 'Dark Mode'}>
        <IconButton
          className='tw-mr-3 md:tw-mr-10 tw-bg-primary tw-text-background'
          size='medium'
          onClick={toggleTheme}
        >
          {theme === 'dark' ? <LightModeIcon /> : <DarkModeIcon />}
        </IconButton>
      </Tooltip>
    </>
  );
};

export default ToggleTheme;
