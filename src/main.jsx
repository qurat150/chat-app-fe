import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from '@emotion/react';

import { theme } from 'theme';
import App from './App.jsx';
import './index.css';
import { Provider } from 'react-redux';
import store from 'redux/store.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <App />
    </Provider>
  </ThemeProvider>
);
