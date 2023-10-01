import '~/shared/styles/global.css';
import { Provider as ReduxProvider } from 'react-redux';
import store from './configs/configureStore';
import AppRoutes from './routes/AppRoutes';

function App() {
  return (
    <ReduxProvider store={store}>
      <AppRoutes />
    </ReduxProvider>
  );
}

export default App;
