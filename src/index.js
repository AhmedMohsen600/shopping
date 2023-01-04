import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Routes } from 'react-router-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { GlobalStyles } from './global-styles';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Routes>
    <GlobalStyles />
    <App />
  </Routes>
);

reportWebVitals();
