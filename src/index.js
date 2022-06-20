import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import basket from './DataBase/basket';

const root = ReactDOM.createRoot(document.getElementById('root'));
basket.main()

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);


