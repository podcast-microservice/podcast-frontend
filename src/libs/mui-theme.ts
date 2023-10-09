import { createTheme } from '@mui/material';

export const muiTheme = createTheme({
  palette: {
    primary: {
      main: '#FFA500'
    },
    secondary: {
      main: '#f44336'
    }
  },
  typography: {
    button: {
      textTransform: 'none'
    }
  }
});
