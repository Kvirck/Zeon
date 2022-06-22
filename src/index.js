import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import basket from './DataBase/basket';
import favorites from './DataBase/favoritesV2';

const Basket = new basket()
const Favorites = new favorites()

const root = ReactDOM.createRoot(document.getElementById('root'));
Basket.main()
Favorites.main()

export const Context = createContext({ Basket, Favorites })
root.render(
  <BrowserRouter>
    <Context.Provider value={{ Basket,Favorites }}>
      <App />
    </Context.Provider>
  </BrowserRouter>
);


