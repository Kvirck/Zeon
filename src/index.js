import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import basket from './DataBase/basket';

const Basket = new basket()

const root = ReactDOM.createRoot(document.getElementById('root'));
Basket.main()
export const Context = createContext({ Basket })
root.render(
  <BrowserRouter>
    <Context.Provider value={{ Basket }}>
      <App />
    </Context.Provider>
  </BrowserRouter>
);


