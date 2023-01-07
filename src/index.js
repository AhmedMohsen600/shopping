import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter as Routes } from 'react-router-dom';
import store from './app/store';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { GlobalStyles } from './global-styles';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <Routes>
      <GlobalStyles />
      <App />
    </Routes>
  </Provider>
);

reportWebVitals();
