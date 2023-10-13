import { ThemeProvider } from '@mui/material/styles';
import { QueryClientProvider } from 'react-query';
import { Provider as ReduxProvider } from 'react-redux';
import '~/shared/styles/global.css';
import store from './configs/reduxStore';
import { queryClient } from './configs/queryClient';
import { muiTheme } from './libs/mui-theme';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { AppRoutes } from './routes';

function App() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <QueryClientProvider client={queryClient}>
        <ReduxProvider store={store}>
          <ThemeProvider theme={muiTheme}>
            <AppRoutes />
          </ThemeProvider>
        </ReduxProvider>
      </QueryClientProvider>
    </LocalizationProvider>
  );
}

export default App;
