import React, { FC } from 'react';
import './App.css';
import { Provider } from 'react-redux';
import { store } from './redux';
import RootNavigator from './router';
import { ThemeProvider } from '@mui/material';
import theme from './theme/index';
const App: FC = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <RootNavigator />
      </ThemeProvider>
    </Provider>
  );
};

export default App;
