import React, { FC } from 'react';
import './App.css';
import { Provider } from 'react-redux';
import { store } from './redux';
import RootNavigator from './router';
const App: FC = () => {
  return (
    <Provider store={store}>
      <RootNavigator />
    </Provider>
  );
};

export default App;
