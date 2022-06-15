import { Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';

import './App.css';
import HomePage from './Pages/HomePage/HomePage';
import Header from './Components/Hedaer/Header';
import Footer from './Components/Footer/Footer';
import AboutAs from './Pages/AboutAs/AboutAs';
import NewsPage from './Pages/NewsPage/NewsPage';
import Help from './Pages/Help/Help';
import Basket from './Pages/Basket/Basket';
import collections from './DataBase/collections';
import collectionsPage from './DataBase/collectionsPage';
import Collections from './Pages/Collections/Collections';
import cardsBesteller from './DataBase/cardsBesteller';
import novelties from './DataBase/novelties';
import ProductsPage from './Pages/ProductsPage/ProductsPage';
import Section from './Pages/SectionPage/SectionPage';
import MiniHedaer from './Components/Hedaer/MiniHedaer';
import CollectionsPage from './Pages/CollectionsPage/CollectionsPage';

function App() {
  useEffect(() => {
    collections.getCollections()
    collectionsPage.getCollections()
    cardsBesteller.getCardBesteller()
    novelties.getNovelties()
  }, [])

  return (
    <div>
      <Header />
      <MiniHedaer />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/NewsPage' element={<NewsPage />} />
        <Route path='/AboutAs' element={<AboutAs />} />
        <Route path='/Basket' element={<Basket />} />
        <Route path='/Help' element={<Help />} />
        <Route path='/Collections' element={<Collections />} />
        <Route path='/ProductsPage/:id' element={<ProductsPage />} />
        <Route path='/Section' element={<Section />} />
        <Route path='/Collections/:id' element={<CollectionsPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
