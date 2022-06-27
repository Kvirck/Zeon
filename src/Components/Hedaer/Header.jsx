import style from "./Header.module.scss";
import { Link, } from 'react-router-dom';
import dataLinks from "../../DataBase/dataLinks";
import { observer } from 'mobx-react-lite';
import { useNavigate } from "react-router-dom";
import { Context } from './../../index';
import { useContext } from 'react';

const Header = ({ onChange, value }) => {
  const { Basket, Favorites } = useContext(Context)


  const data = dataLinks.toJS_links

  const navigate = useNavigate();
  const searchGo = () => navigate(`/SearchPage/${value}`)

  const handlerValue = (event) => {
    onChange(event.target.value)
  }
  return (
    <div className={style.header}>
      <div className={style.navbar}>
        <div className="container">
          <div className={style.navbar__top}>
            <li>
              <Link to="/AboutAs">
                <ul>О нас</ul>
              </Link>
              <Link to='/Collections'>
                <ul>Коллекции</ul>
              </Link>
              <Link to="/NewsPage">
                <ul>Новости</ul>
              </Link>
            </li>
            <div className={style.navbar__phone}>
              <span className={style.navbarPhone}>Тел:</span>
              <a href={data[0]?.phone1} className={style.navbarPhone__num}>+996 000 00 00 00</a>
            </div>
          </div>
        </div>
        <div className={style.inner}></div>
        <div className="container">
          <div className={style.navbar__bottom}>
            <div className={style.logo}>
              <Link to='/'>
                <img src="/img/logo.svg" alt="logo" />
              </Link>
            </div>
            <form className={style.search}>
              <input
                type="text"
                placeholder="Поиск"
                onChange={handlerValue}
                onKeyPress={e => {
                  if (e.key === 'Enter' && value === '') {
                    e.preventDefault()
                  }
                  if (e.key === 'Enter' && value !== '') {
                    searchGo()
                  } else;

                }}
              />
            </form>
            <Link to='/Favorites'>
              <div className={style.bottom__favorites}>
                <div className={style.bottom__favorites__icon}>
                  <img src="/img/heart-icon.svg" alt="heart-icon" />
                  <div className={Favorites.products.length === 0 ? '' : style.bottom__favorites__red}></div>
                </div>
                <span>Избранное</span>
              </div>
            </Link>
            <Link to='/Basket'>
              <div className={style.bottom__basket}>
                <div className={Basket.products.length === 0 ? '' : style.bottom__basket__active}></div>
                <img src="/img/basket-icon.svg" alt="basket-icon" />
                <span>Корзина</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default observer(Header);
