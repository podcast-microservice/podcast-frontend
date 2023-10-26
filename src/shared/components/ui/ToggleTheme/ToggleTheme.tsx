import { useEffect, useState } from 'react';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import { getTheme, themes, updateTheme } from '~/shared/utils/themes';

const ToggleTheme = () => {
  const [theme, setTheme] = useState<string>(getTheme());
  const toggleTheme = () => {
    setTheme((prevTheme) => {
      return prevTheme === themes.dark ? themes.light : themes.dark;
    });
  };
  useEffect(() => {
    updateTheme(theme);
  }, [theme]);

  return (
    <Tooltip title={theme === themes.dark ? 'Light Mode' : 'Dark Mode'}>
      <IconButton className='tw-bg-primary tw-text-background tw-h-10 tw-w-10' size='medium' onClick={toggleTheme}>
        {theme === themes.dark ? (
          <LightModeIcon className='tw-text-[20px]' />
        ) : (
          <DarkModeIcon className='tw-text-[20px]' />
        )}
      </IconButton>
    </Tooltip>
  );
};

export default ToggleTheme;
