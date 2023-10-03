import '~/shared/styles/global.css';
import { Provider as ReduxProvider } from 'react-redux';
import { ThemeProvider } from '@mui/material/styles';
import store from './configs/configureStore';
import { AppRoutes } from './routes';
import { muiTheme } from './lib/mui-theme';

function App() {
  return (
    <ReduxProvider store={store}>
      <ThemeProvider theme={muiTheme}>
        <AppRoutes />
      </ThemeProvider>
    </ReduxProvider>
  );
}

export default App;
