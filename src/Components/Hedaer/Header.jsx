import style from "./Header.module.scss";
import { Link, } from 'react-router-dom';


const Header = (props) => {
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
              <a  href="tel:+996 000 00 00 00" className={style.navbarPhone__num}>+996 000 00 00 00</a>
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
              <input type="text" placeholder="Поиск" />
            </form>
            <div className={style.bottom__favorites}>
              <img src="/img/heart-icon.svg" alt="heart-icon" />
              <span>Избранное</span>
            </div>
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
export default Header;
