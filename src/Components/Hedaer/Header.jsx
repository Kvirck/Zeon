import style from "./Header.module.scss";
import { Link, } from 'react-router-dom';
import dataLinks from "../../DataBase/dataLinks";
import { observer } from 'mobx-react-lite';


const Header = (props) => {
  const fav = localStorage.getItem('favorites')
  let favFact
  const favFucn = () => {
    if (fav.length === 2) {
      return favFact = false
    }
    if (fav.length !== 2) {
      return favFact = true
    }
  }
  favFucn()

  const data = dataLinks.toJS_links
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
                onChange={event=>console.log(event.target.value)}
              />
            </form>
            <Link to='/Favorites'>
              <div className={style.bottom__favorites}>
                <div className={style.bottom__favorites__icon}>
                  <img src="/img/heart-icon.svg" alt="heart-icon" />
                  <div className={favFact ? `${style.bottom__favorites__red} ${style.bottom__favorites__active}` : style.bottom__favorites__red}></div>
                </div>
                <span>Избранное</span>
              </div>
            </Link>
            <Link to='/Basket'>
              <div className={style.bottom__basket}>
                <img src="/img/basket-icon.svg" alt="basket-icon" />
                <span>Корзина</span>
              </div>
            </Link>
          </div>
        </div>
        <div className={style.inner}></div>
      </div>
    </div>
  );
};
export default observer(Header);
